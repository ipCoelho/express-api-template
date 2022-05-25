import UserToVacancyController from "@controllers/UserToVacancyController";
import { Router } from "express";

const router = Router();
const userToVacancyController = new UserToVacancyController();

router.post("/vacancy-controller", (req, res) => {
  console.info(`> Request POST recieved in '/vacancy-controller' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  userToVacancyController.createUserToVacancy(req, res);
});

router.get("/vacancy-controller/:idOng", (req, res) => {
  console.info(`> Request GET recieved in '/vacancy-controller' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  userToVacancyController.allVacanciesPerOng(req, res);
});

router.get("/vacancy-controller/:idOng/:idVagas", (req, res) => {
  console.info(`> Request GET recieved in '/vacancy-controller' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  userToVacancyController.findUniqueVacancy(req, res);
});

router.delete("/vacancy-controller/:idVagas/:idUsuario", (req, res) => {
  console.info(`> Request DELETE recieved in '/vacancy-controller' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  userToVacancyController.removeUserToVacancy(req, res);
});

// vacancy-managemnet
router.get("/vacancy-controller/:idOng/:idVacancy/:page", (req, res) => {
  console.info(`> Request GET recieved in '/vacancy-controller/:idOng/:idEvento/:page' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  userToVacancyController.getUsersOfTheVacancyPaged(req, res);
});

export default router;