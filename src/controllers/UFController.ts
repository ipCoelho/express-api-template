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

	async filterByUf(req: Request, res: Response) {
		try {
			if (!req.body.uf) {
				return res.status(400).json({
					message: "UF não informada.",
					status: 400,
					expected: {
						uf: "string",
					},
				});
			}
			console.log("req.body.uf: ", req.body.uf);
			
			const getUfId = await prisma.tbl_estado.findUnique({
				where: {
					nome: req.body.uf,
				},
			});
			console.log("getUfId: ", getUfId);
			

			if (getUfId == null) {
				return res.status(404).json({
					message: "UF não encontrada.",
					status: 404,
				});
			}

			const ongsId = await prisma.tbl_ong_estado.findMany({
				where: {
					idEstado: getUfId.idEstado,
				},
			});
			console.log("ongsId: ", ongsId);

			if (ongsId.length > 0) {
				return res.status(200).json({
					message: `Lista de ONGs para o estado '${req.body.uf}' com sucesso.`,
					status: 200,
					data: ongsId,
				});
			} else {
				return res.status(404).json({
					message: `Nenhuma ONG encontrada para o estado '${req.body.uf}'.`,
					status: 404,
				});
			}

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