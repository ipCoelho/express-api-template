import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserToEventController {
  async createUserToEvent(req: Request, res: Response) {
    try {
      if (!req.body.idEvento || !req.body.idUsuario) {
        return res.status(400).json({
          status: 400,
          message: "Dados incompletos.",
          expected: {
            idEvento: "number",
            idUsuario: "number",
          },
        });
      }

      const idEvento: number = req.body.idEvento;
      const idUsuario: number = req.body.idUsuario;

      const eventMask = await prisma.tbl_eventos.findUnique({
        where: { idEventos: Number(idEvento) }
      });

      if (eventMask == null) {
        return res.status(400).json({
          status: 400,
          message: `Evento com ID '${idEvento}' não encontrado.`,
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

      const userToEventMask = await prisma.tbl_usuario_evento.findFirst({
        where: { idUsuario: Number(idUsuario), idEventos: Number(idEvento) }
      });

      if (userToEventMask != null) {
        return res.status(400).json({
          status: 400,
          message: `Usuário com ID '${idUsuario}' já está inscrito no evento com ID '${idEvento}'.`,
        });
      }

      const userToEvent = await prisma.tbl_usuario_evento.create({
        data: {
          idEventos: Number(idEvento),
          idUsuario: Number(idUsuario),
        },
      });

      return res.status(200).json({
        status: 200,
        message: `Usuário com ID '${idUsuario}' inscrito no evento com ID '${idEvento}' com sucesso.`,
        data: userToEvent,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(500).json({
        status: 500,
        message: process.env.ERRO_500 ?? "Erro no servidor.",
      });
    }
  }

}

export default UserToEventController;