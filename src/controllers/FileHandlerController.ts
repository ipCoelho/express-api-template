import { Request, Response } from "express";

class FileHandlerController {
  async upload(req: Request, res: Response) {
    try {
      let sampleFile = undefined, uploadPath = undefined;
      if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({ 
          message:'No files were sent.',
          status: 400
        });
      }

      sampleFile = req.files.imagefile, uploadPath = __dirname + '/../temp/' + sampleFile.name;

      sampleFile.mv(uploadPath, (error : unknown) => {
        if (error) {
          console.log(`> Error: ${error}`);
          return res.status(500).json({
            message: process.env.ERRO_500 ?? "Erro no servidor.",
            status: 500,
          });
        } else {
          return res.status(200).json({
            message: `Arquivo '${sampleFile.name}' salvo com sucesso.`,
            status: 200
          });
        }
      });
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