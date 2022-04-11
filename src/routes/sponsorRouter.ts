import SponsorController from "@controllers/SponsorController";
import { Router } from "express";

const router = Router();
const sponsorController = new SponsorController();

router.get("/sponsor/all", (req, res) => sponsorController.getAll(req, res));
router.post("/sponsor/create", (req, res) => sponsorController.create(req, res));

export default router;