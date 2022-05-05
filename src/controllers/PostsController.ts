import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class allPostsController {
  async create(req: Request, res: Response) {
    try {
      if (!req.body.idOng || !req.body.descricao) {
        return res.status(400).json({
          message: "Dados incompletos.",
          expected: {
            idOng: "number",
            descricao: "string",

          },
          status: 400,
        });
      }

      const postCreate = await prisma.tbl_post.create({
        data: {
          idOng: Number(req.body.idOng),
          descricao: req.body.descricao,
        }
      });

      console.log(`Post: `, postCreate);
      

      if (postCreate) {
        const media = [];
        if (req.body.media && req.body.media.length > 0) {
          for (let i = 0; i < req.body.media.length; i++) {
            const creatingMedia = await prisma.tbl_post_media.create({
              data: {
                titulo: req.body.media[i],
                idOng: Number(req.body.idOng),
                endereco: req.body.media[i],
                idPost: postCreate.idPost,  
              },
            });
            console.log(`Media[${i}]:\n ${JSON.stringify(creatingMedia)}.`);
            media.push(creatingMedia);
          }
        }

        return res.status(200).json({
          message: `Post para ONG '${req.body.idOng}' cadastrado com sucesso.`,
          textoEnviado: req.body.descricao,
          status: 200,
          data: { post: postCreate, media: media },
        });
      }
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const allPosts = await prisma.tbl_post.findMany(
       {
         include: {
          tbl_ong: true,
          tbl_post_media: true,
         },
       }
      );
    
      return res.status(200).json({
        message: "Posts encontrados com sucesso.",
        status: 200,
        data: allPosts,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const post = await prisma.tbl_post.findMany({
        where: {
          idOng: Number(req.params.id),
        },
        include: {
          tbl_ong: true,
          tbl_post_media: true,
        },
      });

      if (post) {
        return res.status(200).json({
          message: `Posts da ONG '${req.params.id}' encontrado com sucesso.`,
          status: 200,
          data: post,
        });
      }
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      if (
        !req.body.descricao &&
        !req.body.media
      ) {
        return res.status(400).json({
          message: "Dados incompletos.",
          expected: {
            descricao: "string",
            media: {
              idPostMedia: "number",
              titulo: "string",
              endereco: "string?",
            },  
          },
          status: 400,
        });
      }

      console.log(req.params);
      const request = req.body;
      request.idOng = Number(req.params.idOng);
      request.idPost = Number(req.params.idPost);
      request.descricao = req.body.descricao;
      request.media = req.body.media;

      console.log(`Request Inteface: `, request);

      const postVerify = await prisma.tbl_post.findUnique({
        where: {
          idPost: Number(req.params.idPost)
        },
      });
      
      console.log(`Post verif: `, postVerify);

      if (postVerify != null) {
        const postUpdate = await prisma.tbl_post.update({
          where: {
            idPost: Number(request.idPost),
          },
          data: {
            descricao: request.descricao,
            
          },
        });
          console.log(`PostUpdated: `, postUpdate);
      }


      // for (let i = 0; i < request.media.length; i++) {
      //   const mediaUpdate = await prisma.tbl_post_media.update({
      //     where: {
      //       idPostMedia: Number(request.media[i].idPostMedia),
      //       idOng: Number(request.idOng),
      //     },
      //     data: {
      //       titulo: request.media[i].titulo,
      //       endereco: request.media[i].endereco,
      //     },
      //   });
      //   console.log(`Media[${i}]:\n ${JSON.stringify(mediaUpdate)}.`);
      // }
      

    } catch (error) {
      console.log(error);
      console.log(`Error: ${error}`);
      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }
}

export default allPostsController;