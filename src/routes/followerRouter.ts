import FollowerController from "@controllers/FollowerController";
import { Router } from "express";

const router = Router();
const followerController = new FollowerController();

router.post("/follower", (req, res) => {
  console.info(`> Request POST recieved in '/follower' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  followerController.startFollowing(req, res);
});

export default router;