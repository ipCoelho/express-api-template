import ongRouter from "./routes/ongRouter";
import userRouter from "./routes/userRouter";
import sponsorRouter from "./routes/sponsorRouter";
import favRouter from "./routes/favoriteRouter";
import ufRouter from "./routes/ufRouter";
import categoryRouter from "./routes/categoryRouter";
import contactRouter from "./routes/contactRouter";
import bankdataRouter from "./routes/bankdataRouter";
import donationRouter from "./routes/donationsRouter";
import postsRouter from "./routes/postsRouter";
import adressRouter from "./routes/adressRouter";
import fileHandlerRouter from "./routes/filehandlerRouter";
import vacanciesRouter from "./routes/vacanciesRouter";
import eventRouter from "./routes/eventRouter";
import feedRouter from "./routes/feedRouter";

import { Router } from "express";

const router = Router(); 

router.get("/", (_, res) => res.json({message: "API working."}));
router.use("/", ongRouter);
router.use("/", userRouter);
router.use("/", sponsorRouter);
router.use("/", favRouter);
router.use("/", ufRouter);
router.use("/", categoryRouter);
router.use("/", contactRouter);
router.use("/", bankdataRouter);
router.use("/", donationRouter);
router.use("/", postsRouter);
router.use("/", adressRouter);
router.use("/", fileHandlerRouter);
router.use("/", vacanciesRouter);
router.use("/", eventRouter);
router.use("/", feedRouter);

export default router;
