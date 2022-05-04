import PostsController from "@controllers/PostsController";
import { Router } from "express";

const router = Router();
const postsController = new PostsController();


export default router;