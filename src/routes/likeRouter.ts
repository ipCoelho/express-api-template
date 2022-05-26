import LikeController from "@controllers/LikeController";
import { Router } from "express";

const router = Router();
const likeController = new LikeController();

router.get("/comment/like/:idComment", (req, res) => {
  console.info(`> Request GET recieved in '/comment/:idComment' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  likeController.findAllLikesByComment(req, res);
});

router.post("/comment/like", (req, res) => {
  console.info(`> Request POST recieved in '/like' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  likeController.likeComment(req, res);
});

router.delete("/comment/like/:idComment/:idUser", (req, res) => {
  console.info(`> Request DELETE recieved in '/like/:idComment/:idUsuario' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  likeController.unlikeComment(req, res);
});

router.post("/post/like", (req, res) => {
  console.info(`> Request POST recieved in '/like' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  likeController.likePost(req, res);
});

router.delete("/post/like/:idPost/:idUser", (req, res) => {
  console.info(`> Request DELETE recieved in '/like/:idPost/:idUsuario' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  likeController.unlikePost(req, res);
});

router.get("/post/like/:idPost", (req, res) => {
  console.info(`> Request GET recieved in '/post/:idPost' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  likeController.findAllLikesByPost(req, res);
});


export default router;