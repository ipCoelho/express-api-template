import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class CategoryController {
	async create(req: Request, res: Response) {
		try {
      if (!req.body.nome) {
        return res.status(400).json({
          message: "Nome não informado.",
          expected: {
            nome: "string",
          },
          status: 400,
        });
      }

      const categVerify = await prisma.tbl_categorias.findMany({
        where: {
          nome: req.body.nome,
        },
      });

      if (categVerify.length > 0) {
        return res.status(400).json({
          message: "Categoria já cadastrada.",
          status: 400,
        });
      }

      const categ = await prisma.tbl_categorias.create({
        data: {
          nome: req.body.nome,
        },
      });

      if (categ) {
        return res.status(200).json({
          message: "Categoria cadastrada com sucesso.",
          status: 200,
          data: categ,
        });
      }
    } catch (error) {
			return res.status(500).json({
				message: process.env.ERRO_500 ?? "Erro no servidor.",
				status: 500,
			});
		}
	}

  async findAll(req: Request, res: Response) {
    try {
      const categories = await prisma.tbl_categorias.findMany();

      return res.status(200).json({
        message: "Lista de categorias retornada com sucesso.",
        status: 200,
        data: categories,
      });
    } catch (error) {
      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }
  
  async remove(req: Request, res: Response) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          message: "ID não informado.",
          expected: {
            id: "number",
          },
          status: 400,
        });
      }

      const IDverify = await prisma.tbl_categorias.findUnique({
        where: {
          idCategorias: Number(req.params.id),
        },
      });

      if (!IDverify) {
        return res.status(404).json({
          message: `Nenhuma categoria com ID '${req.params.id}'.`,
          status: 404
        });
      }

      const categ = await prisma.tbl_categorias.delete({
        where: {
          idCategorias: Number(req.params.id),
        },
      });

      if (categ) {
        return res.status(200).json({
          message: `Categoria com ID '${req.params.id}' removida com sucesso.`,
          status: 200,
        });
      }
    } catch(error) {
      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }

}

export default CategoryController;