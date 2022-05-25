import UserToEventController from "@controllers/UserToEventController";
import { Router } from "express";

const router = Router();
const userToEventController = new UserToEventController();

router.post("/event-controller", (req, res) => {
  console.info(`> Request POST recieved in '/event-controller' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  userToEventController.createUserToEvent(req, res);
});

router.get("/event-controller/:idOng/:idEvento", (req, res) => {
  console.info(`> Request GET recieved in '/event-controller' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  userToEventController.findAllUsersPerEvent(req, res);
});

router.get("/event-controller/:idOng", (req, res) => {
  console.info(`> Request GET recieved in '/event-controller' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  userToEventController.findAllEventsAndUsersPerOng(req, res);
});

router.delete("/event-controller/:idEvento/:idUsuario", (req, res) => {
  console.info(`> Request DELETE recieved in '/event-controller' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  userToEventController.removeUserToEvent(req, res);
});

// event-managemnet
router.get("/event-controller/:idOng/:idEvent/:page", (req, res) => {
  console.info(`> Request GET recieved in '/event-controller/:idOng/:idEvent/:page' at ${new Date().toLocaleString()}. \n> req.body:`, req.body);
  userToEventController.getUsersOfTheEventPaged(req, res);
});

export default router;