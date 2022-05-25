import FeedController from "@controllers/FeedController";
import { Router } from "express";

const router = Router();
const feedController = new FeedController();

router.get("/feed/:id", (req, res) => {
  console.info(`> Request GET recieved in '/feed' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  feedController.buildFeed(req, res);
});

router.get("/feed/:type/:page", (req, res) => {
  console.info(`> Request GET recieved in '/feed/:type/:page' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  feedController.buildSpecificFeed(req, res);
});

export default router;