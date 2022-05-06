import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class bankDataController {
  async create(req: Request, res: Response) {
    try {
      if (!req.body.banco ||
        !req.body.agencia ||
        !req.body.conta ||
        !req.body.idOng) {
        return res.status(400).json({
          message: "Dados incompletos.",
          expected: {
            banco: "string",
            agencia: "string",
            conta: "string",
            idOng: "number",
          },
          status: 400,
        });
      }

      const bankDataVerify = await prisma.tbl_dados_bancarios.findUnique({
        where: {
          idOng: req.body.idOng,
        },
      });

      if (bankDataVerify) {
        return res.status(400).json({
          message: `Dados bancários já cadastrados para ONG '${req.body.idOng}'.`,
          status: 400,
          data: bankDataVerify,
        });
      }

      const bankData = await prisma.tbl_dados_bancarios.create({
        data: {
          banco: req.body.banco,
          agencia: req.body.agencia,
          conta: req.body.conta,
          idOng: req.body.idOng,
          tipo: req.body.tipo,
        },
      });

      if (bankData) {
        return res.status(200).json({
          message: "Dados bancários cadastrados com sucesso.",
          status: 200,
          data: bankData,
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
      const bankData = await prisma.tbl_dados_bancarios.findMany();

      if (bankData) {
        return res.status(200).json({
          message: "Dados bancários recuperados com sucesso.",
          status: 200,
          data: bankData,
        });
      }

    } catch (error) {
      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }
  
  async findById(req: Request, res: Response) {
    try {
      const bankData = await prisma.tbl_dados_bancarios.findUnique({
        where: {
          idOng: Number(req.params.id),
        },
      });

      if (bankData != null) {
        return res.status(200).json({
          message: `Dados bancários recuperados com sucesso para a ONG '${req.params.id}'.`,
          status: 200,
          data: bankData,
        });
      } else {
        return res.status(404).json({
          message: `Nenhum dado bancário encontrado para a ONG '${req.params.id}'.`,
          status: 404,
        });
      }

    } catch (error) {
      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      if (!req.body.banco &&
        !req.body.agencia &&
        !req.body.conta) {
        return res.status(400).json({
          message: "Dados incompletos.",
          expected: {
            body: {
              banco: "string",
              agencia: "string",
              conta: "string",
              tipo: "string",
            },
            params: {
              id: "params",
            },
          },
          status: 400,
        });
      }

      const idVerify = await prisma.tbl_dados_bancarios.findUnique({
        where: {
          idOng: Number(req.params.id),
        },
      });

      if (!idVerify) {
        return res.status(404).json({
          message: `Nenhum dado bancário encontrado para a ONG '${req.params.id}'.`,
          status: 404,
        });
      }

      const bankData = await prisma.tbl_dados_bancarios.update({
        where: {
          idOng: Number(req.params.id),
        },
        data: {
          banco: req.body.banco,
          agencia: req.body.agencia,
          conta: req.body.conta,
          tipo: req.body.tipo,
        },
      });

      if (typeof bankData == "object") {
        return res.status(200).json({
          message: `Dados bancários atualizados com sucesso em ONG '${req.params.id}'.`,
          status: 200,
          data: bankData,
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }

  async remove(req: Request, res: Response) {
    try {
      const idVerify = await prisma.tbl_dados_bancarios.findUnique({
        where: {
          idOng: Number(req.params.id),
        },
      });

      if (!idVerify) {
        return res.status(404).json({
          message: `Nenhum dado bancário encontrado para a ONG '${req.params.id}'.`,
          status: 404,
        });
      }

      const bankData = await prisma.tbl_dados_bancarios.delete({
        where: {
          idOng: Number(req.params.id),
        },
      });

      if (bankData) {
        return res.status(200).json({
          message: `Dados bancários removidos com sucesso em ONG '${req.params.id}'.`,
          status: 200,
          data: bankData,
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }
}

export default bankDataController;