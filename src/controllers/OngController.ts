import { Request, Response } from 'express';
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

class OngController {
  async read(req: Request, res: Response) {
    const requestData = req.body;
    const databaseData = await prisma.tbl_ong.findMany({});
    
    res.status(200);
    res.json({
      RequestData: requestData,
      DatabaseResponse: databaseData,
    });
  }

  async readID(req: Request, res: Response) {
    const data = req.params.id || req.params.idOng;
    const databaseData = await prisma.tbl_ong.findUnique({where: {idOng: parseInt(data)} });

    res.status(200);
    res.json({ id: data, DatabaseResponse: databaseData });
  }
  
  async create(req: Request, res: Response) {
    const data = req.body;

    const databaseData = await prisma.tbl_ong.create({
      data: {...data}
    });

    res.status(200);
    res.json({ RequestData: data, DatabaseResponse: databaseData });
 }

   async update(req: Request, res: Response) {
    const id = req.params.id || req.params.idOng;
    const data = req.body;

    const databaseData = await prisma.tbl_ong.update({
      where: {idOng: parseInt(id)},
      data: {...data}
    });

    res.status(200);
    res.json({ RequestData: data, DatabaseResponse: databaseData });
  }

  async remove(req: Request, res: Response) {
    const data = req.params.id || req.params.idOng;

    const databaseData = await prisma.tbl_ong.delete({
      where: {idOng: parseInt(data)},
    });

    res.status(200);
    res.json({ RequestData: data, DatabaseResponse: databaseData });
  }
}

export default OngController;
