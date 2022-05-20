import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import FirebaseHandler from "@utils/FirebaseHandler";
import { base64intoUint8Array } from "@utils/base64intoUint8Array";

const prisma = new PrismaClient();
const fbhandler = new FirebaseHandler();

class EventController {
  async createEvent(req: Request, res: Response) {
    try {
      if (!req.body.idOng || !req.body.evento || !req.body.endereco) {
        return res.status(400).json({
          status: 400,
          message: "Dados incompletos.",
          expected: {
            idOng: "number",
            evento: {
              titulo: "String",
              dataHora: "Date",
              objetivo: "string",
              descricao: "string",
              candidatos: "boolean?",
              numeroParticipantes: "number?"
            },
            endereco: {
              bairro: "string",
              numero: "number",
              cep: "string",
              rua: "string",
              complemento: "string?",
              municipio: "string",
            },
            media: [
              {
                fileName: "string",
                base64: "base64",
                type: "string",
              },
              {
                fileName: "string",
                base64: "base64",
                type: "string",
              }
            ]
          }
        });
      }

      const event: EventModel = req.body.evento;
      const adress: AdressModel = req.body.endereco;
      const idOng: number = req.body.idOng;
      const media: MediaModel[] = req.body.media;

      const ongMask = await prisma.tbl_ong.findUnique({
        where: { idOng: Number(idOng) }
      });

      if (ongMask == null) {
        return res.status(400).json({
          status: 400,
          message: `ONG com id ${idOng} não encontrada.`,
        });
      }

      const adressCreate = await prisma.tbl_endereco.create({
        data: {
          bairro: adress.bairro,
          cep: adress.cep,
          complemento: adress.complemento,
          municipio: adress.municipio,
          numero: Number(adress.numero),
          rua: adress.rua,
          idEstado: Number(adress.idEstado)
        },
      });

      const eventCreate = await prisma.tbl_eventos.create({
        data: {
          idOng: Number(idOng),
          idEndereco: adressCreate.idEndereco,
          titulo: event.titulo,
          dataHora: new Date(event.dataHora),
          objetivo: event.objetivo,
          descricao: event.descricao,
          candidatos: event.candidatos,
          numeroParticipantes: event.numeroParticipantes
        },
      });

      // Dealing with media sent, posting it to Firebase and saving it's ref into the database.
      if (eventCreate != null && media.length > 0) {
        const mediaCreated = [];
        await Promise.all(
          media.map(async (file, index) => {
            const uiArray = base64intoUint8Array(file.base64);
            const fileRef = `${ongMask.nome}/eventos/${eventCreate.idEventos}/${file.fileName}`;

            await fbhandler.uploadUint8Array(uiArray, fileRef, file.type);
            const url = await fbhandler.getMediaUrl(fileRef);

            const eventsMediaCreate = await prisma.tbl_evento_media.create({
              data: {
                idOng: Number(idOng),
                idEventos: eventCreate.idEventos,
                titulo: file.fileName,
                referencia: fileRef,
                url: url,
                tipo: file.type,
              },
            });
            eventsMediaCreate != null? mediaCreated.push(eventsMediaCreate) : null;

            console.log(`fileRef[${index}]:`, fileRef);
            console.log(`url[${index}]:`, url);
            console.log(`eventsMediaCreate[${index}]:`, eventsMediaCreate);
          })
        ).then(() => {
          return res.status(200).json({
            status: 200,
            message: "Evento criado com sucesso.",
            data: {
              evento: { ...eventCreate },
              endereco: { ...adressCreate },
              media: mediaCreated
            }
          });
        });
      }
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }
}

interface EventModel {
  titulo: string;
  dataHora: Date;
  objetivo: string;
  descricao: string;
  candidatos: boolean;
  numeroParticipantes: number;
}

interface AdressModel {
  bairro: string;
  numero: number;
  cep: string;
  rua: string;
  complemento?: string;
  municipio: string;
  idEstado: number;
}

interface MediaModel {
  fileName: string;
  base64: string;
  type: string;
}

export default EventController;