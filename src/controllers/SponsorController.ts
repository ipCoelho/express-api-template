import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { base64intoUint8Array } from "@utils/base64intoUint8Array";
import FirebaseHandler from "@utils/FirebaseHandler";

const prisma = new PrismaClient();
const fbhandler = new FirebaseHandler();

class SponsorController {
 async create(req: Request, res: Response) {
    try {
      if (!req.body.nome || !req.body.site || (!req.body.media || req.body.media.length === 0)) {
        return res.status(400).json({
          message: `Requisição vazia ou inválida.`,
          expected: {
            nome: "string",
            site: "string",
            media: [
              {
                fileName: "string",
                fileType: "string",
                base64: "string"
              }
            ]
          }
        });
      }

      const sponsorName: string = req.body.nome;
      const sponsorSite: string = req.body.site;
      const sponsorMedia: File = req.body.media[0];

      const sponsorMask = await prisma.tbl_patrocinadores.findUnique({
        where: { nome: sponsorName }
      });

      if (sponsorMask != null) {
        return res.status(400).json({
          message: `O nome '${sponsorName}' já existe.`,
          status: 400,
          data: sponsorMask,
        });
      }

      const u8array = base64intoUint8Array(sponsorMedia.base64);
      const fileRef = `/patrocinadores/${sponsorName}/foto/${sponsorMedia.fileName}`;

      await fbhandler.uploadUint8Array(u8array, fileRef);
      const url = await fbhandler.getMediaUrl(fileRef);
      console.log(`> sponsorMediaUrl: `, url);

      const fbsponsorMedia = await prisma.tbl_firebase_foto.create({
        data: {
          referencia: fileRef,
          titulo: sponsorMedia.fileName,
          tipo: sponsorMedia.type,
          url: url,
        }
      });
      
      const sponsor = await prisma.tbl_patrocinadores.create({
        data: {
          nome: sponsorName,
          url: sponsorSite,
          titulo: sponsorMedia.fileName,
          referencia: fbsponsorMedia.url,
        }
      });

      return res.status(200).json({
        message: `Patrocinador '${sponsorName}' criado com sucesso.`,
        data: sponsor,
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

  async sponsoringOng(req: Request, res: Response) {
    try {
      const ong = Number(req.body.idOng);
      const idPatrocinadores = Number(req.body.idPatrocinador);

      const sponsorMask = await prisma.tbl_patrocinadores.findUnique({
        where: { idPatrocinadores: idPatrocinadores }
      });

      if (sponsorMask == null) {
        return res.status(404).json({
          message: `Patrocinador com id '${idPatrocinadores}' não encontrado.`,
          status: 404,
        });
      }

      const ongMask = await prisma.tbl_ong.findUnique({
        where: { idOng: Number(ong) }
      });

      if (ongMask == null) {
        return res.status(404).json({
          message: `ONG com id '${ong}' não encontrada.`,
          status: 404,
        });
      }

      const sponsoring = await prisma.tbl_ong_patrocinadores.findFirst({
        where: {
          idOng: Number(ong),
          idPatrocinadores: Number(idPatrocinadores),
        }
      });

      if (sponsoring != null) {
        return res.status(400).json({
          message: `O patrocinador '${sponsorMask.nome}' já está patrocinando a ONG '${ongMask.nome}'.`,
          status: 400,
        });
      }

      const newSponsoring = await prisma.tbl_ong_patrocinadores.create({
        data: {
          idOng: Number(ong),
          idPatrocinadores: Number(idPatrocinadores),
        },
        include: {
          tbl_ong: true,
          tbl_patrocinadores: true
        }
      });

      return res.status(200).json({
        message: `O patrocinador '${sponsorMask.nome}' patrocinou a ONG '${ongMask.nome}' com sucesso.`,
        status: 200,
        data: newSponsoring,
      });
    } catch (error) {
      console.log("Error: ", error);
      return res.status(500).json({
        message: process.env.ERRO_500 ?? `Erro no servidor`,
        status: 500,
      });
    }
  }

  async findAllSponsorsByOng(req: Request, res: Response) {
    try {
      const ong = Number(req.params.id);

      const ongMask = await prisma.tbl_ong.findUnique({
        where: { idOng: Number(ong) }
      });

      if (ongMask == null) {
        return res.status(404).json({
          message: `ONG com id '${ong}' não encontrada.`,
          status: 404,
        });
      }

      const sponsors = await prisma.tbl_ong_patrocinadores.findMany({
        where: { idOng: Number(ong) },
        include: {
          tbl_patrocinadores: true,
          tbl_ong: true
        }
      });

      return res.status(200).json({
        message: `Patrocinadores da ONG '${ongMask.nome}' encontrados com sucesso.`,
        status: 200,
        data: sponsors,
      });
    } catch (error) {
      console.log("Error: ", error);
      return res.status(500).json({
        message: process.env.ERRO_500 ?? `Erro no servidor`,
        status: 500,
      });
    }
  }

  async findAllOngsBySponsor(req: Request, res: Response) {
    try {
      const sponsor = Number(req.params.id);

      const sponsorMask = await prisma.tbl_patrocinadores.findUnique({
        where: { idPatrocinadores: Number(sponsor) }
      });

      if (sponsorMask == null) {
        return res.status(404).json({
          message: `Patrocinador com id '${sponsor}' não encontrado.`,
          status: 404,
        });
      }

      const ongs = await prisma.tbl_ong_patrocinadores.findMany({
        where: { idPatrocinadores: Number(sponsor) },
        include: {
          tbl_patrocinadores: true,
          tbl_ong: true
        }
      });

      return res.status(200).json({
        message: `ONGs patrocinadas pelo patrocinador '${sponsorMask.nome}' encontradas com sucesso.`,
        status: 200,
        data: ongs,
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

type File = {
  fileName: string;
  type: string;
  base64: string;
}

export default SponsorController;
