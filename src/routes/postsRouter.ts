import PostsController from "@controllers/PostsController";
import { Router } from "express";

const router = Router();
const postsController = new PostsController();

router.post("/post", (req, res) => {
  console.info(`> Request POST recieved in '/post' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  postsController.create(req, res);
});

router.get("/post", (req, res) => {
  console.info(`> Request GET recieved in '/post' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  postsController.findAll(req, res);
});

router.get("/post/:id", (req, res) => {
  console.info(`> Request GET recieved in '/post/:id' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  postsController.findById(req, res);
});

router.put("/post/:idOng/:idPost", (req, res) => {
  console.info(`> Request PUT recieved in '/post/:idOng/:idPost' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  postsController.update(req, res);
});

export default router;