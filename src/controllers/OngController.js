import {Router} from "express";
import {PrismaClient} from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

class OngController {
  req;
  res;

  constructor(req, res) {
    this.req = req;
    this.res =
  }

   async create(req, res) {
    const request = req.body;

    res.status = 200;
    res.json({message: `Request recieved.`});
  }

   async read(req, res) {
    const request = req.body;

    res.status = 200;
    res.json({message: `Request recieved.`});
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

   async delete(req, res) {
    const request = req.body;

    res.status = 200;
    res.json({message: `Request recieved.`});
  }
}

export default new OngController();
