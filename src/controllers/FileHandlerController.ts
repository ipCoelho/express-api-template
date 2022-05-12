import { Request, Response } from "express";
import { FileArray } from "express-fileupload";
import { initializeApp, getApp } from "firebase/app";
import { getBlob, getStorage, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";

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
      let sampleFile = undefined, uploadPath = undefined;

      if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({ 
          message:'No files were sent.',
          status: 400
        });
      }

      sampleFile = req.files.imagefile;
      uploadPath = __dirname + '/../temp/' + sampleFile.name;
      console.log(`File: `, sampleFile);
// Creating refs for the storage bucket and the path where the file will be uploaded.
      const mediaRef = ref(storage, sampleFile.name);
      const mediaFolderRef = ref(storage, `images/${sampleFile.name}`);
// Parsing the file into a buffer, so the method uploadBytes() can understand it.
      const abFile = new ArrayBuffer(sampleFile);
      console.log(`ArrayBuffer: `, abFile);
// By some reason, the file is uploaded, but it's size is empty.
      uploadBytes(mediaFolderRef, abFile, { contentType: sampleFile.mimetype })
        .then(obj => console.log(`Snapshot: `, obj)
      );

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