import UFController from "@controllers/UFController";
import { Router } from "express";

const router = Router();
const ufController = new UFController();

router.get("/uf", (req, res) => {
    console.info(`> Request GET recieved in '/uf' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
    ufController.findAll(req, res);
});

router.post("/uf/filter", (req, res) => {
    console.info(`> Request POST recieved in '/uf/filter' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
    ufController.filterByUf(req, res);
});

export default router;