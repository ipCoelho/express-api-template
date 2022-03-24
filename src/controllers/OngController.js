// import {Request, Response} from "express";
import Prisma from "@prisma/client";

const prisma = new Prisma.PrismaClient();

class OngController {
  async read(req, res) {
    const requestData = req.body;
    const databaseData = await prisma.tbl_ong.findMany({});
    
    res.status(200);
    res.json({
      RequestData: requestData,
      DatabaseResponse: databaseData,
    });
  }

  async readID(req, res) {
    const data = req.params.id;
    const databaseData = await prisma.tbl_ong.findUnique({where: {idOng: parseInt(data)} });

    res.status(200);
    res.json({
      id: data,
      DatabaseResponse: databaseData,
    });
  }
  
  async create(req, res) {
    const data = req.body;
    console.log(data);

    // const databaseData = await prisma.tbl_ong.create({
      // data: {...data}
    // });

    res.status(200);
    res.json({
      RequestData: data,
      // DatabaseResponse: databaseData,
    });
 }

   async update(req, res) {
    const request = req.body;

    res.status = 200;
    res.json({message: `Request recieved.`});
  }

   async remove(req, res) {
    const request = req.body;

    res.status = 200;
    res.json({message: `Request recieved.`});
  }
}

export default OngController;
