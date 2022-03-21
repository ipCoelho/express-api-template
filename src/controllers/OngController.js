// import {Request, Response} from "express";
import Prisma from "@prisma/client";
// import { rmSync } from "fs"

// const router = Router();
// const req = new Request();


const prisma = new Prisma.PrismaClient();

class OngController {
   async create(req, res) {
    // const request = req.body;

    // res.statusMessage = "Your request has recieved";
    // res.status(200);
    // res.json({

    // });
  }

   async read(req, res) {
    const dbData = await prisma.tbl_ong.findMany({});
    // const request = req.body;
    console.log(dbData);
    

    res.statusMessage = "Your request has recieved";
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
