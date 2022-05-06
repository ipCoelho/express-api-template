import AdressController from "@controllers/AdressController";
import { Router } from "express";

const router = Router();
const adressController = new AdressController();

router.post("/adress", (req, res) => {
  console.info(`> Request POST recieved in '/adress' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  adressController.create(req, res)
});

router.get("/adress", (req, res) => {
  console.info(`> Request GET recieved in '/adress' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  adressController.findAll(req, res)
});

router.get("/adress/:id", (req, res) => {
  console.info(`> Request GET recieved in '/adress/:id' at ${new Date().toLocaleString()}. \n> req.params:`, req.params);
  adressController.findById(req, res)
});

router.put("/adress/:id", (req, res) => {
  console.info(`> Request PUT recieved in '/adress/:id' at ${new Date().toLocaleString()}. \n> req.body:`, req.body, `\n> req.params:`, req.params);
  adressController.update(req, res)
});

router.delete("/adress/:id", (req, res) => {
  console.info(`> Request DELETE recieved in '/adress/:id' at ${new Date().toLocaleString()}. \n> req.params:`, req.params);
  adressController.remove(req, res)
});

export default router;