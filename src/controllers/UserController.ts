import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserController {
  async preRegister(req: Request, res: Response) {
    try {
      const { nome, email, senha } = req.body;

      const emailVerification = await prisma.tbl_login.findUnique({
        where: { email: email },
      });

      if (emailVerification) {
        return res.status(400).json({
          message: `O email '${email}' já foi cadastrado.`,
          status: 400,
        });
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

      const preCadastroUsuario = await prisma.tbl_usuario.create({
        data: {
          idLogin: idLogin,
          nome: nome,
          dataDeCriacao: new Date().toISOString(),
        },
      });

      if (preCadastroUsuario) {
        return res.status(200).json({
          message: "Usuário cadastrado com sucesso.",
          status: 200,
          data: preCadastroUsuario,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
        error: error,
      });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const user = {
        email: req.query.email.toString(),
        senha: req.query.senha.toString(),
      };

      const tblLogin = await prisma.tbl_login.findUnique({
        where: { email: user.email },
      });

      if (tblLogin === null) {
        return res.status(404).json({
          message: `Email '${user.email}' não encontrado.`,
          status: 404,
        });
      } else if (tblLogin.senha === user.senha) {
        const tblUser = await prisma.tbl_usuario.findMany({
          where: { idLogin: tblLogin.idLogin },
        });

        if (tblUser.length > 0 && tblUser.length <= 1) {
          return res.status(200).json({
            message: "Login realizado com sucesso.",
            status: 200,
            usuario: tblUser[0],
          });
        }
      } else {
        return res.status(400).json({
          message: `Senha incorreta.`,
          status: 400,
        });
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  async read(req: Request, res: Response) {
    try {
      const databaseData = await prisma.tbl_usuario.findMany();

      return res.status(200).json({
        message: "Lista de usuários retornada com sucesso.",
        status: 200,
        data: databaseData,
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

  async readID(req: Request, res: Response) {
    try {
      const data = req.params.id || req.query.id.toString();
  
      const databaseData = await prisma.tbl_usuario.findUnique({
        where: { idUsuario: parseInt(data) },
      });

      if (databaseData) {
        return res.status(200).json({
          message: "Usuário retornado com sucesso.",
          status: 200,
          data: databaseData,
        });
      }
    } catch (error) {
      res.status(500);
      res.json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
        error: error,
      });
    }
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
    const id = req.params.id ?? req.query.id.toString();
    const user = req.body;

    if (!req.body) {
      return res.status(400).json({
        message: "Nenhum dado foi enviado.",
        status: 400,
        expected: {
          nome: "string?",
          senha: "string?",
          banner: "string?",
          curriculo: "string?",
          foto: "string?",
          dataDeNascimento: "date?",
        }
      });
    }

    const databaseData = await prisma.tbl_usuario.update({
      where: { 
        idUsuario: parseInt(id) 
      },
      data: {
        ...user,
      },
    });

    
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
