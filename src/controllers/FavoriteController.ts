import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class FavoriteController {
    async create(req: Request, res: Response) {
        try {
            const { idOng, idUsuario } = req.body;
            const favorite = await prisma.tbl_favoritos.create({
                data: {
                    ...idOng,
                    ...idUsuario,
                }
            });
            res.status(200);
            res.json({ RequestData: req.body, data: favorite });
        } catch (error) {
            res.status(500);
            res.json({ RequestData: req.body, Error: error });
        }
    }
}

