import EventController from "@controllers/EventController";
import { Router } from "express";
import multer from "multer";

const uploadMiddleware = multer({
  storage: multer.memoryStorage(),
});

const router = Router();
const eventController = new EventController();


export default router;