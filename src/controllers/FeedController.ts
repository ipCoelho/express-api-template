import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class FeedController {
  async buildFeed(req: Request, res: Response) {
    try {
      const allPosts = await prisma.tbl_post.findMany({
        include: {
          tbl_ong: true,
          tbl_post_media: true,
          tbl_post_comentario: true,
        }
      });
      const allEvents = await prisma.tbl_eventos.findMany({
        include: {
          tbl_ong: true,
          tbl_evento_media: true,
          tbl_endereco: true
        }
      });
      const allVacancies = await prisma.tbl_vagas.findMany({
        include: {
          tbl_ong: true,
          tbl_contato: true,
          tbl_endereco: true
        }
      });

      allPosts.map(post => {
        post["type"] = "post";
        post["dataDeCriacao"] = post.createdAt;
        delete post["createdAt"];
      });
      allEvents.map(event => event["type"] = "evento");
      allVacancies.map(vacancy => vacancy["type"] = "vaga");

      console.log("post: ", allPosts[0], "event: ", allEvents[0], "vacancy: ", allVacancies[0]);
      console.log("post.length: ", allPosts.length, "event.length: ", allEvents.length, "vacancy.length: ", allVacancies.length);

      const feed = sortByDate([...allPosts, ...allEvents, ...allVacancies]);
      const page = Number(req.params.id);

      const feedPaginated = feed.slice(page * 9, page * 9 + 9);

      return res.status(200).json({
        message: "Feed devolvido com sucesso.",
        data: feedPaginated,
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

function sortByDate(array: any[]) {
  array = array.sort((a, b) => b.dataDeCriacao - a.dataDeCriacao);
  return array;
}

export default FeedController;