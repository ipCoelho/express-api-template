import EventController from "@controllers/EventController";
import { Router } from "express";
import multer from "multer";

const uploadMiddleware = multer({
  storage: multer.memoryStorage(),
});

const router = Router();
const eventController = new EventController();

router.post("/event", uploadMiddleware.array("media"), (req, res) => {
  console.info(`> Request POST recieved in '/event' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  eventController.createEvent(req, res);
});

router.get("/event", (req, res) => {
  console.info(`> Request GET recieved in '/event' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  eventController.findAll(req, res);
});

router.get("/event/:idOng", (req, res) => {
  console.info(`> Request GET recieved in '/event/:id' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  eventController.findAllByOng(req, res);
});

router.get("/event/:idOng/:idEvent", (req, res) => {
  console.info(`> Request GET recieved in '/event/:idOng/:idEvent' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  eventController.findUnique(req, res);
});

router.delete("/event/:idOng/:idEvent", (req, res) => {
  console.info(`> Request DELETE recieved in '/event/:idOng/:idEvent' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  eventController.deleteEvent(req, res);
});

export default router;