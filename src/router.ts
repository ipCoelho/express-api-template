import OngController from "@controllers/OngController";
import UserController from "@controllers/UserController";
import {Router} from "express";

const router = Router(); 
const ongController = new OngController();
const userController = new UserController();

router.post("/ong/pre-register", (req, res) => ongController.preRegister(req, res));
router.post("/ong/login/:id?", (req, res) => ongController.login(req, res));
router.get("/ong/login/all", (req, res) => ongController.read(req, res));
router.get("/ong/login/:id", (req, res) => ongController.readID(req, res));
router.post("/ong/register", (req, res) => ongController.create(req, res));
router.put("/ong/login/update/:id", (req, res) => ongController.update(req, res));
router.delete("/ong/login/remove/:id", (req, res) => ongController.remove(req, res));

router.post("/user/pre-register", (req, res) => userController.preRegister(req, res));
router.get("/user/all", (req, res) => userController.read(req, res));
router.get("/user/:id", (req, res) => userController.readID(req, res));
router.post("/user/create", (req, res) => userController.create(req, res));
router.put("/user/update/:id", (req, res) => userController.update(req, res));
router.delete("/user/remove/:id", (req, res) => userController.remove(req, res));

export default router;
