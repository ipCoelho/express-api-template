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

export default router;