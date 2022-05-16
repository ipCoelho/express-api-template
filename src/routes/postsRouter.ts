import PostsController from "@controllers/PostsController";
import { Router } from "express";
import multer from "multer";

const uploadMiddleware = multer({
  storage: multer.memoryStorage(),
});

const router = Router();
const postsController = new PostsController();

router.post("/post", uploadMiddleware.array("media"), (req, res) => {
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

// router.put("/post/:idOng/:idPost", (req, res) => {
//   console.info(`> Request PUT recieved in '/post/:idOng/:idPost' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
//   postsController.update(req, res);
// });

router.delete("/post/:idOng/:idPost", (req, res) => {
  console.info(`> Request DELETE recieved in '/post/:idOng/:idPost' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  postsController.delete(req, res);
});

export default router;