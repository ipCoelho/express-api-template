import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();




// async function main() {
//   let estados = await prisma.tbl_estado.createMany({
//     data: [
//       {nome: "São Paulo", sigla: "SP"},
//       {nome: "Rio de Janeiro", sigla: "RJ"},
//       {nome: "Amazonas", sigla: "AM"},
//       {nome: "São Paulo", sigla: "SP"},
//       {nome: "São Paulo", sigla: "SP"},
//       {nome: "São Paulo", sigla: "SP"},
//       {nome: "São Paulo", sigla: "SP"},
//       {nome: "São Paulo", sigla: "SP"},
//       {nome: "São Paulo", sigla: "SP"},
//       {nome: "São Paulo", sigla: "SP"},
//       {nome: "São Paulo", sigla: "SP"},
//       {nome: "São Paulo", sigla: "SP"},
//       {nome: "São Paulo", sigla: "SP"},
//       {nome: "São Paulo", sigla: "SP"},
//       {nome: "São Paulo", sigla: "SP"},
//     ]
//   })
// }