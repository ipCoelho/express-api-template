import FollowerController from "@controllers/FollowerController";
import { Router } from "express";

const router = Router();
const followerController = new FollowerController();

router.post("/follower", (req, res) => {
  console.info(`> Request POST recieved in '/follower' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  followerController.startFollowing(req, res);
});

router.delete("/follower/:idOng/:idUsuario", (req, res) => {
  console.info(`> Request DELETE recieved in '/follower' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  followerController.stopFollowing(req, res);
});

router.get("/follower/ong/:idOng", (req, res) => {
  console.info(`> Request GET recieved in '/follower' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  followerController.getFollowersForOng(req, res);
});

router.get("/follower/user/:idUsuario", (req, res) => {
  console.info(`> Request GET recieved in '/follower' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  followerController.getOngsForUser(req, res);
});


export default router;