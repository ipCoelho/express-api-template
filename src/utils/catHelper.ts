import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function catHelper(array: Array<number>, length) {
  const ongsNames = [];
  for (let i = 0; i < array.length; i++) {
    const {nome} = await prisma.tbl_ong.findUnique({
      where: {
        idOng: Number(array[i]),
      },
    });
    ongsNames.push(nome);
  }

  const sampleArray = ongsNames, counts = {};
  sampleArray.forEach(x => { 
    counts[x] = (counts[x] || 0) + 1; 
  });

  const filtered = [];
  for(let i = 0; i < ongsNames.length; i++) {
    Number((counts[ongsNames[i]]) > length? filtered.push(ongsNames[i]) : null;
  }

  return {
    filtered,
    counts,
  };
}