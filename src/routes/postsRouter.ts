import PostsController from "@controllers/PostsController";
import { Router } from "express";

const router = Router();
const postsController = new PostsController();

router.post("/post", (req, res) => {
  console.info(`> Request POST recieved in '/post' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  postsController.create(req, res);
});


export default router;