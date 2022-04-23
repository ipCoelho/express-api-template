import SponsorController from "@controllers/SponsorController";
import { Router } from "express";

const router = Router();
const sponsorController = new SponsorController();

router.get("/sponsor", (req, res) => sponsorController.getAll(req, res));
router.get("/sponsor/:id", (req, res) => sponsorController.getId(req, res));
router.post("/sponsor", (req, res) => sponsorController.create(req, res));
router.delete("/sponsor/:id", (req, res) => sponsorController.delete(req, res));
router.put("/sponsor/:id", (req, res) => sponsorController.update(req, res));

export default router;