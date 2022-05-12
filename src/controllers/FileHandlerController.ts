import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class FileHandlerController {
  async upload(req: Request, res: Response) {
    try {
      const file = req.body.file;
      console.log(`file: `, file);

      if (file != null) {
        return res.status(200).send(
          file
        )
      }
    } catch (error) {
      console.log(`> Error: ${error}`);
      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }

  async download(req: Request, res: Response) {
    const _empty = "";
}
}

export default FileHandlerController;