import VacanciesController from "@controllers/VacanciesController";
import { Router } from "express";

const router = Router();
const vacanciesController = new VacanciesController();

router.post("/vacancy", (req, res) => {
  console.info(`> Request POST recieved in '/vacancy' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  vacanciesController.createVacancy(req, res);
});

router.get("/vacancy", (req, res) => {
  console.info(`> Request GET recieved in '/vacancy' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  vacanciesController.getVacancies(req, res);
});

router.get("/vacancy/:idOng", (req, res) => {
  console.info(`> Request GET recieved in '/vacancy/:idOng' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  vacanciesController.getVacanciesByOng(req, res);
});

router.get("/vacancy/:idOng/:idVacancy", (req, res) => {
  console.info(`> Request GET recieved in '/vacancy/:idOng/:idVacancy' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  vacanciesController.getUnique(req, res);
});

router.delete("/vacancy/:idOng/:idVacancy", (req, res) => {
  console.info(`> Request DELETE recieved in '/vacancy/:idOng/:idVacancy' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  vacanciesController.deleteVacancy(req, res);
});

export default router;