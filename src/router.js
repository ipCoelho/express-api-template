import OngController from "../src/controllers/OngController.js";
import {Router} from "express";

const router = Router(); 
const ongController = new OngController();

router.get("/ong/all", (req, res) => ongController.read(req, res));
router.get("/ong/:id", (req, res) => ongController.readID(req, res));
router.post("/ong/create", (req, res) => ongController.create(req, res));
router.put("/ong/update/:id", (req, res) => ongController.update(req, res));
router.put("/ong/remove/:id", (req, res) => ongController.remove(req, res));

export default router;
