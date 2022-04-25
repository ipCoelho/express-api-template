import FavoriteController from "@controllers/FavoriteController";
import { Router } from "express";

const router = Router();
const favController = new FavoriteController();

router.post("/favorite", (req, res) => {
    console.info(`> Request POST recieved in '/favorite' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
    favController.create(req, res);
});

router.delete("/favorite/:id", (req, res) => {
    console.info(`> Request DELETE recieved in '/favorite/:id' at ${new Date().toLocaleString()}. \n> req.params:`, req.params);
    favController.delete(req, res);
});

router.get("/favorite", (req, res) => {
    console.info(`> Request GET recieved in '/favorite' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
    favController.find(req, res);
});


router.get("/favorite/:idUsuario", (req, res) => {
    console.info(`> Request GET recieved in '/favorite/:usuario' at ${new Date().toLocaleString()}. \n> req.params:`, req.params);
    favController.findUser(req, res);
});

router.get("/favorite/:usuario/:ong", (req, res) => {
    console.info(`> Request GET recieved in '/favorite/:usuario/:ong' at ${new Date().toLocaleString()}. \n> req.params:`, req.params);
    favController.findUserAndOng(req, res);
});


export default router;