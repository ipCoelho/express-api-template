import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class FeedController {
  async buildFeed(req: Request, res: Response) {
    try {
      const allPosts = await prisma.tbl_post.findMany();
      const allEvents = await prisma.tbl_eventos.findMany();
      const allVacancies = await prisma.tbl_vagas.findMany();

      allPosts.map(post => post["type"] = "post");
      allEvents.map(event => event["type"] = "evento");
      allVacancies.map(vacancy => vacancy["type"] = "vaga");

      console.log("post: ", allPosts[0], "event: ", allEvents[0], "vacancy: ", allVacancies[0]);
      console.log("post.length: ", allPosts.length, "event.length: ", allEvents.length, "vacancy.length: ", allVacancies.length);

      const feed = ShuffleArray([...allPosts, ...allEvents, ...allVacancies]);
      
      return res.status(200).json({
        message: "Feed devolvido com sucesso.",
        data: feed,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }
}

function ShuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

export default FeedController;