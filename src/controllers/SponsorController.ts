import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class SponsorController {
  async create(req: Request, res: Response) {
    try {
      const sponsor = req.body;

      if (!req.body.nome) {
        return res.status(400).json({
          message: "O campo 'nome' é obrigatório.",
          fields: ["nome", "foto?", "link?"],
        });
      }

      const databaseData = await prisma.tbl_patrocinadores.create({
        data: {
          nome: sponsor.nome,
          foto: sponsor.foto,
          link: sponsor.link,
        },
      });

      return res.status(200).json({
        message: `Patrocinador '${sponsor.name}' criado com sucesso.`,
        data: databaseData,
        status: 200,
      });
    } catch (error) {
      return res.status(500).json({
        message: process.env.ERRO_500 ?? `Erro no servidor`,
        error: error,
        status: 500,
      });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const sponsors = await prisma.tbl_patrocinadores.findMany();
      return res.status(200).json({
        message: `Todos os patrocinadores registrados.`,
        data: sponsors,
        status: 200,
      });
    } catch (error) {
      return res
        .status(500)
        .json({
          message: process.env.ERRO_500 ?? `Erro no servidor`,
          error: error,
        });
    }
  }

  async getId(req: Request, res: Response) {
    try {
      const id = req.params.id ?? req.query.id.toString();

      const sponsor = await prisma.tbl_patrocinadores.findUnique({
        where: {
          idPatrocinadores: Number(id),
        },
      });

      if (!sponsor) {
        return res.status(404).json({
          message: `Patrocinador com id '${id}' não encontrado.`,
          status: 404,
        });
      } else {
        return res.status(200).json({
          message: `Patrocinador com id '${id}' encontrado.`,
          data: sponsor,
          status: 200,
        });
      }
    } catch (error) {
      return res
        .status(500)
        .json({
          message: process.env.ERRO_500 ?? `Erro no servidor`,
          error: error,
        });
    }
  }
}

export default SponsorController;
