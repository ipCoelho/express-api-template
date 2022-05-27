import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class SponsorController {
 async create(req: Request, res: Response) {
    try {
      const sponsor = req.body;

      if (!req.body.nome) {
        console.info(`> Returned:
          {
            message: "O campo 'nome' é obrigatório.",
            fields: {
              nome: "string",
              foto: "string?",
              link: "string?",
            },
            status: 400,
          }
        `);

        return res.status(400).json({
          message: "O campo 'nome' é obrigatório.",
          fields: {
            nome: "string",
            foto: "string?",
            link: "string?",
          },
          status: 400,
        });
      } else {
        const nameVerify = await prisma.tbl_patrocinadores.findUnique({
          where: {
            nome: sponsor.nome,
          },
        });

        if (nameVerify) {
          console.info(`> Returned:
            {
              message: "O nome '${sponsor.nome}' já está em uso.",
              status: 400,
            }
          `);

          return res.status(400).json({
            message: `O nome '${sponsor.nome}' já está em uso.`,
            status: 400,
          });
        }
      }

      const databaseData = await prisma.tbl_patrocinadores.create({
        data: {
          nome: sponsor.nome,
          foto: sponsor.foto,
          link: sponsor.link,
        },
      });

      console.info(`> Returned:
        {
          message: "Patrocinador '${sponsor.nome}' criado com sucesso.",
          data: ${JSON.stringify(databaseData)},
          status: 200,
        }
      `);

      return res.status(200).json({
        message: `Patrocinador '${sponsor.nome}' criado com sucesso.`,
        data: databaseData,
        status: 200,
      });
    } catch (error) {
      console.log("Error: ", error);
      return res.status(500).json({
        message: process.env.ERRO_500 ?? `Erro no servidor`,
        status: 500,
      });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const sponsors = await prisma.tbl_patrocinadores.findMany();
      console.info(`> Returned:
        {
          message: "Todos os patrocinadores registrados."
          data: ${JSON.stringify(sponsors)},
          status: 200,
        }
      `);

      return res.status(200).json({
        message: `Todos os patrocinadores registrados.`,
        data: sponsors,
        status: 200,
      });
    } catch (error) {
      console.log("Error: ", error);
      return res
        .status(500)
        .json({
          message: process.env.ERRO_500 ?? `Erro no servidor`,
        });
    }
  }

  async getId(req: Request, res: Response) {
    try {
      const id = req.params.id ?? req.query.id.toString();

      const sponsor = await prisma.tbl_patrocinadores.findUnique({
        where: {
          idPatrocinadores: Number(id),
        },
      });

      if (!sponsor) {
        return res.status(404).json({
          message: `Patrocinador com id '${id}' não encontrado.`,
          status: 404,
        });
      } else {
        return res.status(200).json({
          message: `Patrocinador com id '${id}' encontrado.`,
          data: sponsor,
          status: 200,
        });
      }
    } catch (error) {
      return res
        .status(500)
        .json({
          message: process.env.ERRO_500 ?? `Erro no servidor`,
          error: error,
        });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.params.id;

      const sponsor = await prisma.tbl_patrocinadores.findUnique({
        where: {
          idPatrocinadores: Number(id),
        },
      });

      if (!sponsor) {
        console.info(`> Returned:
          {
            message: "Patrocinador com id '${id}' não encontrado.",
            status: 404,
            }`);

        return res.status(404).json({
          message: `Patrocinador com id '${id}' não encontrado.`,
          status: 404,
        });
      } else {
        const deleted = await prisma.tbl_patrocinadores.delete({
          where: {
            idPatrocinadores: Number(id),
          },
        });
        console.info(`> Returned:
          {
            message: "Patrocinador com (nome: '${sponsor.nome}', id: '${id}') deletado com sucesso.",
            status: 200,
            data: ${JSON.stringify(deleted)},
            }`);

        return res.status(200).json({
          message: `Patrocinador (nome: '${sponsor.nome}', id: '${id}') deletado com sucesso.`,
          status: 200,
          data: deleted,
        });
      }
    } catch (error) {
      console.log("Error: ", error);
      return res
        .status(500)
        .json({
          message: process.env.ERRO_500 ?? `Erro no servidor`,
          status: 500,
        });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const sponsor = req.body;
      const id = req.params.id;

      const sponsorVerify = await prisma.tbl_patrocinadores.findUnique({
        where: {
          idPatrocinadores: Number(id),
        },
      });

      if (!sponsorVerify) {
        console.info(`> Returned:
          {
            message: "Patrocinador com id '${id}' não encontrado.",
            status: 404,
          }`
        );

        return res.status(404).json({
          message: `Patrocinador com id '${id}' não encontrado.`,
          status: 404,
        });
      } else if(Object.keys(req.body).length === 0) {
        console.info(`> Returned:
          {
            message: "Corpo da requisição vazio.",
            status: 400,
          }` 
        );

        return res.status(400).json({
          message: "Corpo da requisição vazio.",
          status: 400,
        });
      } else if(req.body.nome == null) {
        console.info(`> Returned:
          {
            message: "Campo 'nome' obrigatório.",
            status: 400,
            expected: {
              nome: 'string',
              foto: 'string?',
              link: 'string?',
            },
          }`
        );

        return res.status(400).json({
          message: `Campo 'nome' obrigatório.`,
          status: 400,
          expected: {
            nome: 'string',
            foto: 'string?',
            link: 'string?',
          },
        });
      }

      const updated = await prisma.tbl_patrocinadores.update({
        where: {
          idPatrocinadores: Number(id),
        },
        data: { ...sponsor }
      });

      console.info(`> Returned:
        {
          message: "Patrocinador com id '${id}' atualizado com sucesso.",
          status: 200,
          data: ${JSON.stringify(updated)},
        }`
      );

      return res.status(200).json({
        message: `Patrocinador com id '${id}' atualizado com sucesso.`,
        status: 200,
        data: updated,
      });
    } catch (error) {
      console.log("Error: ", error);
      return res.status(500).json({
        message: process.env.ERRO_500 ?? `Erro no servidor`,
        status: 500,
      });
    }
  }
}

export default SponsorController;
