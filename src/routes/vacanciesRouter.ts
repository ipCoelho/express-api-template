import VacanciesController from "@controllers/VacanciesController";
import { Router } from "express";

const router = Router();
const vacanciesController = new VacanciesController();

router.post("/vacancy", (req, res) => {
  console.info(`> Request POST recieved in '/vacancy' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  vacanciesController.createVacancy(req, res);
});

export default router;