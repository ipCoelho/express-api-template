import { Request, Response } from "express";
import { PrismaClient, tbl_contato, tbl_endereco, tbl_vagas } from "@prisma/client";

const prisma = new PrismaClient();

class VacanciesController {
  createVacancy(req: Request, res: Response) {
    interface Vacancy {
      titulo: string;
      descricao: string;
      requisitos: string;
      cargaHoraria: string;
    }
    try {
      const idOng: number = req.body.idOng;
      const vaga: tbl_vagas = req.body.vaga;
      const contato: tbl_contato = req.body.contato;
      const endereco: tbl_endereco = req.body.endereco;

      // const 

      
      

    } catch (error) {
      console.log(`> Error: ${error}`);
      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }
}

export default VacanciesController;