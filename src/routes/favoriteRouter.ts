import FavoriteController from "@controllers/FavoriteController";
import { Router } from "express";

const router = Router();
const favController = new FavoriteController();

router.post("/favorite/create", (req, res) => favController.create(req, res));

export default router;