import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import FirebaseHandler from "@utils/FirebaseHandler";

const prisma = new PrismaClient();
const fbhandler = new FirebaseHandler();

class EventController {
  
}

export default EventController;