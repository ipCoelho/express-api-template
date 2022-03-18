import { Router } from "express";

const router = Router();

// Ong Management
router.get("/ong/search", (req, res) => {
  return res.json({message: "hello"});
});

export default router;

