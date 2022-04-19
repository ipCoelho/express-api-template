import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class FavoriteController {
    async create(req: Request, res: Response) {
        // try {
        //     const fav = req.body;

        //     if (fav.idOng === undefined || fav.idUsuario === undefined) {
        //         return res.status(400).json({
        //             message: "Missing data.",
        //             expected: {
        //                 idOng: "Number",
        //                 idUsuario: "Number",
        //             },
        //         });
        //     }

        //     const verification = await prisma.tbl_favoritos.findMany({
        //         where: {
        //             idOng: fav.idOng,
        //             idUsuario: fav.idUsuario,
        //         }
        //     });

        //     if (verification.length === 0) {
        //         await prisma.tbl_favoritos.create({
        //             data: {
        //                 idOng: fav.idOng,
        //                 idUsuario: fav.idUsuario,
        //                 favorito: 1,
        //             }
        //         });

        //         return res.status(200).json({
        //             message: "Favorite didn't exist, but created.",
        //             status: true,
        //         });
        //     } else if (verification.length > 0) {
        //         const status = verification[0].favorito === 0 ? true : false;

        //         // await prisma.tbl_favoritos.update({
        //         // });     

        //         return res.status(200).json({
        //             message: `Favorito already exists as '${!status}', setting an opposite status.`,
        //             status: status,
        //         });
        //     }
        // } catch (error) {
        //     console.log(error);
        //     return res.status(500).json({
        //         message: "Internal server error.",
        //         status: false,
        //     });
        // }
    }
}

export default FavoriteController;