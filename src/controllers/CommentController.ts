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
              indiceNaConversa: "number",
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

      const commentCreation = await prisma.tbl_comentario.create({
        data: {
          idPost: idPost,
          idUsuario: idUsuario,
          comentario: comentario.texto,
          indiceNaConversa: comentario.indiceNaConversa,
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

}

interface Comment {
  texto: string;
  indiceNaConversa: number;
  filhoDoComentario: number;
}

interface CommentModel {
  idPost: number;
  idUsuario: number;
  comentario: Comment;
}

export default CommentController;