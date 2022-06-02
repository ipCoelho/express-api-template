import UserController from "@controllers/UserController";
import { authMiddleware } from "@middlewares/AuthMiddleware";
import { Router } from "express";
import multer from "multer";

const upload = multer({
  dest: "./temp/",
});

const userController = new UserController();
const router = Router();

router.post("/user/pre-register", (req, res) => {
  console.info(`> Request POST recieved in '/user/pre-register' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  userController.preRegister(req, res);
});

router.post("/user/login", (req, res) => {
  console.info(`> Request POST recieved in '/user/login' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  userController.login(req, res);
});

router.get("/user", (req, res) => {
  console.info(`> Request GET recieved in '/user' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  userController.read(req, res);
});

router.get("/user/:id", (req, res) => {
  console.info(`> Request GET recieved in '/user/:id' at ${new Date().toLocaleString()}. \n> req.params:`, req.params);
  userController.readID(req, res)
});

router.put("/user/:id", (req, res) => {
  console.info(`> Request PUT recieved in '/user/:id' at ${new Date().toLocaleString()}. \n> req.body:`, req.body, `\n> req.params:`, req.params);
  userController.update(req, res)
});

router.put("/user/upload/:type/:id", upload.single("curriculum"), (req, res) => {
  console.info(`> Request PUT recieved in '/user/upload/:type/:id' at ${new Date().toLocaleString()}. \n> req.body:`, req.body, `\n> req.params:`, req.params);
  userController.uploadCurriculum(req, res)
});

router.delete("/user/:id", authMiddleware, (req, res) => {
  console.info(`> Request DELETE recieved in '/user/:id' at ${new Date().toLocaleString()}. \n> req.params:`, req.params);
  userController.removeUser(req, res)
});

router.put("/user/media/:idUser", (req, res) => {
  console.info(`> Request PUT recieved in '/user/media/:idUser' at ${new Date().toLocaleString()}. \n> req.body:`, req.body, `\n> req.params:`, req.params);
  userController.updatePhotoAndBanner(req, res)
});

export default router;
