import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.usuario.create({
    data: {
      nome: "israel",
      sobrenome: "coelho",
      comidaFavorita: "churros",
      gostaDe: "cachorros",
    },
  });

  const allUsers = await prisma.usuario.findMany({})
  console.log(allUsers, { depth: null });
}
