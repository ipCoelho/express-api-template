import CommentController from "@controllers/CommentController";
import { Router } from "express";

const router = Router();
const commentController = new CommentController();

router.post("/comment", (req, res) => {
  console.info(`> Request POST recieved in '/comment' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  commentController.createComment(req, res);
});

router.get("/comment/ong/:idPost", (req, res) => {
  console.info(`> Request GET recieved in '/comment' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  commentController.findAllCommentsPerPost(req, res);
});

router.get("/comment/user/:idUsuario", (req, res) => {
  console.info(`> Request GET recieved in '/comment' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  commentController.findAllCommentsPerUser(req, res);
});

router.delete("/comment/:idComentario", (req, res) => {
  console.info(`> Request DELETE recieved in '/comment' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  commentController.deleteComment(req, res);
});

export default router;