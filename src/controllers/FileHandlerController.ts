import FirebaseHandler from "@utils/FirebaseHandler";
import { Request, Response } from "express";

class FileHandlerController {
  async upload(req: Request, res: Response) {
    try {
      const file = req.file;
      const firebase = new FirebaseHandler();
      const status = await firebase.uploadImage(file, file.mimetype);

       if (status === true) {
        res.status(200).json({
          message: `Arquivo '${file.originalname}' salvo com sucesso.`,
          resolve: status,
          status: 200,  
        });
      } else if (status === false) {
        return res.status(500).json({
          message: process.env.ERRO_500 ?? "Erro interno do servidor.",
          status: 500
        });
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