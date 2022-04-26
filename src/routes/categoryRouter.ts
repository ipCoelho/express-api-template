import CategoryController from "@controllers/CategoryController";
import { Router } from "express";

const router = Router();
const categoryController = new CategoryController();

router.post("/category", (req, res) => {
    console.info(`> Request POST recieved in '/category' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
    categoryController.create(req, res);
});

router.get("/category", (req, res) => {
    console.info(`> Request GET recieved in '/category' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
    categoryController.findAll(req, res);
});

router.delete("/category/:id", (req, res) => {
    console.info(`> Request DELETE recieved in '/category' at ${new Date().toLocaleString()}. \n> req.params:`, req.params);
    categoryController.remove(req, res);
});

export default router;