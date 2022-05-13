import FileHandlerController from "@controllers/FileHandlerController";
import { Router } from "express";
import multer from "multer";

const router = Router();
const fileHandlerController = new FileHandlerController();

const upload = multer({
  dest: "temp/",
  storage: multer.memoryStorage(),
});

router.get("/upload", (req, res) => {
  console.info(`> Request GET recieved in '/upload' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  fileHandlerController.download(req, res);
});

router.post("/upload", upload.single('file-media'), (req, res) => {
  console.info(`> Request POST recieved in '/upload' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  fileHandlerController.upload(req, res);
});

export default router;