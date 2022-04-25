import ongRouter from "./routes/ongRouter";
import userRouter from "./routes/userRouter";
import sponsorRouter from "./routes/sponsorRouter";
import favRouter from "./routes/favoriteRouter";
import ufRouter from "./routes/ufRouter";

import { Router } from "express";

const router = Router(); 

router.get("/", (req, res) => res.json({message: "API working."}));
router.use("/", ongRouter);
router.use("/", userRouter);
router.use("/", sponsorRouter);
router.use("/", favRouter);
router.use("/", ufRouter);

export default router;
