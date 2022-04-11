import ongRouter from "./routes/ongRouter";
import userRouter from "./routes/userRouter";
import { Router } from "express";

const router = Router(); 

router.get("/", (req, res) => res.json({message: "API working."}));
router.use("/", ongRouter);
router.use("/", userRouter);

export default router;
