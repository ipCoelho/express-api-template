import CommentController from "@controllers/CommentController";
import { Router } from "express";

const router = Router();
const commentController = new CommentController();

export default router;