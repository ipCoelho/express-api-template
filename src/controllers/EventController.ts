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
              uf: "string",
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

      const ufMask = await prisma.tbl_estado.findUnique({
        where: { sigla: adress.uf }
      });

      if (ufMask == null) {
        return res.status(400).json({
          status: 400,
          message: `UF '${adress.uf}' não encontrado.`,
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
          idEstado: Number(ufMask.idEstado)
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
      const mediaCreated = [];
      if (eventCreate != null && media.length > 0) {
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
        );
      }

      return res.status(200).json({
        status: 200,
        message: "Evento criado com sucesso.",
        data: {
          evento: { ...eventCreate },
          endereco: { ...adressCreate },
          media: mediaCreated
        }
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const allEvents = await prisma.tbl_eventos.findMany({
        include: {
          tbl_endereco: true,
          tbl_evento_media: true,
          tbl_ong: true
        }
      });

      return res.status(200).json({
        message: "Posts encontrados com sucesso.",
        status: 200,
        data: allEvents,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }

  async findAllByOng(req: Request, res: Response) {
    try {
      const idOng = Number(req.params.idOng);

      const allEvents = await prisma.tbl_eventos.findMany({
        where: { idOng: Number(idOng) },
        include: {
          tbl_endereco: true,
          tbl_ong: true,
          tbl_evento_media: true,
        }
      });

      return res.status(200).json({
        message: `Todos eventos da ONG ${idOng} encontrados.`,
        data: allEvents,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }

  async findUnique(req: Request, res: Response) {
    try {
      const idEvent = Number(req.params.idEvent);
      const idOng = Number(req.params.idOng);

      const selectedEvent = await prisma.tbl_eventos.findUnique({
        where: {
          idEventos: Number(idEvent) 
        },
        include: {
          tbl_endereco: {
            include: {
              tbl_estado: true
            } 
          },
          tbl_evento_media: true,
          tbl_ong: true,
          tbl_usuario_evento: true
        }
      });

      if (selectedEvent == null) {
        return res.status(400).json({
          message: `Evento '${idEvent}' da ONG '${idOng}' não encontrado.`,
          status: 400,
        });
      }

      if (Number(selectedEvent.idOng) === Number(idOng)) {
        return res.status(200).json({
          message: `Evento '${idEvent}' da ONG '${idOng}' encontrado com sucesso.`,
          data: selectedEvent,
        });
      } else {
        return res.status(400).json({
          message: `Evento '${idEvent}' da ONG '${idOng}' não encontrado.`,
          status: 400,
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
  
  async deleteEvent(req: Request, res: Response) {
    try {
      const idEvent = Number(req.params.idEvent);
      const idOng = Number(req.params.idOng);

      const allOngsEvents = await prisma.tbl_eventos.findMany({
        where: { idOng: Number(idOng) },
        include: { 
          tbl_endereco: true, 
          tbl_evento_media: true 
        }
      });
      const selectedEvent = allOngsEvents.find(event => event.idEventos === idEvent);

      if (selectedEvent == null) {
        return res.status(400).json({
          message: `Evento '${idEvent}' da ONG '${idOng}' não deletado pois não existe.`,
          status: 400,
        });
      }

      await Promise.all(
        selectedEvent.tbl_evento_media.map(async (media, index) => {
          const recordDeleted = await prisma.tbl_evento_media.delete({
            where: { idEventoMedia: media.idEventoMedia }
          });
          console.log(`evento_media record[${index}] deleted? `, recordDeleted);

          const fileRef = media.referencia;
          console.log(`fileRef[${index}]:`, fileRef);

          const fbResolve = await fbhandler.deleteFile(fileRef);
          console.log(`fbResolve[${index}]:`, fbResolve);
        }),
      );

      const recordDeleted = await prisma.tbl_eventos.delete({
        where: {
          idEventos: Number(idEvent),
        }
      });

      if (recordDeleted != null) {
        return res.status(200).json({
          message: `Evento '${idEvent}' da ONG '${idOng}' deletado com sucesso.`,
          status: 200,
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
  uf: string;
}

interface MediaModel {
  fileName: string;
  base64: string;
  type: string;
}

export default EventController;