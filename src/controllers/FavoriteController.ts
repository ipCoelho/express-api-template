import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class FavoriteController {
    async create(req: Request, res: Response) {
        try {
            const fav = req.body;

            if (req.body.idOng || req.body.idUsuario === null) {
                return res.status(400).json({
                    message: "Missing data.",
                    expected: {
                        idOng: "Number",
                        idUsuario: "Number",
                    },
                });
            }

            const verification = await prisma.tbl_favoritos.findMany({
                where: {
                    idOng: fav.idOng,
                    idUsuario: fav.idUsuario,
                }
            });

            if (verification.length === 0) {
                return res.status(200).json({
                    message: "Favorito created.",
                    status: true,
                });
            } else if (verification.length === 1) {
                const status = verification[0].favorito === 0 ? true : false;
                return res.status(200).json({
                    message: `Favorito already exists as '${!status}', setting an opposite status.`,
                    status: status,
                });
            }
        } catch (error) {
            res.status(500);
            res.json({ RequestData: req.body, Error: error });
        }
    }
}

export default FavoriteController;