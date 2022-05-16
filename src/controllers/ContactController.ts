import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


class ContactController {
  async create(req: Request, res: Response) {
    try {
      if (!req.body.idLogin) {
        return res.status(400).json({
          error: "'idLogin' não recebido.",
          expected: {
            idLogin: "string",
            email: "string?",
            numero: "string?",
            telefone: "string?"
          }
        });
      } else if (!req.body.email && !req.body.numero && !req.body.telefone) {
        return res.status(400).send({
          message: "Nenhum parâmetro para alteração recebido.",
          expected: {
            idLogin: "number",
            email: "string?",
            numero: "string?",
            telefone: "string?"
          }
        });
      }

      const idVerify = await prisma.tbl_contato.findUnique({
        where: {
          idLogin: req.body.idLogin
        }
      });

      if (idVerify) {
        return res.status(400).json({
          message: `Contato já cadastrado para o LOGIN de ID '${req.body.idLogin}'.`,
          status: 400,
          data: idVerify
        });
      }
      
      const contactTryCreate = await prisma.tbl_contato.create({
          data: {
              ...req.body
          }
      });

      if (contactTryCreate) {
        return res.status(200).json({
          message: "Contato cadastrado com sucesso.",
          status: 200,
          data: contactTryCreate,
        });
      }
    } catch (error) {
      console.log(`> Error: ${error}`);
      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const contacts = await prisma.tbl_contato.findMany();

      return res.status(200).json({
        message: "Lista de contatos retornada com sucesso.",
        status: 200,
        data: contacts,
      });
    } catch (error) {
      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }

  async findID(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const contact = await prisma.tbl_contato.findUnique({
        where: {
          idLogin: Number(id)
        }
      });

      if (contact) {
        return res.status(200).json({
          message: "Contato retornado com sucesso.",
          status: 200,
          data: contact,
        });
      } else {
        return res.status(404).json({
          message: `Contato não encontrado para o LOGIN de ID '${id}'.`,
          status: 404,
        });
      }
    } catch (error) {
      console.log(`> Error: ${error}`);
      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }

  async update(req: Request, res: Response) {
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

      const IDverify = await prisma.tbl_contato.findUnique({
        where: {
          idLogin: Number(req.params.id),
        },
      });

      if (!IDverify) {
        return res.status(404).json({
          message: `Nenhum contato com ID '${req.params.id}'.`,
          status: 404
        });
      }

      const contact = await prisma.tbl_contato.update({
        where: {
          idLogin: Number(req.params.id),
        },
        data: {
          ...req.body
        }
      });

      if (contact) {
        return res.status(200).json({
          message: "Contato alterado com sucesso.",
          status: 200,
          data: contact,
        });
      }
    } catch(error) {
      console.log(`> Error: ${error}`);
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

      const IDverify = await prisma.tbl_contato.findUnique({
        where: {
          idLogin: Number(req.params.id),
        },
      });

      if (!IDverify) {
        return res.status(404).json({
          message: `Nenhum contato com ID '${req.params.id}'.`,
          status: 404
        });
      }

      const contact = await prisma.tbl_contato.delete({
        where: {
          idLogin: Number(req.params.id),
        },
      });

      if (contact) {
        return res.status(200).json({
          message: "Contato removido com sucesso.",
          status: 200,
          data: contact,
        });
      }
    } catch (error) {
      console.log(`> Error: ${error}`);
      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }
}

export default ContactController;
