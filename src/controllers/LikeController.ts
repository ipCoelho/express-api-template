import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class LikeController {
  // Comments like services.
  async findAllLikesByComment(req: Request, res: Response) {
    try {
      const idComentario = Number(req.params.idComment);

      const commentMask = await prisma.tbl_comentario.findUnique({
        where: { idcomentario: idComentario },
      });

      if (commentMask == null) {
        return res.status(400).json({
          status: 400,
          message: `Comentário com ID '${idComentario}' não encontrado.`,
        });
      }

      const likeCount = await prisma.tbl_curtida_do_comentario.findMany({
        where: { idComentario: idComentario },
      });

      return res.status(200).json({
        status: 200,
        message: `Lista de likes do comentário com ID '${idComentario}' encontrada com sucesso.`,
        data: {
          likes: {
            likeCount: likeCount.length,
            comentario: commentMask
          }
        }
      });
    } catch (error) {
      console.log(`Error: `, error);
      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }

  async likeComment(req: Request, res: Response) {
    try {
      if (!req.body.idComentario || !req.body.idUsuario) {
        return res.status(400).json({
          status: 400,
          message: "Dados incompletos.",
          expected: {
            idComentario: "number",
            idUsuario: "number",
          },
        });
      }

      const idComentario = Number(req.body.idComentario);
      const idUsuario = Number(req.body.idUsuario);

      const commentMask = await prisma.tbl_comentario.findUnique({
        where: { idcomentario: idComentario },
      });

      if (commentMask == null) {
        return res.status(400).json({
          status: 400,
          message: `Comentário com ID '${idComentario}' não encontrado.`,
        });
      }

      const userMask = await prisma.tbl_usuario.findUnique({
        where: { idUsuario: idUsuario },
      });

      if (userMask == null) {
        return res.status(400).json({
          status: 400,
          message: `Usuário com ID '${idUsuario}' não encontrado.`,
        });
      }

      const likeMask = await prisma.tbl_curtida_do_comentario.findFirst({
        where: { idComentario: idComentario, idUsuario: idUsuario }
      });

      if (likeMask != null) {
        return res.status(400).json({
          status: 400,
          message: `Usuário com ID '${idUsuario}' já curtiu o comentário com ID '${idComentario}'.`,
        });
      }

      const likeCount = await prisma.tbl_curtida_do_comentario.findMany({
        where: { idComentario: idComentario },
      });

      const likeCreation = await prisma.tbl_curtida_do_comentario.create({
        data: {
          idComentario: idComentario,
          idUsuario: idUsuario
        },
      });

      return res.status(200).json({
        status: 200,
        message: "Like criado com sucesso.",
        data: {
          ...likeCreation,
          likeCount: likeCount.length
        }
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }

  async unlikeComment(req: Request, res: Response) {
    try {
      const idComentario = Number(req.params.idComment);
      const idUsuario = Number(req.params.idUser);

      const commentMask = await prisma.tbl_comentario.findUnique({
        where: { idcomentario: idComentario },
      });

      if (commentMask == null) {
        return res.status(400).json({
          status: 400,
          message: `Comentário com ID '${idComentario}' não encontrado.`,
        });
      }

      const userMask = await prisma.tbl_usuario.findUnique({
        where: { idUsuario: idUsuario },
      });

      if (userMask == null) {
        return res.status(400).json({
          status: 400,
          message: `Usuário com ID '${idUsuario}' não encontrado.`,
        });
      }

      const likeCount = await prisma.tbl_curtida_do_comentario.findMany({
        where: { idComentario: idComentario },
      });

      const likeMask = await prisma.tbl_curtida_do_comentario.findFirst({
        where: { idComentario: idComentario, idUsuario: idUsuario },
      });

      if (likeMask == null) {
        return res.status(400).json({
          status: 400,
          message: `Usuário com ID '${idUsuario}' não curtiu o comentário com ID '${idComentario}'.`,
        });
      }

      const likeDeletion = await prisma.tbl_curtida_do_comentario.delete({
        where: { idCurtidaDoComentario: likeMask.idCurtidaDoComentario },
      });
      
      return res.status(200).json({
        message: `Like do Usuário com ID '${idUsuario}' removido do comentário com ID '${idComentario}'.`,
        status: 200,
        data: {
          ...likeDeletion,
          likeCount: likeCount.length
        }
      });
    } catch (error) {
      console.log(`Error: `, error);
      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }

// Post like services.
  async likePost(req: Request, res: Response) {
    try {
      if (!req.body.idPost || !req.body.idUsuario) {
        return res.status(400).json({
          status: 400,
          message: "Dados incompletos.",
          expected: {
            idPost: "number",
            idUsuario: "number",
          },
        });
      }

      const idPost = Number(req.body.idPost);
      const idUsuario = Number(req.body.idUsuario);

      const postMask = await prisma.tbl_post.findUnique({
        where: { idPost: idPost },
      });

      if (postMask == null) {
        return res.status(400).json({
          status: 400,
          message: `Post com ID '${idPost}' não encontrado.`,
        });
      }

      const userMask = await prisma.tbl_usuario.findUnique({
        where: { idUsuario: idUsuario },
      });

      if (userMask == null) {
        return res.status(400).json({
          status: 400,
          message: `Usuário com ID '${idUsuario}' não encontrado.`,
        });
      }

      const likeMask = await prisma.tbl_curtidas_dos_posts.findFirst({
        where: { idPost: idPost, idUsuario: idUsuario }
      });

      if (likeMask != null) {
        return res.status(400).json({
          status: 400,
          message: `Usuário com ID '${idUsuario}' já curtiu o post com ID '${idPost}'.`,
        });
      }

      const likeCount = await prisma.tbl_curtidas_dos_posts.findMany({
        where: { idPost: idPost },
      });

      const likeCreation = await prisma.tbl_curtidas_dos_posts.create({
        data: { 
          idPost: idPost, 
          idUsuario: idUsuario
        }
      });

      return res.status(200).json({
        status: 200,
        message: `Usuário com ID '${idUsuario}' curtiu o post com ID '${idPost}' com sucesso.`,
        data: {
          ...likeCreation,
          likeCount: likeCount.length
        }
      });
    } catch (error) {
      console.log(`Error: `, error);
      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }

  async unlikePost(req: Request, res: Response) {
    try {
      const idPost = Number(req.params.idPost);
      const idUsuario = Number(req.params.idUser);

      const postMask = await prisma.tbl_post.findUnique({
        where: { idPost: idPost },
      });

      if (postMask == null) {
        return res.status(400).json({
          status: 400,
          message: `Post com ID '${idPost}' não encontrado.`,
        });
      }

      const userMask = await prisma.tbl_usuario.findUnique({
        where: { idUsuario: idUsuario },
      });

      if (userMask == null) {
        return res.status(400).json({
          status: 400,
          message: `Usuário com ID '${idUsuario}' não encontrado.`,
        });
      }

      const likeMask = await prisma.tbl_curtidas_dos_posts.findFirst({
        where: { idPost: idPost, idUsuario: idUsuario },
      });

      if (likeMask == null) {
        return res.status(400).json({
          status: 400,
          message: `Usuário com ID '${idUsuario}' não curtiu o post com ID '${idPost}'.`,
        });
      }

      const likeDeletion = await prisma.tbl_curtidas_dos_posts.delete({
        where: { idCurtidasPosts: likeMask.idCurtidasPosts },
      });
      
      const likeCount = await prisma.tbl_curtidas_dos_posts.findMany({
        where: { idPost: idPost },
      });

      return res.status(200).json({
        message: `Like do Usuário com ID '${idUsuario}' removido do post com ID '${idPost}'.`,
        status: 200,
        data: {
          ...likeDeletion,
          likeCount: likeCount.length
        }
      });
    } catch (error) {
      console.log(`Error: `, error);
      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }

  async findAllLikesByPost(req: Request, res: Response) {
    try {
      const idPost = Number(req.params.idPost);

      const postMask = await prisma.tbl_post.findUnique({
        where: { idPost: idPost },
      });

      if (postMask == null) {
        return res.status(400).json({
          status: 400,
          message: `Post com ID '${idPost}' não encontrado.`,
        });
      }

      const likeCount = await prisma.tbl_curtidas_dos_posts.findMany({
        where: { idPost: idPost },
      });

      return res.status(200).json({
        status: 200,
        message: `Lista de likes do post com ID '${idPost}' encontrada com sucesso.`,
        data: {
          ...postMask,
          likeCount: likeCount.length
        }
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

export default LikeController;