import UserController from "@controllers/UserController";
import { Router } from "express";

const userController = new UserController();
const router = Router();

router.post("/user/pre-register", (req, res) => userController.preRegister(req, res));
router.get("/user/login", (req, res) => userController.login(req, res));
router.get("/user/all", (req, res) => userController.read(req, res));
router.get("/user/:id", (req, res) => userController.readID(req, res));
router.post("/user/create", (req, res) => userController.create(req, res));
router.put("/user/update/:id", (req, res) => userController.update(req, res));
router.delete("/user/remove/:id", (req, res) => userController.remove(req, res));

export default router;