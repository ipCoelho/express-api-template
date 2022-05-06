import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class AdressController {
  async create(req: Request, res: Response) {
    try {
      if (!req.body.cep ||
        !req.body.bairro ||
        !req.body.numero ||
        !req.body.rua ||
        !req.body.municipio) {
        return res.status(400).json({
          message: "Dados incompletos.",
          expected: {
            idOng: "number",
            cep: "string",
            bairro: "string",
            numero: "number",
            rua: "string",
            municipio: "string",
            estado: "string",
            complemento: "string?",
          },
          status: 400,
        });
      }

      const adressVerify = await prisma.tbl_endereco.findUnique({
        where: {
          idOng: req.body.idOng,
        },
      });

      if (adressVerify != null) {
        return res.status(400).json({
          message: `Endereço já cadastrado para ONG '${req.body.idOng}'.`,
          status: 400,
          data: adressVerify,
        });
      }

      const ufVerify = await prisma.tbl_estado.findUnique({
        where: {
          nome: req.body.estado,
        },
      });

      if (ufVerify == null) {
        return res.status(400).json({
          message: `Estado '${req.body.estado}' não encontrado.`,
          status: 400,
          data: ufVerify,
        });
      }

      const adressCreate = await prisma.tbl_endereco.create({
        data: {
          idOng: req.body.idOng,
          cep: req.body.cep,
          bairro: req.body.bairro,
          numero: req.body.numero,
          rua: req.body.rua,
          municipio: req.body.municipio,
          complemento: req.body.complemento ?? undefined,
          idEstado: ufVerify.idEstado,
        },
      });

      if (adressCreate != null) {
        return res.status(200).json({
          message: `Endereço cadastrado com sucesso para ONG '${req.body.idOng}'.`,
          status: 200,
          data: adressCreate,
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

export default AdressController;