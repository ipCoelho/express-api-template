// import {Request, Response} from "express";
import Prisma from "@prisma/client";

const prisma = new Prisma.PrismaClient();

class OngController {
   async create(req, res) {
    const requestData = req.body;
    const dbData = await prisma.tbl_ong.findMany({});

    console.log(`\n requestData -> ${req}`);

    res.status(200);
    res.json({
      Request: requestData,
      DatabaseResponse: dbData,
      
    });
  }

   async read(req, res) {
    const dbData = await prisma.tbl_ong.findMany({});
    // const request = req.body;
    console.log(dbData);
    

    res.status(200);
    res.json(dbData);
  }



   async readID(req, res) {
    const request = req.body;

    res.status = 200;
    res.json({message: `Request recieved.`});
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
