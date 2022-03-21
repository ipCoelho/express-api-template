import OngController from "../src/controllers/OngController.js";
import {Router} from "express";

const router = Router(); 
const ongController = new OngController();

router.get("/ong/all", (req, res) => ongController.read(req, res));
router.get("/ong/:id", (req, res) => ongController.read(req, res));
router.get("/ong/:name", (req, res) => ongController.read(req, res));
// rota para filtrar por categorias (não relacionado ainda!)
// rota para filtrar por estado! (já relaciado!)
router.post("/ong/create", (req, res) => ongController.create(req, res));
router.put("/ong/update/:id", (req, res) => ongController.update(req, res));
router.put("/ong/remove/:id", (req, res) => ongController.remove(req, res));

export default router;
