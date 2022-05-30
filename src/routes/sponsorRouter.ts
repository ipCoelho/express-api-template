import SponsorController from "@controllers/SponsorController";
import { Router } from "express";

const router = Router();
const sponsorController = new SponsorController();

router.get("/sponsor", (req, res) => sponsorController.getAll(req, res));
router.get("/sponsor/:id", (req, res) => sponsorController.getId(req, res));
router.post("/sponsor", (req, res) => sponsorController.create(req, res));
router.delete("/sponsor/:id", (req, res) => sponsorController.delete(req, res));
router.put("/sponsor/:id", (req, res) => sponsorController.update(req, res));
router.post("/sponsor/sponsoring", (req, res) => {
  console.info(`> Request POST recieved in '/sponsor/sponsoring' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  sponsorController.sponsoringOng(req, res);
});

router.get("/sponsor/ong/:id", (req, res) => {
  console.info(`> Request GET recieved in '/sponsor/ong/:id' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  sponsorController.findAllSponsorsByOng(req, res);
});

router.get("/sponsor/sponsor/:id", (req, res) => {
  console.info(`> Request GET recieved in '/sponsor/sponsor/:id' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  sponsorController.findAllOngsBySponsor(req, res);
});

export default router;