import OngController from "@controllers/OngController";
import { Router } from "express";

const router = Router();
const ongController = new OngController();

router.post("/ong/pre-register", (req, res) => ongController.preRegister(req, res));
// router.get("/ong/login/:id?", (req, res) => ongController.login(req, res));
// router.get("/ong/login/all", (req, res) => ongController.read(req, res));
// router.get("/ong/login/:id", (req, res) => ongController.readID(req, res));
// router.post("/ong/register", (req, res) => ongController.create(req, res));
// router.put("/ong/login/update/:id", (req, res) => ongController.update(req, res));
// router.delete("/ong/login/remove/:id", (req, res) => ongController.remove(req, res));

export default router;