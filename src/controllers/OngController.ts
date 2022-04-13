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
        res.status(400).json({ message: `The e-mail ${email} has already been registered.` });
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
      res.json({ ResquestData: req.body, data: preCadastroOng });
    } catch (error) {
      res.status(500);
      res.json({ RequestData: req.body, Error: error });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const ong = req.body;
      const { idLogin, ...database } = await prisma.tbl_login.findUnique({
        where: { email: ong.email },
      });

      if (!idLogin) {
        return res.status(404).json({ 
          message: "E-mail not registered.",
          status: false
        });
      }

      if (database.senha === ong.senha) {
        const tblOng = await prisma.tbl_ong.findMany({
          where: { idLogin: idLogin },
        });
        if (tblOng.length > 0 && tblOng.length <= 1) {
          return res.status(200).json({
            message: "E-mail and password matched.",
            status: true,
            data: tblOng
          });
        }
      } else {
        return res.status(400).json({
          message: "Password did not match.",
          status: false
        });
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  async getAll(req: Request, res: Response) {
    const databaseData = await prisma.tbl_ong.findMany({});

    res.status(200);
    res.json({
      data: databaseData,
    });
  }

  async readID(req: Request, res: Response) {
    const data = req.params.id || req.params.idOng;
    const databaseData = await prisma.tbl_ong.findUnique({
      where: { idOng: parseInt(data) },
    });

    res.status(200);
    res.json({ id: data, data: databaseData });
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
    const data = req.params.id || req.params.idOng;

    const databaseData = await prisma.tbl_ong.delete({
      where: { idOng: parseInt(data) },
    });

    res.status(200);
    res.json({ RequestData: data, data: databaseData });
  }
}

export default OngController;
