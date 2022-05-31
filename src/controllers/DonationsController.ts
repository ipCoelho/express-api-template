import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Donation = {
  site?: string;
  pix?: string;
  tipoPix?: string;
}

class DonationsController {
  async create(req: Request, res: Response) {
    try {
      if (!req.body.idOng) {
        return res.status(400).json({
          message: "Dados incompletos.",
          expected: {
            idOng: "number",
          },
          status: 400,
        });
      } else if (!req.body.pix && !req.body.site) {
        return res.status(400).json({
          message: "Dados incompletos.",
          expected: {
            idOng: "number",
            site: "string?",
            pix: "string?",
            tipoPix: "string?",
          },
          status: 400,
        });
      }

      const donationVerify = await prisma.tbl_meios_de_doacao.findUnique({
        where: {
          idOng: Number(req.body.idOng),
        },
      });


      if (donationVerify != null) {
        return res.status(400).json({
          message: `Doação já cadastrada para ONG '${req.body.idOng}'.`,
          status: 400,
          data: donationVerify,
        });
      }

      const bodyDoacao: Donation = req.body;

      const donation = await prisma.tbl_meios_de_doacao.create({
        data: {
          idOng: Number(req.body.idOng),
          ...bodyDoacao,
        },
      });

      if (donation != null) {
        return res.status(200).json({
          message: "Doação cadastrada com sucesso.",
          status: 200,
          data: donation,
        });
      }
    } catch (error) {
      console.log(`Erro: `, error);
      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const donations = await prisma.tbl_meios_de_doacao.findMany();

      if (donations) {
        return res.status(200).json({
          message: "Doações encontradas com sucesso.",
          status: 200,
          data: donations,
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
      const donation = await prisma.tbl_meios_de_doacao.findUnique({
        where: {
          idOng: Number(req.params.id),
        },
      });

      if (donation) {
        return res.status(200).json({
          message: "Doação encontrada com sucesso.",
          status: 200,
          data: donation,
        });
      } else {
        return res.status(404).json({
          message: `Nenhum registro de doação encontrado para a ONG '${req.params.id}'.`,
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

  async remove(req: Request, res: Response) {
    try {
      const idVerify = await prisma.tbl_meios_de_doacao.findUnique({
        where: {
          idOng: Number(req.params.id),
        },
      });

      if (!idVerify) {
        return res.status(404).json({
          message: `Nenhum registro de meios de doação encontrado para a ONG '${req.params.id}'.`,
          status: 404,
        });
      }

      const donation = await prisma.tbl_meios_de_doacao.delete({
        where: {
          idOng: Number(req.params.id),
        },
      });

      if (donation) {
        return res.status(200).json({
          message: `Dados de doação para ONG '${req.params.id}' deletada com sucesso.`,
          status: 200,
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
      const idVerify = await prisma.tbl_meios_de_doacao.findUnique({
        where: {
          idOng: Number(req.params.id),
        },
      });

      if (!idVerify) {
        return res.status(404).json({
          message: `Nenhum registro de meios de doação encontrado para a ONG '${req.params.id}'.`,
          status: 404,
        });
      }

      const bodyDoacao: Donation = req.body;
      const donation = await prisma.tbl_meios_de_doacao.update({
        where: {
          idOng: Number(req.params.id),
        },
        data: {
          ...bodyDoacao,
        },
      });

      if (donation) {
        return res.status(200).json({
          message: `Dados de doação para ONG '${req.params.id}' atualizada com sucesso.`,
          status: 200,
          data: donation
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


export default DonationsController;
