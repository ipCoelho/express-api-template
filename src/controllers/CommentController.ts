import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class CommentController {
  async createComment(req: Request, res: Response) {
    try {
      if (!req.body.idPost || !req.body.idUsuario || !req.body.comentario) {
        return res.status(400).json({
          status: 400,
          message: "Dados incompletos.",
          expected: {
            idPost: "number",
            idUsuario: "number",
            comentario: {
              texto: "string",
              filhoDoComentario: "number?",
            },
          },
        });
      }

      const idPost = Number(req.body.idPost);
      const idUsuario = Number(req.body.idUsuario);
      const comentario: Comment = req.body.comentario;    

      const postMask = await prisma.tbl_post.findUnique({ where: { idPost: idPost } });

      if (postMask == null) {
        return res.status(400).json({
          status: 400,
          message: `Post com ID '${idPost}' não encontrado.`,
        });
      }

      const userMask = await prisma.tbl_usuario.findUnique({
        where: { idUsuario: Number(idUsuario) }
      });

      if (userMask == null) {
        return res.status(400).json({
          status: 400,
          message: `Usuário com ID '${idUsuario}' não encontrado.`,
        });
      }

      const commentCount = await prisma.tbl_comentario.findMany({
        where: { idPost: Number(idPost) }
      });

      const commentCreation = await prisma.tbl_comentario.create({
        data: {
          idPost: idPost,
          idUsuario: idUsuario,
          indiceNaConversa: commentCount.length,
          comentario: comentario.texto,
          filhoDoComentario: comentario.filhoDoComentario || null,
        },
        include: {
          tbl_usuario: true,
          tbl_post: true
        }
      });

      if (commentCreation == null) {
        return res.status(400).json({
          status: 400,
          message: "Erro ao criar comentário.",
        });
      } else {
        return res.status(200).json({
          status: 200,
          message: `Comentário do usuário com ID '${idUsuario}'; para o post com ID '${idPost}' criado com sucesso.`,
          data: commentCreation,
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

  async findAllCommentsPerPost(req: Request, res: Response) {
    try {
      const idPost = Number(req.params.idPost);

      const postMask = await prisma.tbl_post.findUnique({ 
        where: { idPost: idPost },
        include: {
          tbl_ong: true,
          tbl_comentario: {
            select: {
              comentario: true,
              indiceNaConversa: true,
              filhoDoComentario: true,
              dataDeCriacao: true,
              tbl_curtida_do_comentario: true,
              tbl_usuario: true
            }
          },
          tbl_post_media: true,
        }
      });

      if (postMask == null) {
        return res.status(400).json({
          status: 400,
          message: `Post com ID '${idPost}' não encontrado.`,
        });
      }

      return res.status(200).json({
        status: 200,
        message: `Comentários do post com ID '${idPost}' recuperados com sucesso.`,
        data: postMask,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }

  async findAllCommentsPerUser(req: Request, res: Response) {
    try {
      const idUsuario = Number(req.params.idUsuario);

      const userMask = await prisma.tbl_usuario.findUnique({
        where: { idUsuario: idUsuario },
        include: {
          tbl_comentario: true
        }
      });

      if (userMask == null) {
        return res.status(400).json({
          status: 400,
          message: `Usuário com ID '${idUsuario}' não encontrado.`,
        });
      }

      return res.status(200).json({
        status: 200,
        message: `Comentários do usuário com ID '${idUsuario}' recuperados com sucesso.`,
        data: userMask,
      });
    } catch (error) {
      console.log(`Error: `, error);
      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }

  async deleteComment(req: Request, res: Response) {
    try {
      const idComentario = Number(req.params.idComentario);

      const commentMask = await prisma.tbl_comentario.findUnique({
        where: { idcomentario: idComentario }
      });

      if (commentMask == null) {
        return res.status(400).json({
          status: 400,
          message: `Comentário com ID '${idComentario}' não encontrado.`,
        });
      }

      const commentDeletion = await prisma.tbl_comentario.delete({
        where: { idcomentario: idComentario }
      });

      if (commentDeletion == null) {
        return res.status(400).json({
          status: 400,
          message: `Erro ao deletar comentário com ID '${idComentario}'.`,
        });
      } else {
        return res.status(200).json({
          status: 200,
          message: `Comentário com ID '${idComentario}' deletado com sucesso.`,
          data: commentDeletion
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

interface Comment {
  texto: string;
  filhoDoComentario: number;
}

export default CommentController;