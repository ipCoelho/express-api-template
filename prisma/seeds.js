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
          senha: "1",
        },
        {
          email: "greenpeace@email.com",
          senha: "2",
        },
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
          foto: "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
          banner:
            "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
          historia:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
          cnpj: "54.421.484/0001-71",
          // dataDeFundacao: "1920",
          // dataDeCriacao: new Date().toISOString(),
          qtdDeMembros: 234871287
        },
        {
          nome: "GreenPeace",
          idLogin: 2,
          senha: "1",
          descricacao: "Orgão que ajuda pessoas",
          foto: "https://c8.alamy.com/comp/BHGNH5/greenpeace-banner-at-the-wave-the-biggest-ever-demonstration-on-climate-BHGNH5.jpg",
          banner:
            "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
          historia:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
          cnpj: "84.703.965/0001-30",
          // dataDeCriacao: new Date().toISOString(),
          // dataDeFundacao: "2018"
          qtdDeMembros: 9
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
