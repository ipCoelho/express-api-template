import UserController from "@controllers/UserController";
import { Router } from "express";

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

router.delete("/user/:id", (req, res) => {
  console.info(`> Request DELETE recieved in '/user/:id' at ${new Date().toLocaleString()}. \n> req.params:`, req.params);
  userController.removeUser(req, res)
});

export default router;
