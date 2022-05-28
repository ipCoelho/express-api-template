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

router.get("/category/:id", (req, res) => {
    console.info(`> Request GET recieved in '/category' at ${new Date().toLocaleString()}. \n> req.params:`, req.params);
    categoryController.allCategoriesPerOng(req, res);
});

router.post("/category/filter", (req, res) => {
    console.info(`> Request POST recieved in '/category/filter' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
    categoryController.filterByCategory(req, res);
});

router.post("/category/ong", (req, res) => {
    console.info(`> Request POST recieved in '/category/register' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
    categoryController.registerACategoryToAOng(req, res);
});

router.delete("/category/ong/:idOng/:categoria", (req, res) => {
    console.info(`> Request DELETE recieved in '/category/ong' at ${new Date().toLocaleString()}. \n> req.params:`, req.params);
    categoryController.removeACategoryToAOng(req, res);
});

export default router;