import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class OngController {
  public async create(req: Request, res: Response): Promise<Response> {
    const reqBody = req.body;

    const response = await prisma.ong.create({
      data: {},
    });

    return res.json(response);
  }

  public async read(req: Request, res: Response): Promise<Response> {
    const reqBody = req.body;

    const response = await prisma.ong.create({
      data: {},
    });

    return res.json(response);
  }

  public async readID(req: Request, res: Response): Promise<Response> {
    const reqBody = req.body;

    const response = await prisma.ong.create({
      data: {},
    });

    return res.json(response);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const reqBody = req.body;

    const response = await prisma.ong.create({
      data: {},
    });

    return res.json(response);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const reqBody = req.body;

    const response = await prisma.ong.create({
      data: {},
    });

    return res.json(response);
  }
}

export default new OngController();
