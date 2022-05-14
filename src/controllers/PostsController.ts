import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import FirebaseHandler from "@utils/FirebaseHandler";
import { base64intoUint8Array } from "@utils/base64intoUint8Array";

const prisma = new PrismaClient();
const fbhandler = new FirebaseHandler();

class allPostsController {
  async create(req: Request, res: Response) {
    try {
      if (!req.body.idOng || !req.body.descricao) {
        return res.status(400).json({
          message: "Dados incompletos.",
          expected: {
            idOng: "number",
            descricao: "string",
            media: {
              "fileName": "string",
              "base64": "base64",
              "type": "string",
            },
          },
          status: 400,
        });
      }

      req.body.media.forEach((media, index) => {
        console.log(`media[${index}]: `, media);
      });
      

      const ongMask = await prisma.tbl_ong.findUnique({
        where: {
          idOng: Number(req.body.idOng),
        }
      });

      const postCreate = await prisma.tbl_post.create({
        data: {
          idOng: Number(req.body.idOng),
          descricao: req.body.descricao,
        }
      });

      if (postCreate != null) {
        const media = [];
        if (req.body.media && req.body.media.length > 0) {
          for (let i = 0; i < req.body.media.length; i++) {
            const fileData = req.body.media[i];
            const uiArray = base64intoUint8Array(fileData.base64);
            const fileRef = `${ongMask.nome}/${fileData.fileName}`;

            const resolve = await fbhandler.uploadUint8Array(uiArray, fileRef, fileData.type);
            console.log(' resolve: ', resolve);
            
            const creatingMedia = await prisma.tbl_post_media.create({ 
              data: {
                idOng: Number(req.body.idOng),
                idPost: postCreate.idPost,  
                titulo: fileData.fileName,
                endereco: fileRef,
                tipo: fileData.type,
              },
            });
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

      allPosts.forEach(post => {
        post['ong'] = post['tbl_ong'];
        post['media'] = post['tbl_post_media'];
        delete post['tbl_ong'];
        delete post['tbl_post_media'];
      });
    
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

      post.forEach(post => {
        post['ong'] = post['tbl_ong'];
        post['media'] = post['tbl_post_media'];
        delete post['tbl_ong'];
        delete post['tbl_post_media'];
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

  async delete(req: Request, res: Response) {
    try {
      const allPostsOfTheOngById = await prisma.tbl_post.findMany({
        where: {
          idOng: Number(req.params.idOng),
        },
        include: {
          tbl_post_media: true,
        },
      });
      console.log(allPostsOfTheOngById);

      const idPostVerifty = allPostsOfTheOngById.filter(post => {
        post.idPost === Number(req.params.idPost)? true : "";
      });
      console.log(idPostVerifty);
    
      return res.status(200).json({
        message: `Posts da ONG '${req.params.idOng}' encontrado com sucesso.`,
        status: 200,
        data: idPostVerifty,
      });

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

      const request = req.body;
      request.idOng = Number(req.params.idOng);
      request.idPost = Number(req.params.idPost);

      const postVerify = await prisma.tbl_post.findUnique({
        where: {
          idPost: Number(request.idPost)
        },
      });

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
      } else {
        return res.status(400).json({
          message: "Post não encontrado.",
          status: 400,
        });
      }
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