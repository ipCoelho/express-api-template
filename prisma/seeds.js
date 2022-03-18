import Prisma from "@prisma/client";
const { PrismaClient } = Prisma;
const prisma = new PrismaClient();

async function main() {
  // tbl_estado
  try {
    await prisma.tbl_estado.deleteMany({});
    await prisma.tbl_estado.createMany({
      data: [
        { nome: "Acre", sigla: "AC" },
        { nome: "Alagoas", sigla: "AL" },
        { nome: "Amapá", sigla: "AP" },
        { nome: "Amazonas", sigla: "AM" },
        { nome: "Bahia", sigla: "BA" },
        { nome: "Ceará", sigla: "CE" },
        { nome: "Distrito Federal", sigla: "DF" },
        { nome: "Espírito Santo", sigla: "ES" },
        { nome: "Goiás", sigla: "GO" },
        { nome: "Maranhão", sigla: "MA" },
        { nome: "Mato Grosso", sigla: "MT" },
        { nome: "Mato Grosso do Sul", sigla: "MS" },
        { nome: "Minas Gerais", sigla: "MG" },
        { nome: "Pará", sigla: "PA" },
        { nome: "Paraíba", sigla: "PB" },
        { nome: "Paraná", sigla: "PR" },
        { nome: "Pernambuco", sigla: "PE" },
        { nome: "Piauí", sigla: "PI" },
        { nome: "Rio de Janeiro", sigla: "RJ" },
        { nome: "Rio Grande do Norte", sigla: "RN" },
        { nome: "Rio Grande do Sul", sigla: "RS" },
        { nome: "Rondônia", sigla: "RO" },
        { nome: "Roraima", sigla: "RR" },
        { nome: "Santa Catarina", sigla: "SC" },
        { nome: "São Paulo", sigla: "SP" },
        { nome: "Sergipe", sigla: "SE" },
        { nome: "Tocantins", sigla: "TO" },
      ],
    });
  } catch (error) {
    !error
      ? console.log(" > tbl_estado seeded.")
      : console.log(` > tbl_estado `, `WAS NOT SEEDED\n`, error);
  }

  // tbl_login
  try {
    await prisma.tbl_login.deleteMany({});
    await prisma.tbl_login.createMany({
      data: [
        {
          email: "aacd@email.com",
          senha: "1"
        },
        {
          email: "greenpeace@email.com",
          senha: "2"
        }          
      ],
    });
  } catch (error) {
    !error
      ? console.log(" > tbl_login seeded.")
      : console.log(` > tbl_login `, `WAS NOT SEEDED\n`, error);
  }

  // tbl_ongs
  try {
    await prisma.tbl_ong.deleteMany({});
    await prisma.tbl_ong.createMany({
      data: [
        {
          nome: "AACD",
          idLogin: 1,
          senha: "1",
          descricacao: "Orgão que ajuda pessoas",
          banner:
            "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
          cnpj: "54.421.484/0001-71",
          dataDeCriacao: new Date().toISOString(),
        },
        {
          nome: "GreenPeace",
          idLogin: 2,
          senha: "1",
          descricacao: "Orgão que ajuda pessoas",
          banner:
            "https://c8.alamy.com/comp/BHGNH5/greenpeace-banner-at-the-wave-the-biggest-ever-demonstration-on-climate-BHGNH5.jpg",
          cnpj: "84.703.965/0001-30",
          dataDeCriacao: new Date().toISOString(),
        },
      ],
    });
  } catch (error) {
    !error
      ? console.log(" > tbl_ong seeded.")
      : console.log(` > tbl_ong `, `WAS NOT SEEDED\n`, error);
  }
}
main();
