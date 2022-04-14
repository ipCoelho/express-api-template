import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class OngController {
  async preRegister(req: Request, res: Response) {
    try {
      const { cnpj, nome, email, senha } = req.body;

      const emailVerification = await prisma.tbl_login.findUnique({
        where: { email: email },
      });

      if (emailVerification) {
        res.status(400).json({
          message: `O email ${email} já está cadastrado.`,
          status: 400,
        });
        return;
      }

      await prisma.tbl_login.create({
        data: {
          email: email,
          senha: senha,
        },
      });

      const { idLogin } = await prisma.tbl_login.findUnique({
        where: { email: email },
      });

      const preCadastroOng = await prisma.tbl_ong.create({
        data: {
          idLogin: idLogin,
          cnpj: cnpj,
          nome: nome ?? "undefined",
          dataDeCriacao: new Date().toISOString(),
        },
      });
      res.status(200);
      res.json({
        message: `O '${email}' foi registrado com sucesso.`,
        status: 200,
        data: preCadastroOng,
      });
    } catch (error) {
      res.status(500);
      res.json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
        error: error,
      });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const ong = {
        email: req.query.email.toString(),
        senha: req.query.senha.toString(),
      };

      const database = await prisma.tbl_login.findUnique({
        where: { email: ong.email },
      });

      if (database === null) {
        return res.status(404).json({
          message: "E-mail não foi encontrado.",
          status: 404,
        });
      }

      if (database.senha === ong.senha) {
        const tblOng = await prisma.tbl_ong.findMany({
          where: { idLogin: database.idLogin },
        });
        if (tblOng.length > 0 && tblOng.length <= 1) {
          return res.status(200).json({
            message: "E-mail e senha conferem.",
            status: 200,
            data: tblOng,
          });
        }
      } else {
        return res.status(400).json({
          message: "E-mail e senha não conferem.",
          status: 400,
        });
      }
    } catch (error) {
      console.log("Error: ", error);

      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
        error: error,
      });
    }
  }

  async getAll(req: Request, res: Response) {
    const data = await prisma.tbl_ong.findMany();

    res.status(200);
    res.json({
      message: "Todas as ONGs registradas no Banco de Dados.",
      status: 200,
      data: data,
    });
  }

  async readID(req: Request, res: Response) {
    const data = req.params.id || req.query.id.toString();

    const databaseData = await prisma.tbl_ong.findUnique({
      where: { idOng: parseInt(data) },
    });

    if (databaseData) {
      res.status(200).json({ status: 200, id: data, data: databaseData });
    } else {
      res
        .status(404)
        .json({
          message: `Não foi encontrado nenhum registro pelo id ${data}.`,
          status: 404,
          id: data,
          data: databaseData,
        });
    }
  }

  async create(req: Request, res: Response) {
    const data = req.body;

    const databaseData = await prisma.tbl_ong.create({
      data: { ...data },
    });

    res.status(200);
    res.json({ RequestData: data, data: databaseData });
  }

  async update(req: Request, res: Response) {
    const id = req.params.id || req.params.idOng;
    const data = req.body;

    const databaseData = await prisma.tbl_ong.update({
      where: { idOng: parseInt(id) },
      data: { ...data },
    });

    res.status(200);
    res.json({ RequestData: data, data: databaseData });
  }

  async remove(req: Request, res: Response) {
    const id = req.params.id || req.query.id.toString();

    const verification = await prisma.tbl_ong.findUnique({
      where: {
        idOng: Number.parseInt(id),
      },
    });

    if (verification) {
      await prisma.tbl_ong.delete({
        where: {
          idOng: parseInt(id),
        },
      });

      return res.status(200).json({
        message: `A ONG '${verification.nome}' foi excluída com sucesso.`,
        status: 200,
        ong: { ...verification },
      });
    } else {
      return res.status(404).json({
        message: `Nenhum registro foi encontrado pelo id '${id}'.`,
        id: id,
        status: 404,
      });
    }
  }
}

export default OngController;
