import OngController from "@controllers/OngController";
import {request, response, Router} from "express";

const router = Router(); 
const {read, readID, create, delete, update} = OngController(response, request);

router.get("/ong", ongController.read(req, res));
router.get("/ong/:id")

export default router;
