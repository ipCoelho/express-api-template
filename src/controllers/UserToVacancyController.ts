import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserToVacancyController {
  async createUserToVacancy(req: Request, res: Response) {
    try {
      if (!req.body.idVagas || !req.body.idUsuario) {
        return res.status(400).json({
          status: 400,
          message: "Dados incompletos.",
          expected: {
            idVagas: "number",
            idUsuario: "number",
          },
        });
      }

      const idVagas: number = req.body.idVagas;
      const idUsuario: number = req.body.idUsuario;

      const vacancyMask = await prisma.tbl_vagas.findUnique({
        where: { idVagas: Number(idVagas) }
      });

      if (vacancyMask == null) {
        return res.status(400).json({
          status: 400,
          message: `Vaga com ID '${idVagas}' não encontrada.`,
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

      const userToVacancyMask = await prisma.tbl_vagas_usuario.findFirst({
        where: { idUsuario: Number(idUsuario), idVagas: Number(idVagas) }
      });

      if (userToVacancyMask != null) {
        return res.status(400).json({
          status: 400,
          message: `Usuário com ID '${idUsuario}' já está inscrito na vaga com ID '${idVagas}'.`,
        });
      }

      const userToVacancy = await prisma.tbl_vagas_usuario.create({
        data: {
          idVagas: Number(idVagas),
          idUsuario: Number(idUsuario),
        },
        include: {
          tbl_usuario: true,
          tbl_vagas: true
        }
      });

      return res.status(200).json({
        message: `Usuário com ID '${idUsuario}' inscrito na vaga com ID '${idVagas}' com sucesso.`,
        status: 200,
        data: userToVacancy,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(500).json({
        status: 500,
        message: process.env.ERRO_500 ?? "Erro no servidor.",
      });
    } 
  }

  async allVacanciesPerOng(req: Request, res: Response) {
    try {
      const idOng = Number(req.params.idOng);

      const vacancies = await prisma.tbl_vagas.findMany({
        where: { idOng: Number(idOng) },
        include: {
          tbl_contato: true,
          tbl_endereco: true,
          tbl_ong: true,
          tbl_vagas_usuario: {
            select: {
              idUsuario: true,
              idVagas: true,
              tbl_usuario: true,
              tbl_vagas: true
            }
          }
        }
      });

      return res.status(200).json({
        status: 200,
        message: "Lista de vagas encontrada com sucesso.",
        data: vacancies,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(500).json({
        status: 500,
        message: process.env.ERRO_500 ?? "Erro no servidor.",
      });
    }
  }

  async findUniqueVacancy(req: Request, res: Response) {
    try {
      const idOng = Number(req.params.idOng);
      const idVaga = Number(req.params.idVaga);

      const allOngsVacancies = await prisma.tbl_vagas.findMany({
        where: { idOng: Number(idOng) },
        include: {
          tbl_contato: true,
          tbl_endereco: true,
          tbl_ong: true,
          tbl_vagas_usuario: {
            select: {
              idUsuario: true,
              idVagas: true,
              tbl_usuario: true,
              tbl_vagas: true
            }
          }
        }
      });

      const requestedVacancy = allOngsVacancies.find((vacancy) => vacancy.idVagas == idVaga);

      if (requestedVacancy == null) {
        return res.status(400).json({
          status: 400,
          message: `Vaga com ID '${idVaga}' não encontrada.`,
        });
      } else {
        return res.status(200).json({
          status: 200,
          message: "Vaga encontrada com sucesso.",
          data: requestedVacancy,
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

  async removeUserToVacancy(req: Request, res: Response) {
    try {
      const idVagas = Number(req.params.idVagas);
      const idUsuario = Number(req.params.idUsuario);

      const findRecord = await prisma.tbl_vagas_usuario.findFirst({
        where: { idUsuario: Number(idUsuario), idVagas: Number(idVagas) }
      });

      if (findRecord == null) {
        return res.status(400).json({
          status: 400,
          message: `Usuário com ID '${idUsuario}' não está inscrito na vaga com ID '${idVagas}'.`,
        });

      } else {
        const recordDelete = await prisma.tbl_vagas_usuario.delete({
          where: { idVagasUsuario: Number(findRecord.idVagasUsuario) }
        });
        return res.status(200).json({
          status: 200,
          message: `Usuário com ID '${idUsuario}' desinscrito da vaga com ID '${idVagas}' com sucesso.`,
          data: recordDelete,
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

    // services for management.
    async getUsersOfTheVacancyPaged(req: Request, res: Response) {
      try {
        const page = Number(req.params.page);
        const idVacancy = Number(req.params.idVacancy);
        const idOng = Number(req.params.idOng);
  
        const allVacancies = await prisma.tbl_vagas.findMany({
          where: { idOng: idOng },
          include: {
            tbl_vagas_usuario: {
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
  
        const requestedVacancy = allVacancies.find(vacancy => vacancy.idVagas == idVacancy);
  
        if (requestedVacancy == null) {
          return res.status(400).json({
            status: 400,
            message: `Vaga com ID '${idVacancy}'; da ONG com ID '${idOng}' não encontrada.`,
          });
        }
  
        const responsePagination = requestedVacancy.tbl_vagas_usuario.slice(
          page * 7,
          page * 7 + 7
        );
  
        return res.status(200).json({
          message: `Usuários da vaga com ID '${idVacancy}'; da ONG com ID '${idOng}' recuperados com sucesso.`,
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

export default UserToVacancyController;