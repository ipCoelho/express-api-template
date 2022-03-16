import { Request, Response } from "express";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class OngController {
  public async create(req: Request, res: Response): Promise<Response> {
    const request = req.body;
    const response = await prisma..create({
      data: {

      },
    });

    return res.json(response);
  }

  public async read(req: Request, res: Response): Promise<Response> {
    const request = req.body;

    const response = await prisma.ong.findMany();


    return res.json(response);
  }

  public async readID(req: Request, res: Response): Promise<Response> {
    const request = req.body;

    const response = await prisma.ong.create({
      data: {},
    });

    return res.json(response);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const request = req.body;

    const response = await prisma.ong.create({
      data: {},
    });

    return res.json(response);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const request = req.body;

    const response = await prisma.ong.create({
      data: {},
    });

    return res.json(response);
  }
}

export default new OngController();
