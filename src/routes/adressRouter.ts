import AdressController from "@controllers/AdressController";
import { Router } from "express";

const router = Router();
const adressController = new AdressController();

router.post("/adress", (req, res) => {
  console.info(`> Request POST recieved in '/adress' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  adressController.create(req, res)
});

export default router;