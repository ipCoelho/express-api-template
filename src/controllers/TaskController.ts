import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class CheckController {
  create(req: Request, res: Response) {
    prisma.
  }
}

