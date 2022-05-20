import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class VacanciesController {
  async createVacancy(req: Request, res: Response) {
    try {
      if (!req.body.idOng || !req.body.vaga || !req.body.endereco) {
        return res.status(400).json({
          status: 400,
          message: "Dados incompletos.",
          expected: {
            idOng: "number",
            vaga: {
              titulo: "String",
              descricao: "string",
              requisitos: "string",
              cargaHoraria: "string",
            },
            endereco: {
              bairro: "string",
              numero: "number",
              cep: "string",
              rua: "string",
              complemento: "string?",
              municipio: "string",
              idEstado: "number",
            },
          },
        });
      }

      const idOng: number = req.body.idOng;
      const vaga: VacancyModel = req.body.vaga;
      const endereco: AdressModel = req.body.endereco;

      const ongMask = await prisma.tbl_ong.findUnique({
        where: { idOng: Number(idOng) }
      });
      console.log(`> ongMask:`, ongMask);

      if (ongMask == null) {
        return res.status(400).json({
          status: 400,
          message: `ONG com ID '${idOng}' não encontrada.`,
        });
      }

      const contactMask = await prisma.tbl_contato.findUnique({
        where: { idLogin: Number(ongMask.idLogin) }
      });

      if (contactMask == null) {
        return res.status(400).json({
          status: 400,
          message: `ONG com ID '${idOng}' não possui contato cadastrado.`,
        });
      }

      const adressRecord = await prisma.tbl_endereco.create({
        data: {
          bairro: endereco.bairro,
          cep: endereco.cep,
          complemento: endereco.complemento,
          municipio: endereco.municipio,
          numero: Number(endereco.numero),
          rua: endereco.rua,
          idEstado: Number(endereco.idEstado),
        }
      });
      console.log(`Registro do Endereço: `, adressRecord);

      const vacancyRecord = await prisma.tbl_vagas.create({
        data: {
          idOng: Number(idOng),
          cargaHoraria: vaga.cargaHoraria,
          descricao: vaga.descricao,
          requisitos: vaga.requisitos,
          titulo: vaga.titulo,
          idEndereco: adressRecord.idEndereco,
          idContato: contactMask.idContato
        }
      });
      console.log("Registro de Vaga: ", vacancyRecord);

      if (vacancyRecord != null) {
        const vacancyRecordCreated = await prisma.tbl_vagas.findUnique({
          where: { idVagas: Number(vacancyRecord.idVagas) },
          include: {
            tbl_contato: true,
            tbl_ong: true,
            tbl_endereco: true
          }
        });

        return res.status(200).json({
          status: 200,
          message: "Vaga criada com sucesso.",
          data: vacancyRecordCreated
        });
      }
    } catch (error) {
      console.log(`> Error: ${error}`);
      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }
}

interface VacancyModel {
  titulo: string;
  descricao: string;
  requisitos: string;
  cargaHoraria: string;
}

interface AdressModel {
  idEstado: number;
  bairro: string;
  numero: number;
  rua: string;
  cep: string;
  complemento: string;
  municipio: string;
}

export default VacanciesController;