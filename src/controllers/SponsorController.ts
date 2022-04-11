import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class SponsorController {
    async create(req: Request, res: Response) {
        try {
            const sponsor = req.body;
    
            if (!req.body.nome) {
                return res
                    .status(400)
                    .json({ 
                        message: "O campo 'nome' é obrigatório.",
                        fields: ['nome', 'foto?', 'link?'] 
                    });
            }
            
            const databaseData = await prisma.tbl_patrocinadores.create({
                data: {
                    nome: sponsor.nome,
                    foto: sponsor.foto,
                    link: sponsor.null,                
                },
            });
            return res.status(200).json({ RequestData: sponsor, data: databaseData });
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const sponsors = await prisma.tbl_patrocinadores.findMany();
            return res.status(200).json({ data: sponsors });
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    }
}

export default SponsorController;