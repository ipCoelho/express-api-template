import {PrismaClient} from "@prisma/client";
// const { PrismaClient } = Prisma;
const prisma = new PrismaClient();

async function main() {
  const estadoData = [
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
  ];

  try {
    await prisma.tbl_estado.createMany({data: estadoData});
    console.log(" > tbl_estado seeded.");
  } catch (error) {
    console.log(` > tbl_estado `, `WAS NOT SEEDED\n`, error);
  }

  const loginData = [
    {
     "email": "Ruthie_Berge@gmail.com",
     "senha": "3pdmkkzVVikKxZu",
     "idLogin": 1
    },
    {
     "email": "Lucas33@gmail.com",
     "senha": "8nu9awOSaO8ynCf",
     "idLogin": 2
    },
    {
     "email": "Nels.Hills@gmail.com",
     "senha": "Q6WLiNY46d1rwik",
     "idLogin": 3
    },
    {
     "email": "Letha_Paucek52@yahoo.com",
     "senha": "1iDe7ZFnDYGgcyQ",
     "idLogin": 4
    },
    {
     "email": "Tyrel71@hotmail.com",
     "senha": "e3CxRBCzc2KsGXI",
     "idLogin": 5
    },
    {
     "email": "Frieda.Blick27@hotmail.com",
     "senha": "8W8uZmkTnvcQyIa",
     "idLogin": 6
    },
    {
     "email": "Jordon.Hodkiewicz@gmail.com",
     "senha": "CU751ep_TKda5Kd",
     "idLogin": 7
    },
    {
     "email": "Mabel.Ritchie@yahoo.com",
     "senha": "77DJURfsObWicRI",
     "idLogin": 8
    },
    {
     "email": "Lavinia85@yahoo.com",
     "senha": "i092oFRhDoMMTIE",
     "idLogin": 9
    },
    {
     "email": "Tianna1@gmail.com",
     "senha": "t3_vF2aDPbt4hl4",
     "idLogin": 10
    },
  ];

  try {
    await prisma.tbl_login.createMany({data: loginData});
    console.log(" > tbl_login seeded.")
  } catch (error) {
    console.log(` > tbl_login `, `WAS NOT SEEDED\n`, error);
  }

  const ongData = [
    {
     "descricao": "vitae provident nisi",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "7e40186e-f88b-4fff-a8df-2562466d77d1",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Veum, Casper and Koepp",
     "idLogin": 1,
     "senha": "1"
    },
    {
     "descricao": "commodi consequuntur ut",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "c42921a1-5de4-4444-95d5-e699b13cf56a",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Price - Bailey",
     "idLogin": 2,
     "senha": "1"
    },
    {
     "descricao": "pariatur quam vitae",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "8570d1b4-300f-4b3c-8e16-f51e34332866",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Nolan - Kozey",
     "idLogin": 3,
     "senha": "1"
    },
    {
     "descricao": "incidunt dignissimos vel",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "5db64893-356e-497e-af30-f09dd3b8be50",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Schaden - Jakubowski",
     "idLogin": 4,
     "senha": "1"
    },
    {
     "descricao": "et labore voluptas",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "f874907a-87b0-4d8d-9f47-1141f5a36a60",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Cummings - Cassin",
     "idLogin": 5,
     "senha": "1"
    },
    {
     "descricao": "eligendi velit quia",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "c161236d-e6a6-4c4c-945a-6b5891fe5f97",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Bartell LLC",
     "idLogin": 6,
     "senha": "1"
    },
    {
     "descricao": "sunt fugit autem",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "6d1c1eeb-2aee-45fe-afe6-62331914fe20",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Schaden - Bergnaum",
     "idLogin": 7,
     "senha": "1"
    },
    {
     "descricao": "magni accusamus consectetur",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "a9946117-8079-402d-9614-e53339049e7a",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "D'Amore Group",
     "idLogin": 8,
     "senha": "1"
    },
    {
     "descricao": "voluptas sint placeat",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "0cd47c0c-abb5-469e-8d2c-1fae4828944e",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Emard - Rohan",
     "idLogin": 9,
     "senha": "1"
    },
    {
     "descricao": "quia est cumque",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "3937e9f5-ee03-45ba-841b-7e396b50c3ae",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Dare, Gerhold and Towne",
     "idLogin": 10,
     "senha": "1"
    },
   ];

  ongData.map((ong, index) => {
    ong.dataDeCriacao = new Date().toISOString();
    ong.dataDeFundacao = new Date().toISOString();
  });

  try {
    await prisma.tbl_ong.createMany({data: ongData});
    console.log(" > tbl_ong seeded.")
  } catch (error) {
    console.log(` > tbl_ong `, `WAS NOT SEEDED\n`, error);
  }
}
main();

// [
      //   {
      //     nome: "AACD",
      //     idLogin: 1,
      //     senha: "1",
      //     descricacao: "Orgão que ajuda pessoas",
      //     foto: "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
      //     banner:
      //       "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
      //     historia:
      //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      //     cnpj: "54.421.484/0001-71",
      //     // dataDeFundacao: "1920",
      //     // dataDeCriacao: new Date().toISOString(),
      //     qtdDeMembros: 234871287
      //   },
      //   {
      //     nome: "GreenPeace",
      //     idLogin: 2,
      //     senha: "1",
      //     descricacao: "Orgão que ajuda pessoas",
      //     foto: "https://c8.alamy.com/comp/BHGNH5/greenpeace-banner-at-the-wave-the-biggest-ever-demonstration-on-climate-BHGNH5.jpg",
      //     banner:
      //       "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
      //     historia:
      //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      //     cnpj: "84.703.965/0001-30",
      //     // dataDeCriacao: new Date().toISOString(),
      //     // dataDeFundacao: "2018"
      //     qtdDeMembros: 9
      //   },
      // ],