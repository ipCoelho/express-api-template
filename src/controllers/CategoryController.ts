import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { catHelper } from '@utils/catHelper';

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

  async allCategoriesPerOng(req: Request, res: Response) {
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

      const IDverify = await prisma.tbl_ong.findUnique({
        where: {
          idOng: Number(req.params.id),
        },
      });

      if (!IDverify) {
        return res.status(404).json({
          message: `Nenhuma ONG com ID '${req.params.id}'.`,
          status: 404
        });
      }

      const categories = await prisma.tbl_ong_categoria.findMany({
        where: {
          idOng: Number(req.params.id),
        },
      });

      return res.status(200).json({
        message: `Lista de categorias da ONG '${req.params.id }' retornada com sucesso.`,
        status: 200,
        data: categories,
      });
    } catch(error) {
      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }

  async filterByCategory(req: Request, res: Response) {
    try {
      if(!req.body.categorias) {
        return res.status(400).json({
          message: "Categorias não informadas.",
          expected: {
            categorias: `["categoria", "categoria", ...]`,
          },
          status: 400,
        });
      }

      const { categorias } = req.body, categoriasId = [];
      for (let i = 0; i < categorias.length; i++) {
        const { idCategorias } = await prisma.tbl_categorias.findFirst({
          where: {
            nome: String(categorias[i]),
          },
        });
        categoriasId.push(idCategorias);
      }

      const catOngId = [];
      for (let i = 0; i < categoriasId.length; i++) {
        const array = await prisma.tbl_ong_categoria.findMany({
          where: {
            idCategorias: Number(categoriasId[i]),  
          },
        });
        catOngId[i] = array;
      }
      console.log("catOngId: ", catOngId);

      const idOngs = [];
      for (let i = 0; i < catOngId.length; i++) {
        for (let j = 0; j < catOngId[i].length; j++) {
          idOngs.push(catOngId[i][j].idOng);
        }
      }
      console.log("idOngs: ", idOngs);

      const helper = await catHelper(idOngs, categorias.length);
      console.log("Helper: ", helper);

      
      return res.status(200).json({
        message: "Lista de categorias retornada com sucesso.",
        status: 200,
        data: helper,
      });

    } catch (error) {
      console.log("Error: ", error);
      return res.status(500).json({
        message: process.env.ERRO_500 ?? `Erro no servidor`,
        status: 500,
      });
    }
  }
}

export default CategoryController;