import OngController from "@controllers/OngController";
import { Router } from "express";

const router = Router();
const ongController = new OngController();

router.post("/ong/pre-register", (req, res) => ongController.preRegister(req, res));
router.get("/ong/all", (req, res) => ongController.getAll(req, res));
router.get("/ong/login", (req, res) => ongController.login(req, res));

export default router;