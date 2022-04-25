import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class FavoriteController {
    async create(req: Request, res: Response) {
    //     const { userId, postId } = req.body;
    //     const favorite = await prisma.favorite.create({
    //         data: {
    //             user: { connect: { id: userId } },
    //             post: { connect: { id: postId } }
    //         }
    //     });
    //     return res.json(favorite);
    // }

    }
}

export default FavoriteController;