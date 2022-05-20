import { Router } from "express";
import ContactController from "@controllers/ContactController";

const router = Router();
const contactController = new ContactController();

router.post("/contact", (req, res) => {
    console.info(`> Request POST recieved in '/contact' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
    contactController.create(req, res);
});

router.get("/contact", (req, res) => {
    console.info(`> Request GET recieved in '/contact' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
    contactController.findAll(req, res);
});

router.get("/contact/:id", (req, res) => {
    console.info(`> Request GET recieved in '/contact' at ${new Date().toLocaleString()}. \n> req.params:`, req.params);
    contactController.findID(req, res);
});

router.put("/contact/:id", (req, res) => {
    console.info(`> Request PUT recieved in '/contact' at ${new Date().toLocaleString()}. \n> req.params:`, req.params, "\n> req.body:", req.body);
    contactController.update(req, res);
});

router.delete("/contact/:idContact", (req, res) => {
    console.info(`> Request DELETE recieved in '/contact' at ${new Date().toLocaleString()}. \n> req.params:`, req.params);
    contactController.remove(req, res);
});

export default router;
