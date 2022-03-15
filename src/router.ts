import AnimalsController from "src/mongo/mongo-mockup";
import { Router } from "express";

const router = Router();

// Animal Management
router.get("/animal/search", AnimalsController.read);
router.get("/animal/search:id", AnimalsController.readID);
router.post("animal/create", AnimalsController.create);
router.delete("/animal/delete:id", AnimalsController.delete);
router.put("/animal/update:id", AnimalsController.update);

export default router;

