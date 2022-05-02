import DonationsController from "@controllers/DonationsController";
import { Router } from "express";

const router = Router();
const donationsController = new DonationsController();

router.post("/donation-data", (req, res) => {
  console.info(`> Request POST recieved in '/donation-data' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  donationsController.create(req, res);
});

router.get("/donation-data", (req, res) => {
  console.info(`> Request GET recieved in '/donation-data' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  donationsController.findAll(req, res);
});

router.get("/donation-data/:id", (req, res) => {
  console.info(`> Request GET recieved in '/donation-data/:id' at ${new Date().toLocaleString()}. \n> req.params:`, req.params);
  donationsController.findById(req, res);
});

router.put("/donation-data/:id", (req, res) => {
  console.info(`> Request PUT recieved in '/donation-data/:id' at ${new Date().toLocaleString()}. \n> req.body:`, req.body, `\n> req.params:`, req.params);
  donationsController.update(req, res);
});

router.delete("/donation-data/:id", (req, res) => {
  console.info(`> Request DELETE recieved in '/donation-data/:id' at ${new Date().toLocaleString()}. \n> req.params:`, req.params);
  donationsController.remove(req, res);
});

export default router;