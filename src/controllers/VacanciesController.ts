import { Request, Response } from "express";
import { PrismaClient, tbl_endereco } from "@prisma/client";

const prisma = new PrismaClient();

class VacanciesController {
  async createVacancy(req: Request, res: Response) {
    try {
      const idOng: number = req.body.idOng;
      const vaga: Vacancy = req.body.vaga;
      const endereco: Adress = req.body.endereco;

      const vacancyRecord = await prisma.tbl_vagas.create({
        data: {
          idOng: Number(idOng),
          cargaHoraria: vaga.cargaHoraria,
          descricao: vaga.descricao,
          requisitos: vaga.requisitos,
          titulo: vaga.titulo,
          // idEndereco

        }
      });
      console.log("Registro de Vaga: ", vacancyRecord);

      const addressRecord = await prisma.tbl_endereco.create({
        data: { idEstado: Number(endereco.idEstado), ...endereco }
      });
      console.log("Registro de Endereço: ", addressRecord);


    } catch (error) {
      console.log(`> Error: ${error}`);
      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
        expected: {
          idOng: "number",
          vaga: {
            titulo: "string",
            descricao: "string",
            requisitos: "string",
            cargaHoraria: "string",
          },
          endereco: {
            idLogin: "number",
            idEstado: "number",
            bairro: "string",
            numero: "number",
            cep: "string",
            rua: "string",
            complemento: "string",
            municipio: "string",
          }
        }
      });
    }
  }
}

interface Vacancy {
  titulo: string;
  descricao: string;
  requisitos: string;
  cargaHoraria: string;
}

interface Adress {
  idEstado: number;
  bairro: string;
  numero: number;
  rua: string;
  cep: string;
  complemento: string;
  municipio: string;
}

export default VacanciesController;