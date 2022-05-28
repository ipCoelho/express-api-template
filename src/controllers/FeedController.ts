import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class FeedController {
  async buildFeed(req: Request, res: Response) {
    try {
      const allPosts = await prisma.tbl_post.findMany({
        include: {
          tbl_ong: {
            select: {
              tbl_login:true
            }
          },
          tbl_post_media: true,
          tbl_comentario: true,
        }
      });
      const allEvents = await prisma.tbl_eventos.findMany({
        include: {
          tbl_ong: {
            select: {
              tbl_login:true
            }
          },
          tbl_evento_media: true,
          tbl_endereco: true
        }
      });
      const allVacancies = await prisma.tbl_vagas.findMany({
        include: {
          tbl_ong: {
            select: {
              tbl_login:true
            }
          },
          tbl_contato: true,
          tbl_endereco: true
        }
      });

      allEvents.map(event => event["type"] = "evento");
      allVacancies.map(vacancy => vacancy["type"] = "vaga");
      allPosts.map(post => {
        post["type"] = "post";
        post["dataDeCriacao"] = post.createdAt;
        delete post["createdAt"];
      });
      
      const feed = sortByDate([...allPosts, ...allEvents, ...allVacancies]);
      const page = Number(req.params.id);
      const filteredFeed = [];
      
      feed.map((item) => {
        if (item.tbl_ong.tbl_login.accountStatus === true) {
          filteredFeed.push(item);
        }
      });

      const immutableFeed = filteredFeed.slice(page * 9, page * 9 + 9);

      return res.status(200).json({
        message: "Feed devolvido com sucesso.",
        data: immutableFeed,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }

  async buildSpecificFeed(req: Request, res: Response) {
    try {
      const allPosts = await prisma.tbl_post.findMany({
        include: {
          tbl_ong: {
            select: {
              tbl_login:true
            }
          },
          tbl_post_media: true,
          tbl_comentario: true,
        }
      });
      const allEvents = await prisma.tbl_eventos.findMany({
        include: {
          tbl_ong: {
            select: {
              tbl_login:true
            }
          },
          tbl_evento_media: true,
          tbl_endereco: true
        }
      });
      const allVacancies = await prisma.tbl_vagas.findMany({
        include: {
          tbl_ong: {
            select: {
              tbl_login:true
            }
          },
          tbl_contato: true,
          tbl_endereco: true
        }
      });

      allEvents.map(event => event["type"] = "evento");
      allVacancies.map(vacancy => vacancy["type"] = "vaga");
      allPosts.map(post => {
        post["type"] = "post";
        post["dataDeCriacao"] = post.createdAt;
        delete post["createdAt"];
      });
      
      const page = Number(req.params.page);
      const type: string = req.params.type;
      let feed;

      switch (type) {
        case "post":
          feed = sortByDate([...allPosts]);
          break;

        case "evento":
          feed = sortByDate([...allEvents]);
          break;

        case "vaga":
          feed = sortByDate([...allVacancies]);
          break;
      
        default:
          feed = sortByDate([...allPosts, ...allEvents, ...allVacancies]);
          break;
      }

      const filteredFeed = [];
      feed.map((item) => {
        if (item.tbl_ong.tbl_login.accountStatus === true) {
          filteredFeed.push(item);
        }
      });

      const immutableFeed = filteredFeed.slice(page * 9, page * 9 + 9);

      return res.status(200).json({
        message: `Feed de ${type} devolvido com sucesso, página ${page}.`,
        data: immutableFeed,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }

  async buildSpecificFeedByOng(req: Request, res: Response) {
    try {
      const idOng = Number(req.params.idOng);
      const allPosts = await prisma.tbl_post.findMany({
        where: {
          tbl_ong: { idOng: idOng }
        },
        include: {
          tbl_ong: {
            select: {
              tbl_login:true
            }
          },
          tbl_post_media: true,
          tbl_comentario: true,
        }
      });
      const allEvents = await prisma.tbl_eventos.findMany({
        where: {
          tbl_ong: { idOng: idOng }
        },
        include: {
          tbl_ong: {
            select: {
              tbl_login:true
            }
          },
          tbl_evento_media: true,
          tbl_endereco: true
        }
      });
      const allVacancies = await prisma.tbl_vagas.findMany({
        where: {
          tbl_ong: { idOng: idOng }
        },
        include: {
          tbl_ong: {
            select: {
              tbl_login:true
            }
          },
          tbl_contato: true,
          tbl_endereco: true
        }
      });

      allEvents.map(event => event["type"] = "evento");
      allVacancies.map(vacancy => vacancy["type"] = "vaga");
      allPosts.map(post => {
        post["type"] = "post";
        post["dataDeCriacao"] = post.createdAt;
        delete post["createdAt"];
      });
      
      const page = Number(req.params.page);
      const type: string = req.params.type;
      let feed;

      switch (type) {
        case "post":
          feed = sortByDate([...allPosts]);
          break;

        case "evento":
          feed = sortByDate([...allEvents]);
          break;
        case "vaga":
          feed = sortByDate([...allVacancies]);
          break;
      
        default:
          feed = sortByDate([...allPosts, ...allEvents, ...allVacancies]);
          break;
      }

      const filteredFeed = [];
      feed.map((item) => {
        console.log(item);
        if (item.tbl_ong.tbl_login.accountStatus === true && item.idOng === idOng) {
          filteredFeed.push(item);
        }
      });

      const immutableFeed = filteredFeed.slice(page * 9, page * 9 + 9);

      return res.status(200).json({
        message: `Feed de '${type}' da ONG de ID '${idOng}' devolvido com sucesso, página ${page}.`,
        data: immutableFeed,
      });
   } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }

  async buildFeedPerOng(req: Request, res: Response) {
    try {
      const ongName = req.params.ong;

      const ongMask = await prisma.tbl_ong.findFirst({
        where: {
          nome: ongName
        }
      });

      if (ongMask == null) {
        return res.status(404).json({
          message: `ONG '${ongName}' não encontrada.`,
          status: 404,
        });
      }

      const allPosts = await prisma.tbl_post.findMany({
        where: {
          tbl_ong: { nome: ongName }
        },
        include: {
          tbl_ong: {
            select: {
              tbl_login:true
            }
          },
          tbl_post_media: true,
          tbl_comentario: true,
        }
      });
      const allEvents = await prisma.tbl_eventos.findMany({
        where: {
          tbl_ong: { nome: ongName }
        },
        include: {
          tbl_ong: {
            select: {
              tbl_login:true
            }
          },
          tbl_evento_media: true,
          tbl_endereco: true
        }
      });
      const allVacancies = await prisma.tbl_vagas.findMany({
        where: {
          tbl_ong: { nome: ongName }
        },
        include: {
          tbl_ong: {
            select: {
              tbl_login:true
            }
          },
          tbl_contato: true,
          tbl_endereco: true
        }
      });

      allEvents.map(event => event["type"] = "evento");
      allVacancies.map(vacancy => vacancy["type"] = "vaga");
      allPosts.map(post => {
        post["type"] = "post";
        post["dataDeCriacao"] = post.createdAt;
        delete post["createdAt"];
      });
      
      const page = Number(req.params.page);
      const type: string = req.params.type;
      let feed;

      switch (type) {
        case "post":
          feed = sortByDate([...allPosts]);
          break;

        case "evento":
          feed = sortByDate([...allEvents]);
          break;
        case "vaga":
          feed = sortByDate([...allVacancies]);
          break;
                
        default:
          feed = sortByDate([...allPosts, ...allEvents, ...allVacancies]);
          break;
      }

      const filteredFeed = [];
      feed.map((item) => {
        console.log(item);
        if (item.tbl_ong.tbl_login.accountStatus === true && item.idOng === ongMask.idOng) {
          filteredFeed.push(item);
        }
      });

      const immutableFeed = filteredFeed.slice(page * 9, page * 9 + 9);

      return res.status(200).json({
        message: `Feed de '${type}' da ONG '${ongName}' devolvido com sucesso, página ${page}.`,
        data: immutableFeed,
      });
    } catch (error) {
      console.log(`Error: `, error);
      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }

}

function sortByDate(array) {
  array = array.sort((a, b) => b.dataDeCriacao - a.dataDeCriacao);
  return array;
}

export default FeedController;