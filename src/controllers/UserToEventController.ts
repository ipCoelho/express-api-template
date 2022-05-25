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

  async findAllUsersPerEvent(req: Request, res: Response) {
    try {
      const idEvento = Number(req.params.idEvento);
      const idOng = Number(req.params.idOng);

      const allOngsEvents = await prisma.tbl_eventos.findMany({
        where: { idOng: Number(idOng) },
      });

      if (allOngsEvents.length === 0) {
        return res.status(400).json({
          status: 400,
          message: `ONG com ID '${idOng}' não tem nenhum evento cadastrado.`,
        });
      }

      const selectedEvent = allOngsEvents.find(
        (event) => event.idEventos === idEvento
      );

      if (selectedEvent == null) {
        return res.status(400).json({
          status: 400,
          message: `Evento com ID '${idEvento}' não encontrado.`,
        });
      }

      const allUsersPerEvent = await prisma.tbl_usuario_evento.findMany({
        where: { idEventos: Number(idEvento) },
        include: {
          tbl_usuario: true,
          tbl_eventos: true,
        },
      });

      return res.status(200).json({
        status: 200,
        message: `Todos usuários inscritos no evento com ID '${idEvento}'; da ONG com ID '${idOng}' encontrados.`,
        data: allUsersPerEvent,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(500).json({
        status: 500,
        message: process.env.ERRO_500 ?? "Erro no servidor.",
      });
    }
  }
  
  async findAllEventsAndUsersPerOng(req: Request, res: Response) {
    try {
      const idOng = Number(req.params.idOng);

      const allOngsEvents = await prisma.tbl_eventos.findMany({
        where: { idOng: Number(idOng) },
        include: {
          tbl_endereco: true,
          tbl_evento_media: true,
          tbl_usuario_evento: {
            select: {
              id_usuario_evento: true,
              tbl_usuario: true,
              idEventos: true,
              idUsuario: true,
            }
          }
        }
      });

      if (allOngsEvents.length === 0) {
        return res.status(400).json({
          status: 400,
          message: `ONG com ID '${idOng}' não tem nenhum evento cadastrado.`,
        });
      } else {
        return res.status(200).json({
          status: 200,
          message: `Todas eventos da ONG com ID '${idOng}' encontradas.`,
          data: allOngsEvents,
        });
      }
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(500).json({
        status: 500,
        message: process.env.ERRO_500 ?? "Erro no servidor.",
      });
    }
  }

  async removeUserToEvent(req: Request, res: Response) {
    try {
      const idEvento = Number(req.params.idEvento);
      const idUsuario = Number(req.params.idUsuario);

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

      if (userToEventMask == null) {
        return res.status(400).json({
          status: 400,
          message: `Usuário com ID '${idUsuario}' não está inscrito no evento com ID '${idEvento}'.`,
        });
      }

      const userToEvent = await prisma.tbl_usuario_evento.delete({
        where: { id_usuario_evento: userToEventMask.id_usuario_evento }
      });

      return res.status(200).json({
        status: 200,
        message: `Usuário com ID '${idUsuario}' removido do evento com ID '${idEvento}' com sucesso.`,
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

  // services for management.
  async getUsersOfTheEventPaged(req: Request, res: Response) {
    try {
      const page = Number(req.params.page);
      const idEvent = Number(req.params.idEvent);
      const idOng = Number(req.params.idOng);

      const allEvents = await prisma.tbl_eventos.findMany({
        where: { idOng: idOng },
        include: {
          tbl_usuario_evento: {
            select: { 
              tbl_usuario: {
                select: {
                  nome: true,
                  curriculo: true,
                  dataDeNascimento: true,
                  tbl_login: {
                    include: { tbl_contato: true }
                  }
                } 
              }
            }
          }
        }
      });

      const requestedEvent = allEvents.find(event => event.idEventos == idEvent);

      if (requestedEvent == null) {
        return res.status(400).json({
          status: 400,
          message: `Vaga com ID '${idEvent}'; da ONG com ID '${idOng}' não encontrada.`,
        });
      }

      const responsePagination = requestedEvent.tbl_usuario_evento.slice(
        page * 7,
        page * 7 + 7
      );

      return res.status(200).json({
        message: `Usuários do evento com ID '${idEvent}'; da ONG com ID '${idOng}' recuperados com sucesso.`,
        status: 200,
        data: responsePagination.map(user => user.tbl_usuario)
      });

    } catch (error) {
      console.log(`> Error: `, error);
      return res.status(500).json({
        message: process.env.ERRO_500 ?? "Erro no servidor.",
        status: 500,
      });
    }
  }
}

export default UserToEventController;