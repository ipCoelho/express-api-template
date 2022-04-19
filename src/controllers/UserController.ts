import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserController {
  async preRegister(req: Request, res: Response) {
    try {
      if (
        req.body.nome == null ||
        req.body.email == null ||
        req.body.senha == null
      ) {
        console.info(`> Returned:
          {
            message: "Os dados enviados são nulos ou inválidos.",
            status: 400,
            expected: {
              nome: "string",
              email: "string",
              senha: "string",
            }
          }`);

        return res.status(400).json({
          message: "Os dados enviados são nulos ou inválidos.",
          status: 400,
          expected: {
            nome: "string",
            email: "string",
            senha: "string",
          },
        });
      }

      const { nome, email, senha } = req.body;

      const emailVerification = await prisma.tbl_login.findUnique({
        where: { email: email },
      });

      if (emailVerification) {
        console.info(`> Returned:
          {
            message: "Email já cadastrado.",
            status: 400
          }`);

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
        console.info(`> Returned:
          {
            message: "Usuário cadastrado com sucesso.",
            status: 200
          }`);

        return res.status(200).json({
          message: "Usuário cadastrado com sucesso.",
          status: 200,
          data: preCadastroUsuario,
        });
      }
    } catch (error) {
      console.log("Error: ", error);
      res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const user = req.body;

      if (req.body.email == null || req.body.senha == null) {
        console.info(`> Returned:
          {
            message: "Os dados enviados são nulos ou inválidos.",
            status: 400,
            expected: {
              email: "string",
              senha: "string",
            }
          }`);

        return res.status(400).json({
          message: "Os dados enviados são nulos ou inválidos.",
          status: 400,
          expected: {
            email: "string",
            senha: "string",
          },
        });
      }

      const tblLogin = await prisma.tbl_login.findUnique({
        where: { email: user.email },
      });

      if (tblLogin == null) {
        console.info(`> Returned:
          {
            message: "Email '${user.email}' não encontrado.",
            status: 400
          }`);

        return res.status(404).json({
          message: `Email '${user.email}' não encontrado.`,
          status: 404,
        });
      } else if (tblLogin.senha === user.senha) {
        const tblUser = await prisma.tbl_usuario.findMany({
          where: { idLogin: tblLogin.idLogin },
        });

        if (tblUser.length > 0 && tblUser.length <= 1) {
          console.info(`> Returned:
            {
              message: "Login realizado com sucesso.",
              status: 200,
              data: ${JSON.stringify(tblUser[0])}
            }`);

          return res.status(200).json({
            message: "Login realizado com sucesso.",
            status: 200,
            usuario: tblUser[0],
          });
        }
      } else {
        console.info(`> Returned:
          {
            message: "Senha incorreta.",
            status: 400
          }`);

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

      console.info(`> Returned:
        {
          message: "Lista de usuários retornada com sucesso.",
          status: 200,
          data: ${JSON.stringify(databaseData)}
        }`);

      return res.status(200).json({
        message: "Lista de usuários retornada com sucesso.",
        status: 200,
        data: databaseData,
      });
    } catch (error) {
      console.log("Error: ", error);
      res.status(500);
      res.json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }

  async readID(req: Request, res: Response) {
    try {
      const id = req.params.id;

      const databaseData = await prisma.tbl_usuario.findUnique({
        where: { idUsuario: Number(id) },
      });

      if (databaseData) {
        console.info(`> Returned:
          {
            message: "Usuário encontrado com sucesso.",
            status: 200,
            data: ${databaseData}
          }`);

        return res.status(200).json({
          message: "Usuário retornado com sucesso.",
          status: 200,
          data: databaseData,
        });
      } else {
        console.info(`> Returned:
          {
            message: "Usuário não encontrado.",
            status: 404
          }`);

        return res.status(404).json({
          message: `Usuário com id '${id}' não encontrado.`,
          status: 404,
        });
      }
    } catch (error) {
      console.log("Error: ", error);
      res.status(500);
      res.json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
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
    if (req.params.id == null) {
      console.info(`> Returned:
        {
          message: "ID nulo ou inválido.",
          status: 400
        }`);

      return res.status(400).json({
        message: "ID nulo ou inválido.",
        status: 400,
      });
    } else if (
      req.body.nome == null &&
      req.body.banner == null &&
      req.body.curriculo == null &&
      req.body.foto == null &&
      req.body.email == null &&
      req.body.senha == null
    ) {
      console.info(`> Returned:
      {
        message: "Nenhum dado foi enviado.",
          status: 400,
          expected: {
            nome: "string?",
            banner: "string?",
            curriculo: "string?",
            foto: "string?",
            email: "string?",
            senha: "string?"
          }
        }`);

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
        },
      });
    }

    const { id } = req.params;
    const user = req.body;

    const IDverify = await prisma.tbl_usuario.findUnique({
      where: {
        idUsuario: Number(id),
      },
    });

    if (IDverify == null) {
      console.info(`> Returned:
      {
        message: "ID não encontrado.",
        status: 404
      }`);

      return res.status(404).json({
        message: "ID não encontrado.",
        status: 404,
      });
    }

    const databaseData = await prisma.tbl_usuario.update({
      where: {
        idUsuario: Number(id),
      },
      data: {
        ...user,
      },
    });

    if (databaseData) {
      console.info(`> Returned:
        {
          message: "Usuário atualizado com sucesso.",
          status: 200,
          data: ${JSON.stringify(databaseData)}
        }`);

      return res.status(200).json({
        message: "Usuário atualizado com sucesso.",
        status: 200,
        data: databaseData,
      });
    } else {
      throw new Error(`Error: ${databaseData}`);
    }
  }

  async remove(req: Request, res: Response) {
    const id = req.params.id;

    const IDverify = await prisma.tbl_usuario.findUnique({
      where: {
        idUsuario: Number(id),
      },
    });

    if (IDverify == null) {
      console.info(`> Returned:
      {
        message: "ID '${id}' não encontrado.",
        status: 404
      }`);

      return res.status(404).json({
        message: `ID '${id}' não encontrado.`,
        status: 404,
      });
    }

    const databaseData = await prisma.tbl_usuario.delete({
      where: { idUsuario: Number(id) },
    });

    if (databaseData) {
      console.info(`> Returned:
        {
          message: "Usuário (nome:'${IDverify.nome}', id:${id}) excluído com sucesso.",
          status: 200,
          data: ${JSON.stringify(databaseData)}
        }`);

      return res.status(200).json({
        message: `Usuário (nome:'${IDverify.nome}', id:${id}) excluído com sucesso.`,
        status: 200,
        data: databaseData,
      });
    }
  }
}

export default UserController;
