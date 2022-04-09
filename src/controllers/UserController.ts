import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserController {
  async preRegister(req: Request, res: Response) {
    try {
      const {nome, email, senha} = req.body;

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
          senha: senha 
        }
      });
 
      const {idLogin} = await prisma.tbl_login.findUnique({
        where: { email: email }
      });
   
      const preCadastroUsuario = await prisma.tbl_usuario.create({
        data: {
          idLogin: idLogin,
          nome: nome,
          dataDeCriacao: new Date().toISOString(),
        }
      });
      res.status(200);
      res.json({ ResquestData: req.body, DatabaseResponse: preCadastroUsuario });
    } catch (error) {
      res.status(500);
      res.json({ RequestData: req.body, DatabaseResponse: error });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, senha } = req.body;
      const { idLogin, ...loginData } = await prisma.tbl_login.findUnique({
        where: { email: email },
      });

      if (loginData.senha === senha) {
        const ongData = await prisma.tbl_ong.findFirst({
          where: { idLogin: idLogin },
        });
        res.status(200);
        res.json({
          message: "E-mail and password matched.",
          RequestData: req.body,
          DatabaseResponse: ongData,
        });
      } else {
        res.status(400);
        res.json({
          message: "E-mail and password not matched.",
          RequestData: req.body,
          DatabaseResponse: {},
        });
      }
    } catch (error) {
      res.status(500);
      res.json({ RequestData: req.body, DatabaseResponse: error });
    }
  }
  
  async read(req: Request, res: Response) {
    const requestData = req.body;

    try {
      const databaseData = await prisma.tbl_usuario.findMany({});
      res
        .status(200)
        .json({ RequestData: requestData, DatabaseResponse: databaseData });
    } catch (error) {
      res.status(500);
      res.json({ RequestData: requestData, DatabaseResponse: error });
    }
  }

  async readID(req: Request, res: Response) {
    const data = req.params.id || req.params.idOng;
    const databaseData = await prisma.tbl_usuario.findUnique({
      where: { idUsuario: parseInt(data) },
    });

    res.status(200);
    res.json({ id: data, DatabaseResponse: databaseData });
  }

  async create(req: Request, res: Response) {
    const data = req.body;

    try {
      const databaseData = await prisma.tbl_usuario.create({
        data: { ...data },
      });
      res
      .status(200)
      .json({ RequestData: data, DatabaseResponse: databaseData });
  } catch (error) {
    res.status(500);
    res.json({ RequestData: data, DatabaseResponse: error });
  }
  }

  async update(req: Request, res: Response) {
    const id = req.params.id || req.params.idOng;
    const data = req.body;

    const databaseData = await prisma.tbl_usuario.update({
      where: { idUsuario: parseInt(id) },
      data: { ...data },
    });

    res.status(200);
    res.json({ RequestData: data, DatabaseResponse: databaseData });
  }

  async remove(req: Request, res: Response) {
    const data = req.params.id || req.params.idOng;

    const databaseData = await prisma.tbl_usuario.delete({
      where: { idUsuario: parseInt(data) },
    });

    res.status(200);
    res.json({ RequestData: data, DatabaseResponse: databaseData });
  }
}

export default UserController;
