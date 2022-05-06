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

  async findAll(req: Request, res: Response) {
    try {
      const adress = await prisma.tbl_endereco.findMany();

      if (adress.length === 0) {
        return res.status(200).json({
          message: "Nenhum endereço cadastrado.",
          status: 200,
          data: adress,
        });
      }

      return res.status(200).json({
        message: "Todos endereços registrados retornados.",
        status: 200,
        data: adress,
      });

    } catch (error) {
      console.log(`> Error: ${error}`);
      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const adress = await prisma.tbl_endereco.findUnique({
        where: {
          idOng: Number(req.params.id),
        },
      });

      if (adress == null) {
        return res.status(400).json({
          message: `Endereço não encontrado para ONG '${req.params.id}'.`,
          status: 400,
          data: adress,
        });
      }

      return res.status(200).json({
        message: `Endereço encontrado para ONG '${req.params.id}'.`,
        status: 200,
        data: adress,
      });

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
      if (!req.body.cep &&
        !req.body.bairro &&
        !req.body.numero &&
        !req.body.rua &&
        !req.body.municipio &&
        !req.body.estado &&
        !req.body.complemento) {
        return res.status(400).json({
          message: "Dados incompletos.",
          expected: {
            idOng: "params-number",
            cep: "string?",
            bairro: "string?",
            numero: "number?",
            rua: "string?",
            municipio: "string?",
            estado: "string?",
            complemento: "string?",
          },
          status: 400,
        });
      }

      const adressVerify = await prisma.tbl_endereco.findUnique({
        where: {
          idOng: Number(req.params.id),
        }
      });

      if (adressVerify == null) {
        return res.status(400).json({
          message: `Endereço não encontrado para ONG '${req.params.id}'.`,
          status: 400,
        });
      }

      const ufVerify = await prisma.tbl_estado.findUnique({
        where: {
          nome: req.body.estado,
        },
      });

      if (ufVerify == null) {
        return res.status(400).json({
          message: `Estado '${req.body.estado}' não existe.`,
          status: 400,
        });
      }

      const { estado, ...body } = req.body;
      const adressUpdate = await prisma.tbl_endereco.update({
        where: {
          idOng: Number(req.params.id),
        },
        data: {
          ...body,
          idEstado: ufVerify.idEstado,
        }
      });

      if (adressUpdate != null) {
        return res.status(200).json({
          message: `Endereço atualizado com sucesso para ONG '${req.params.id}'.`,
          status: 200,
          data: adressUpdate,
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

  async remove(req: Request, res: Response) {
    try {
      const adressVerify = await prisma.tbl_endereco.findUnique({
        where: {
          idOng: Number(req.params.id),
        }
      });

      if (adressVerify == null) {
        return res.status(400).json({
          message: `Endereço não encontrado para ONG '${req.params.id}'.`,
          status: 400,
        });
      }

      const adressDelete = await prisma.tbl_endereco.delete({
        where: {
          idOng: Number(req.params.id),
        }
      });

      if (adressDelete != null) {
        return res.status(200).json({
          message: `Endereço deletado com sucesso para ONG '${req.params.id}'.`,
          status: 200,
          data: adressDelete,
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