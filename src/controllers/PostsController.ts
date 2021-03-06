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

      const ongMask = await prisma.tbl_ong.findUnique({
        where: {
          idOng: Number(req.body.idOng),
        }
      });

      const postCreate = await prisma.tbl_post.create({
        data: {
          idOng: Number(req.body.idOng),
          descricao: req.body.descricao,
        },
      });

      if (postCreate != null) {
        const media = [];
        if (req.body.media && req.body.media.length > 0) {
          for (let i = 0; i < req.body.media.length; i++) {
            const fileData = req.body.media[i];
            const uiArray = base64intoUint8Array(fileData.base64);
            const fileRef = `${ongMask.nome}/post/${postCreate.idPost}/${fileData.fileName}`;

            await fbhandler.uploadUint8Array(uiArray, fileRef, fileData.type);
            const url = await fbhandler.getMediaUrl(fileRef);
            
            const creatingMedia = await prisma.tbl_post_media.create({ 
              data: {
                idOng: Number(req.body.idOng),
                idPost: postCreate.idPost,  
                titulo: fileData.fileName,
                referencia: fileRef,
                url: url,
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
      const allPosts = await prisma.tbl_post.findMany({
        include: {
        tbl_ong: true,
        tbl_post_media: true,
        },
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
      const desiredPost = await prisma.tbl_post.findUnique({
        where: { idPost: Number(req.params.idPost) },
        include: { tbl_ong: true, tbl_post_media: true },
      });

      if (desiredPost == null) {
        return res.status(404).json({
          message: `Post '${req.params.idPost}', da ONG '${req.params.idOng}' n??o encontrado.`,
          status: 404,
        });
      }

      await Promise.all(desiredPost.tbl_post_media.map(async (media, i) => {
        const pResolve = await prisma.tbl_post_media.delete({
          where: { idPostMedia: media.idPostMedia },
        });
        console.log('tbl_post_media deleted?: ', pResolve);

        const resolve = await fbhandler.deleteFile(media.referencia);
        console.log(`file[${i}] deleted? : ${resolve}`);
      }));

      const postDelete = await prisma.tbl_post.delete({
        where: { idPost: Number(req.params.idPost) },
      });

      if (postDelete) {
        return res.status(200).json({
          message: `Post '${req.params.idPost}' da ONG '${req.params.idOng}' deletado com sucesso.`,
          status: 200,
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
}

export default allPostsController;