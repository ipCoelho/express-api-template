import { Router } from "express";
import Prisma from '@prisma/client'
const {PrismaClient} = Prisma;

const prisma = new PrismaClient();

const router = Router();  

// Ong Management
router.get("/ong/search", (req, res) => {
  const allOngs = prisma.tbl_ong.findMany({});
  // console.log(`\nreq.body: ${body}\nreq: ${req}`);
  return res.json({message: "hello"});
});

router.get("/ong/search?nomeOng", (req, res) => {
  const nomeOng = req.
  res.json({message: "ola"})
});

export default router;

