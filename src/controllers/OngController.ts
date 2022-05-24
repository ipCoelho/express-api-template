import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class OngController {
  async preRegister(req: Request, res: Response) {
    try {
      if (
        req.body.cnpj == null ||
        req.body.nome == null ||
        req.body.email == null ||
        req.body.senha == null
      ) {
        console.info(`> Returned:
          {
            message: "Os dados enviados são nulos ou inválidos.",
            status: 400,
            expected: {
              cnpj: "string",
              nome: "string?",
              email: "string",
              senha: "string",
            }
          }`);

        return res.status(400).json({
          message: "Os dados enviados são nulos ou inválidos.",
          status: 400,
          expected: {
            cnpj: "string",
            nome: "string?",
            email: "string",
            senha: "string",
          },
        });
      }

      const { cnpj, nome, email, senha } = req.body;

      const emailVerification = await prisma.tbl_login.findUnique({
        where: { email: email },
      });

      const cnpjVerification = await prisma.tbl_ong.findUnique({
        where: { cnpj: cnpj },
      });

      if (cnpjVerification != null) {
        console.info(`> Returned:
          {
            message: "CNPJ '${cnpj}' já cadastrado.",
            status: 400,

          }`);

        return res.status(400).json({
          message: `CNPJ '${cnpj}' já cadastrado.`,
          status: 400,
        });
      }

      if (emailVerification != null) {
        console.info(`> Returned:
          {
            message: "O e-mail '${email}' já foi cadastrado.",
            status: 400,
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

      const preCadastroOng = await prisma.tbl_ong.create({
        data: {
          idLogin: idLogin,
          cnpj: cnpj,
          nome: nome ?? "undefined",
          dataDeCriacao: new Date().toISOString(),
        },
      });
      console.info(`> Returned:
        {
          message: "A ONG foi registrado com sucesso.",
          status: 200,
          data: ${JSON.stringify(preCadastroOng)},
          }`);

      res.status(200).json({
        message: ` ONG foi registrado com sucesso.`,
        status: 200,
        data: preCadastroOng,
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

  async login(req: Request, res: Response) {
    try {
      const { email, senha } = req.body;

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

      const database = await prisma.tbl_login.findUnique({
        where: { email: email },
      });

      if (database == null) {
        console.info(`> Returned:
          {
            message: "O e-mail '${email}' não foi encontrado.",
            status: 404,
          }`);

        return res.status(404).json({
          message: `O e-mail '${email}' não foi encontrado.`,
          status: 404,
        });
      } else if (database.accountStatus == false) {
        return res.status(403).json({
          message: `O login '${email}' está DESATIVADO.`,
          status: 403,
        });
      }

      if (database.senha === senha) {
        const tblOng = await prisma.tbl_ong.findMany({
          where: { idLogin: database.idLogin },
        });

        if (tblOng.length > 0 && tblOng.length <= 1) {
          console.info(`> Returned:
            {
              message: "E-mail e senha conferem.",
              status: 200,
              data: ${JSON.stringify(tblOng[0])},
            }`);

          return res.status(200).json({
            message: "E-mail e senha conferem.",
            status: 200,
            data: tblOng,
          });
        } else {
          console.info(`Returned:
            {
              message: "Nenhum ONG encontrada para o e-mail '${email}'.",)
              status: 404,
            }`);

          return res.status(404).json({
            message: `Nenhum ONG encontrada para o e-mail '${email}'.`,
            status: 404,
          });
        }
      } else {
        console.info(`> Returned:
          {
            message: "E-mail e senha não conferem.",
            status: 401,
          }`);

        return res.status(401).json({
          message: "E-mail e senha não conferem.",
          status: 401,
        });
      }
    } catch (error) {
      console.log("Error: ", error);
      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }

  async read(req: Request, res: Response) {
    try {
      const data = await prisma.tbl_ong.findMany({
        include: {
          tbl_login: true
        }
      });
  
      console.info(`> Returned:
        {
          message: "Lista de ONGs retornada com sucesso.",
          status: 200,
          data: ${JSON.stringify(data)},
        }`);
  
      res.status(200).json({
        message: "Lista de ONGs retornada com sucesso.",
        status: 200,
        data: data,
      });
    } catch (error) {
      console.log("Error: ", error);
      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }

  async readID(req: Request, res: Response) {
    const id = req.params.id;

    const databaseData = await prisma.tbl_ong.findUnique({
      where: { idOng: Number(id) },
    });

    if (databaseData != null) {
      console.info(`> Returned:
        {
          message: "ONG com ID '${id}' encontrada com sucesso.",
          status: 200,
          data: ${JSON.stringify(databaseData)},
        }`);

      return res.status(200).json({ 
        message: `ONG com ID '${id}' encontrada com sucesso.`,
        status: 200,
        data: databaseData 
      });
    } else {
      console.info(`> Returned:
        {
          message: "ONG com ID '${id}' não foi encontrada.",
          status: 404,
        }`);

      return res.status(404).json({
        message: `ONG com ID ${id} não foi encontrada.`,
        status: 404,
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
    try {
      if (
        req.body.ong == null &&
        req.body.login == null
      ) {
        return res.status(400).json({
          message: "Os dados enviados são nulos ou inválidos.",
          status: 400,
          expected: {
            ong: {
              nome: "string?",
              descricao: "string?",
              numeroDeSeguidores: "number?",
              cnpj: "string?",
              banner: "string?",
              historia: "string?",
              foto: "string",
              qtdDeMembros: "number?",
              dataDeFundacao: "string?",
            },
            login: {
              email: "string?",
              senha: "string?",
            },
          },
        });
      }
  
      const { id } = req.params, ong = req.body.ong, login = req.body.login; 
  
      const ongMask = await prisma.tbl_ong.findUnique({
        where: { idOng: Number(id) },
      });
  
      if (ongMask == null) {
        return res.status(404).json({
          message: `ONG com ID '${id}' não foi encontrada.`,
          status: 404,
        });
      }
  
      let ongData, loginData;
      if (ong != null) {
        ongData = await prisma.tbl_ong.update({
          where: { idOng: Number(id) },
          data: { ...ong },
        });
      }
  
      if (login != null) {
        loginData = await prisma.tbl_login.update({
          where: { idLogin: Number(id) },
          data: { ...login },
        });
      }

      return res.status(200).json({
        message: `ONG com ID '${id}' atualizada com sucesso.`,
        status: 200,
        data: { ong: ongData, login: loginData },
      });
    } catch (error) {
      console.error(`> Error: ${error}`);
      res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor",
        status: 500,
      });
    }
  }

  async remove(req: Request, res: Response) {
    try {
      const idOng = Number(req.params.id);
  
      const ongMask = await prisma.tbl_ong.findUnique({ 
        where: { idOng: Number(idOng) },
        include: {
          tbl_dados_bancarios: true,
          tbl_evento_media: true,
          tbl_eventos: true,
          tbl_favoritos: true,
          tbl_login: true,
          tbl_meios_de_doacao: true,
          tbl_ong_categoria: true,
          tbl_ong_estado: true,
          tbl_ong_patrocinadores: true,
          tbl_post: true,
          tbl_post_media: true,
          tbl_seguidor: true,
          tbl_vagas: true
        }
      });

      const loginMask = await prisma.tbl_login.findUnique({
        where: { idLogin: Number(ongMask.idLogin) },
      });

      if (ongMask == null) {
        return res.status(404).json({
          message: `ONG com ID '${idOng}' não foi encontrada.`,
          status: 404,
        });
      } else if (loginMask == null) {
        return res.status(400).json({
          message: `ONG com ID '${idOng}' já teve sua conta desativada.`,
          status: 400,
        });
      } else if (loginMask.accountStatus == false) {
        return res.status(400).json({
          message: `0NG com ID '${idOng}' já teve sua conta desativada.`,
          status: 400,
        });
      }

      const desactiveAccount = await prisma.tbl_login.update({
        where: {
          idLogin: ongMask.idLogin
        },
        data: {
          accountStatus: false
        }
      });
      console.log(desactiveAccount);
  
      if (desactiveAccount) {
        return res.status(200).json({
          message: `ONG com ID '${idOng}' DESATIVADA com sucesso.`,
          status: 200,
          data: desactiveAccount
        });
      }

    } catch (error) {
      console.log(`> Error: `, error);
      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }
}

export default OngController;
