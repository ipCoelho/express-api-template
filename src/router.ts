import OngController from "@controllers/OngController";
import UserController from "@controllers/UserController";
import {Router} from "express";

const router = Router(); 
const ongController = new OngController();
const userController = new UserController();

router.get("/login/all", (req, res) => ongController.read(req, res));
router.get("/login/:id", (req, res) => ongController.readID(req, res));
router.post("/register", (req, res) => ongController.create(req, res));
router.post("/pre-register", (req, res) => ongController.preRegister(req, res));
router.put("/login/update/:id", (req, res) => ongController.update(req, res));
router.delete("/login/remove/:id", (req, res) => ongController.remove(req, res));

router.get("/ong/all", (req, res) => ongController.read(req, res));
router.get("/ong/:id", (req, res) => ongController.readID(req, res));
router.post("/ong/create", (req, res) => ongController.create(req, res));
router.put("/ong/update/:id", (req, res) => ongController.update(req, res));
router.delete("/ong/remove/:id", (req, res) => ongController.remove(req, res));

router.post("/user/pre-register", (req, res) => userController.preRegister(req, res));
router.get("/user/all", (req, res) => userController.read(req, res));
router.get("/user/:id", (req, res) => userController.readID(req, res));
router.post("/user/create", (req, res) => userController.create(req, res));
router.put("/user/update/:id", (req, res) => userController.update(req, res));
router.delete("/user/remove/:id", (req, res) => userController.remove(req, res));

export default router;
