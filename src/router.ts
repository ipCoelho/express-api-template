
import adressRouter from "./routes/adressRouter";

import { Router } from "express";

const router = Router(); 

router.get("/heath", (_, res) => res.status(200).json({ status: 200, health: "Integrity OK" }));
router.use("/", adressRouter);

export default router;
