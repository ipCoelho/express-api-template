import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserController {
  async read(req: Request, res: Response) {
    const requestData = req.body;

    try {
      const databaseData = await prisma.tbl_usuario.findMany({});
      res
        .status(200)
        .json({ RequestData: requestData, DatabaseResponse: databaseData });
    } catch (error) {
      res.status(500);
      res.json({ RequestData: requestData, DatabaseResponse: error });
    }
  }

  async readID(req: Request, res: Response) {
    const data = req.params.id || req.params.idOng;
    const databaseData = await prisma.tbl_usuario.findUnique({
      where: { idUsuario: parseInt(data) },
    });

    res.status(200);
    res.json({ id: data, DatabaseResponse: databaseData });
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
    const id = req.params.id || req.params.idOng;
    const data = req.body;

    const databaseData = await prisma.tbl_usuario.update({
      where: { idUsuario: parseInt(id) },
      data: { ...data },
    });

    res.status(200);
    res.json({ RequestData: data, DatabaseResponse: databaseData });
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
