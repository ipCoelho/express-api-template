import TaskController from "@controllers/TaskController";
import { Router } from "express";

const task = new TaskController();
const router = Router();

router.post("/adress", (req, res) => {
  console.info(`> Request POST recieved in '/adress' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  task.create(req, res)
});

router.get("/adress", (req, res) => {
  console.info(`> Request GET recieved in '/adress' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  task.findAll(req, res)
});

router.get("/adress/:id", (req, res) => {
  console.info(`> Request GET recieved in '/adress/:id' at ${new Date().toLocaleString()}. \n> req.params:`, req.params);
  task.findById(req, res)
});

router.put("/adress/:id", (req, res) => {
  console.info(`> Request PUT recieved in '/adress/:id' at ${new Date().toLocaleString()}. \n> req.body:`, req.body, `\n> req.params:`, req.params);
  task.update(req, res)
});

router.delete("/adress/:id", (req, res) => {
  console.info(`> Request DELETE recieved in '/adress/:id' at ${new Date().toLocaleString()}. \n> req.params:`, req.params);
  task.remove(req, res)
});

export default router;