import ongRouter from "./routes/ongRouter";
import userRouter from "./routes/userRouter";
import sponsorRouter from "./routes/sponsorRouter";
import favRouter from "./routes/favoriteRouter";
import ufRouter from "./routes/ufRouter";
import categoryRouter from "./routes/categoryRouter";
import contactRouter from "./routes/contactRouter";

import { Router } from "express";

const router = Router(); 

router.get("/", (req, res) => res.json({message: "API working."}));
router.use("/", ongRouter);
router.use("/", userRouter);
router.use("/", sponsorRouter);
router.use("/", favRouter);
router.use("/", ufRouter);
router.use("/", categoryRouter);
router.use("/", contactRouter);

export default router;
