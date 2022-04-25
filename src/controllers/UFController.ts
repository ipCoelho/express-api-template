import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class UFController {
    async findAll(req: Request, res: Response) {
        try {
            const ufs = await prisma.tbl_estado.findMany();

            console.info(`> Returned: 
                {
                    message: "Lista de UFs retornada com sucesso.",
                    status: 200,
                    data: ${JSON.stringify(ufs)}
                }`
            );

            res.status(200).json({
                message: "Lista de UFs retornada com sucesso.",
                status: 200,
                data: ufs
            });
        } catch (error) {
            console.log("Error: ", error);
            return res.status(500).json({
              message: process.env.ERRO_500 ?? "Erro no servidor.",
              status: 500,
            });
        }
    }
}

export default UFController;