import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class FollowerController {
  async startFollowing(req: Request, res: Response) {
    try {
      if (!req.body.idUsuario || !req.body.idOng) {
        return res.status(400).json({
          status: 400,
          message: "Dados incompletos.",
          expected: {
            idUsuario: "number",
            idOng: "number",
          },
        });
      }

      const idUsuario: number = req.body.idUsuario;
      const idOng: number = req.body.idOng;

      const userMask = await prisma.tbl_usuario.findUnique({
        where: { idUsuario: Number(idUsuario) }
      });

      if (userMask == null) {
        return res.status(400).json({
          status: 400,
          message: `Usuário com ID '${idUsuario}' não encontrado.`,
        });
      }

      const ongMask = await prisma.tbl_ong.findUnique({
        where: { idOng: Number(idOng) }
      });

      if (ongMask == null) {
        return res.status(400).json({
          status: 400,
          message: `ONG com ID '${idOng}' não encontrada.`,
        });
      }

      const followerMask = await prisma.tbl_seguidor.findFirst({
        where: { idUsuario: Number(idUsuario), idOng: Number(idOng) }
      });
      
      if (followerMask != null) {
        return res.status(400).json({
          status: 400,
          message: `Usuário com ID '${idUsuario}' já está seguindo a ONG com ID '${idOng}'.`,
        });
      }

      const follower = await prisma.tbl_seguidor.create({
        data: {
          idUsuario: Number(idUsuario),
          idOng: Number(idOng),
        },
        include: {
          tbl_ong: true,
          tbl_usuario: true
        }
      });

      return res.status(200).json({
        message: `Usuário com ID '${idUsuario}' está seguindo ONG com ID '${idOng}' agora.`,
        status: 200,
        data: follower
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(500).json({
        status: 500,
        message: process.env.ERRO_500 ?? "Erro no servidor.",
      });
    }
  }

  async stopFollowing(req: Request, res: Response) {
    try {
      if (!req.params.idUsuario || !req.params.idOng) {
        return res.status(400).json({
          status: 400,
          message: "Dados incompletos.",
          expected: {
            idUsuario: "number",
            idOng: "number",
          },
        });
      }

      const idUsuario = Number(req.params.idUsuario);
      const idOng = Number(req.params.idOng);

      const userMask = await prisma.tbl_usuario.findUnique({
        where: { idUsuario: Number(idUsuario) }
      });

      if (userMask == null) {
        return res.status(400).json({
          status: 400,
          message: `Usuário com ID '${idUsuario}' não encontrado.`,
        });
      }

      const ongMask = await prisma.tbl_ong.findUnique({
        where: { idOng: Number(idOng) }
      });

      if (ongMask == null) {
        return res.status(400).json({
          status: 400,
          message: `ONG com ID '${idOng}' não encontrada.`,
        });
      }

      const followerMask = await prisma.tbl_seguidor.findFirst({
        where: { idUsuario: Number(idUsuario), idOng: Number(idOng) }
      });

      if (followerMask == null) {
        return res.status(400).json({
          status: 400,
          message: `Usuário com ID '${idUsuario}' não está seguindo a ONG com ID '${idOng}'.`,
        });
      }

      await prisma.tbl_seguidor.delete({
        where: { idSeguidor: followerMask.idSeguidor }
      });

      return res.status(200).json({
        message: `Usuário com ID '${idUsuario}' não está mais seguindo a ONG com ID '${idOng}'.`,
        status: 200,
        data: followerMask
      });
    } catch (error) {
      console.log(`Error: `, error);
      return res.status(500).json({
        status: 500,
        message: process.env.ERRO_500 ?? "Erro no servidor.",
      });
    }
  }

  async getFollowersForOng(req: Request, res: Response) {
    try {
      const idOng = Number(req.params.idOng);

      const ongMask = await prisma.tbl_ong.findUnique({
        where: { idOng: Number(idOng) }
      });

      if (ongMask == null) {
        return res.status(400).json({
          status: 400,
          message: `ONG com ID '${idOng}' não encontrada.`,
        });
      }

      const followers = await prisma.tbl_seguidor.findMany({
        where: { idOng: Number(idOng) },
        include: {
          tbl_ong: true,
          tbl_usuario: true
        }
      });

      return res.status(200).json({
        message: `Lista de usuários seguindo ONG com ID '${idOng}' encontrada.`,
        status: 200,
        data: followers
      });
    } catch (error) {
      console.log(`Error: `, error);
      return res.status(500).json({
        status: 500,
        message: process.env.ERRO_500 ?? "Erro no servidor.",
      });
    }
  }

  async getOngsForUser(req: Request, res: Response) {
    try {
      const idUsuario = Number(req.params.idUsuario);

      const userMask = await prisma.tbl_usuario.findUnique({
        where: { idUsuario: Number(idUsuario) }
      });

      if (userMask == null) {
        return res.status(400).json({
          status: 400,
          message: `Usuário com ID '${idUsuario}' não encontrado.`,
        });
      }

      const ongs = await prisma.tbl_seguidor.findMany({
        where: { idUsuario: Number(idUsuario) },
        include: {
          tbl_ong: true,
          tbl_usuario: true
        }
      });

      return res.status(200).json({
        message: `Lista de ONGs seguidas pelo usuário com ID '${idUsuario}'`,
        status: 200,
        data: ongs
      });
    } catch (error) {
      console.log(`Error: `, error);
      return res.status(500).json({
        status: 500,
        message: process.env.ERRO_500 ?? "Erro no servidor.",
      });
    }

  }
}

export default FollowerController;