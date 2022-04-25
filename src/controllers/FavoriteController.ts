import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class FavoriteController {
    async create(req: Request, res: Response) {
        try {
            if (!req.body.idUsuario || !req.body.idOng) {
                console.info(`> Returned:
                    {
                        message: 'Não foi encontrado dados obrigatórios.',
                        expected: {
                            idUsuario: 'String',
                            idOng: 'String',
                            detalhe: 'Ambos são strings de números.',
                        },
                        status: 400,
                    }`
                );
    
                return res.status(400).json({
                    message: 'Não foi encontrado dados obrigatórios.',
                    expected: {
                        idUsuario: 'String',
                        idOng: 'String',
                        detalhe: 'Ambos são strings de números.',
                    },
                    status: 400,
                });
            }
    
            const { idUsuario, idOng } = req.body;
    
            const favorite = await prisma.tbl_favoritos.create({
                data: {
                    idUsuario: idUsuario,
                    idOng: idOng,
                    favoritado: true,
                },
            });
    
            console.info(`> Returned:
                {
                    message: 'Favorito criado com sucesso.',
                    favorite: ${JSON.stringify(favorite)},
                    status: 200,
                }`
            );
    
            return res.status(200).json({
                message: 'Favorito criado com sucesso.',
                data: favorite,
                status: 200,
            });
        } catch (error) {
            console.log(`Error: ${error}`);
            return res.status(500).json({
                message: process.env.ERRO_500 ?? 'Erro no servidor.',
                status: 500,
            });
        }

    }

    async delete(req: Request, res: Response) {
        try {
            if (req.params.idUsuario == null || req.params.idOng == null) {
                console.info(`> Returned:
                    {
                        message: 'Não foi encontrado dados obrigatórios.',
                        expected: {
                            idUsuario: 'String',
                            idOng: 'String',
                            detalhe: 'Ambos são strings de números.',
                        },
                        status: 400,
                    }`
                );

                return res.status(400).json({
                    message: 'Não foi encontrado dados obrigatórios.',
                    expected: {
                        idUsuario: 'String',
                        idOng: 'String',
                        detalhe: 'Ambos são strings de números.',
                    },
                    status: 400,
                });
            }

            const { idUsuario, idOng } = req.params;

            const IdUserVerify = await prisma.tbl_usuario.findUnique({
                where: {
                    idUsuario: Number(idUsuario),
                },
            });

            const IdOngVerify = await prisma.tbl_ong.findUnique({
                where: {
                    idOng: Number(idOng),
                },
            });

            if (!IdUserVerify) {
                console.info(`> Returned:
                    {
                        message: "Usuário com ID '${idUsuario}' NÃO encontrado.",
                        status: 404
                    }`
                );

                return res.status(404).json({
                    message: `Usuário com ID '${idUsuario}' NÃO encontrado.`,
                    status: 404
                });
            } else if(!IdOngVerify) {
                console.info(`> Returned:
                    {
                        message: "ONG com ID '${idOng}' NÃO encontrada.",
                        status: 404
                    }`
                );

                return res.status(404).json({
                    message: `ONG com ID '${idOng}' NÃO encontrada.`,
                    status: 404
                });
            }

            const findFavorite = await prisma.tbl_favoritos.findFirst({
                where: {
                    idUsuario: Number(idUsuario),
                    idOng: Number(idOng),
                },
            });

            const favorite = await prisma.tbl_favoritos.delete({
                where: {
                    idFavoritos: findFavorite.idFavoritos,
                },
            });

            if(!findFavorite) {
                console.info(`> Returned:
                    {
                        message: "Favorito.",
                        status: 400
                    }`
                );

                return res.status(400).json({
                    message: "Não foi possível deletar o favorito.",
                    status: 400
                });
            } else if(favorite) {
                console.info(`> Returned:
                    {
                        message: "Favorito deletado com sucesso.",
                        favorite: ${JSON.stringify(favorite)},
                        status: 200
                    }`
                );

                return res.status(200).json({
                    message: "Favorito deletado com sucesso.",
                    data: favorite,
                    status: 200
                });
            }
        } catch (error) {
            console.log(`Error: ${error}`);
            return res.status(500).json({
                message: process.env.ERRO_500 ?? 'Erro no servidor.',
                status: 500,
            });
        }
    }

    async find(req: Request, res: Response) {
        try {
            const allFav = await prisma.tbl_favoritos.findMany();

            console.info(`> Returned:
                {
                    message: 'Todos os favoritos retornado com sucesso.',
                    favorites: ${JSON.stringify(allFav)},
                    status: 200,
                }`
            );

            return res.status(200).json({
                message: 'Todos os favoritos retornado com sucesso.',
                data: allFav,
                status: 200,
            });
        } catch (error) {
            console.log(`Error: ${error}`);
            return res.status(500).json({
                message: process.env.ERRO_500 ?? 'Erro no servidor.',
                status: 500,
            });
        }
    }

    async findUser(req: Request, res: Response) {
        try {
            const { idUsuario } = req.params;

            const IdUserVerify = await prisma.tbl_usuario.findUnique({
                where: {
                    idUsuario: Number(idUsuario),
                },
            });

            if (!IdUserVerify) {
                console.info(`> Returned:
                    {
                        message: "Usuário com ID '${idUsuario}' NÃO encontrado.",
                        status: 404
                    }`
                );

                return res.status(404).json({
                    message: `Usuário com ID '${idUsuario}' NÃO encontrado.`,
                    status: 404
                });
            }

            const allFavUser = await prisma.tbl_favoritos.findMany({
                where: {
                    idUsuario: Number(idUsuario),
                },
            });

            console.info(`> Returned:
                {
                    message: 'Todos os favoritos do usuário '${idUsuario}' retornado com sucesso.',
                    favorites: ${JSON.stringify(allFavUser)},
                    status: 200,
                }`
            );

            return res.status(200).json({
                message: `Todos os favoritos do usuário '${idUsuario}' retornado com sucesso.`,
                data: allFavUser,
                status: 200,
            });
        } catch (error) {
            console.log(`Error: ${error}`);
            return res.status(500).json({
                message: process.env.ERRO_500 ?? 'Erro no servidor.',
                status: 500,
            });
        }
    }

    async findUserAndOng(req: Request, res: Response) {
        try {
            if (!req.params.usuario) {
                const allFavs = await prisma.tbl_favoritos.findMany();

                console.info(`> Returned:
                    {
                        message: 'Todos os favoritos retornados com sucesso.',
                        allFavs: ${JSON.stringify(allFavs)},
                        status: 200,
                    }`
                );

                return res.status(200).json({
                    message: 'Todos os favoritos retornados com sucesso.',
                    data: allFavs,
                    status: 200,
                });
            } else if(!req.params.ong) {
                const allFavs = await prisma.tbl_favoritos.findMany({
                    where: {
                        idUsuario: Number(req.params.usuario),
                    },
                });

                console.info(`> Returned:
                    {
                        message: 'Todos os favoritos para o ID '${req.params.usuario}' retornados com sucesso.',
                        allFavs: ${JSON.stringify(allFavs)},
                        status: 200,
                    }`
                );

                return res.status(200).json({
                    message: 'Todos os favoritos para o ID ' + req.params.usuario + ' retornados com sucesso.',
                    data: allFavs,
                    status: 200,
                });
            } else {
                const allFavs = await prisma.tbl_favoritos.findMany({
                    where: {
                        idUsuario: Number(req.params.usuario),
                        idOng: Number(req.params.ong),
                    },
                });

                console.info(`> Returned:
                    {
                        message: 'Todos os favoritos para o Usuário '${req.params.usuario}' e ONG '${req.params.ong}' retornados com sucesso.',
                        allFavs: ${JSON.stringify(allFavs)},
                        status: 200,
                    }`
                );

                return res.status(200).json({
                    message: 'Todos os favoritos para o ID ' + req.params.usuario + ' e ID ' + req.params.ong + ' retornados com sucesso.',
                    data: allFavs,
                    status: 200,
                });
            }
        } catch (error) {
            console.log(`Error: ${error}`);
            return res.status(500).json({
                message: process.env.ERRO_500 ?? 'Erro no servidor.',
                status: 500,
            });
        }
    }
}

export default FavoriteController;