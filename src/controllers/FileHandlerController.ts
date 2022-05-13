import { Request, Response } from "express";
import { initializeApp, getApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBlxB-5oJDDKYwa8KiRrxi6KK_9iVyIQJk",
  authDomain: "helpongs-c9e37.firebaseapp.com",
  databaseURL: "https://helpongs-c9e37-default-rtdb.firebaseio.com",
  projectId: "helpongs-c9e37",
  storageBucket: "helpongs-c9e37.appspot.com",
  messagingSenderId: "13489519639",
  appId: "1:13489519639:web:22a7e9c93b0d6a21a13052",
  measurementId: "G-G1YDNTFYDZ"
};

initializeApp(firebaseConfig);
const firebaseApp = getApp(), storage = getStorage(firebaseApp, "gs://helpongs-c9e37.appspot.com");

class FileHandlerController {
  async upload(req: Request, res: Response) {
    try {
      const file = req.file;
      const fileRef = ref(storage, `help-ongs/media/${file.originalname}`);

      uploadBytes(fileRef, file.buffer, { contentType: file.mimetype })
        .then((snapshot) => {
          console.log(`snapshot: `, snapshot);
          res.status(200).json({
            message: `Arquivo '${file.originalname}' salvo com sucesso.`,
            snapshot: snapshot,
            status: 200,  
          });
        })
        .catch(error => {
          if (error) {
            console.log(`> Error: `, error);
            return res.status(500).json({ 
              message: process.env.ERRO_500 ?? "Erro no servidor.",
              status: 500
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