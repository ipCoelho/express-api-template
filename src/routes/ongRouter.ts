import OngController from "@controllers/OngController";
import { Router } from "express";

const router = Router();
const ongController = new OngController();

router.post("/ong/pre-register", (req, res) => {
    console.info(`> Request POST recieved in '/ong/pre-register' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
    ongController.preRegister(req, res);
});

router.get("/ong", (req, res) => {
    console.info(`> Request GET recieved in '/ong/all' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
    ongController.read(req, res)
});

router.get("/ong/:id", (req, res) => {
    console.info(`> Request GET recieved in '/ong/:id' at ${new Date().toLocaleString()}. \n> req.params:`, req.params);
    ongController.readID(req, res)
});

router.put("/ong/:id", (req, res) => {
    console.info(`> Request PUT recieved in '/ong/:id' at ${new Date().toLocaleString()}. \n> req.body:`, req.body, `\n> req.params:`, req.params);
    ongController.update(req, res)
});

router.post("/ong/login", (req, res) => {
    console.info(`> Request POST recieved in '/ong/login' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
    ongController.login(req, res)
});

router.delete("/ong/:id", (req, res) => {
    console.info(`> Request DELETE recieved in '/ong/:id' at ${new Date().toLocaleString()}. \n> req.params:`, req.params);
    ongController.remove(req, res)
});




export default router;