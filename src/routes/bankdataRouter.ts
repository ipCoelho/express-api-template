import BankDateController from "@controllers/BankDataController";
import { Router } from "express";

const router = Router();
const bankDateController = new BankDateController();

router.post("/bankdata", (req, res) => {
  console.info(`> Request POST recieved in '/bankdata' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  bankDateController.create(req, res);
});

router.get("/bankdata", (req, res) => {
  console.info(`> Request GET recieved in '/bankdata' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  bankDateController.findAll(req, res);
});

router.get("/bankdata/:id", (req, res) => {
  console.info(`> Request GET recieved in '/bankdata/:id' at ${new Date().toLocaleString()}. \n> req.params:`, req.params);
  bankDateController.findById(req, res);
});

router.put("/bankdata/:id", (req, res) => {
  console.info(`> Request PUT recieved in '/bankdata/:id' at ${new Date().toLocaleString()}. \n> req.body:`, req.body, `\n> req.params:`, req.params);
  bankDateController.update(req, res);
});

router.delete("/bankdata/:id", (req, res) => {
  console.info(`> Request DELETE recieved in '/bankdata/:id' at ${new Date().toLocaleString()}. \n> req.params:`, req.params);
  bankDateController.remove(req, res);
});

export default router;