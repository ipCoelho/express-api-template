import ongRouter from "./routes/ongRouter";
import userRouter from "./routes/userRouter";
import sponsorRouter from "./routes/sponsorRouter";
import favRouter from "./routes/favoriteRouter";

import { Router } from "express";

const router = Router(); 

router.get("/", (req, res) => res.json({message: "API working."}));
router.use("/", ongRouter);
router.use("/", userRouter);
router.use("/", sponsorRouter);
router.use("/", favRouter);

export default router;
