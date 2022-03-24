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
  const loginData = [
    {
     "email": "Ruthie_Berge@gmail.com",
     "senha": "3pdmkkzVVikKxZu",
     "idLogin": "1"
    },
    {
     "email": "Lucas33@gmail.com",
     "senha": "8nu9awOSaO8ynCf",
     "idLogin": "2"
    },
    {
     "email": "Nels.Hills@gmail.com",
     "senha": "Q6WLiNY46d1rwik",
     "idLogin": "3"
    },
    {
     "email": "Letha_Paucek52@yahoo.com",
     "senha": "1iDe7ZFnDYGgcyQ",
     "idLogin": "4"
    },
    {
     "email": "Tyrel71@hotmail.com",
     "senha": "e3CxRBCzc2KsGXI",
     "idLogin": "5"
    },
    {
     "email": "Frieda.Blick27@hotmail.com",
     "senha": "8W8uZmkTnvcQyIa",
     "idLogin": "6"
    },
    {
     "email": "Jordon.Hodkiewicz@gmail.com",
     "senha": "CU751ep_TKda5Kd",
     "idLogin": "7"
    },
    {
     "email": "Mabel.Ritchie@yahoo.com",
     "senha": "77DJURfsObWicRI",
     "idLogin": "8"
    },
    {
     "email": "Lavinia85@yahoo.com",
     "senha": "i092oFRhDoMMTIE",
     "idLogin": "9"
    },
    {
     "email": "Tianna1@gmail.com",
     "senha": "t3_vF2aDPbt4hl4",
     "idLogin": "10"
    },
    {
     "email": "Reece8@hotmail.com",
     "senha": "BeHVR0Ci5IcFKw3",
     "idLogin": "11"
    },
    {
     "email": "Naomie26@hotmail.com",
     "senha": "LFElzLhlaMYqssL",
     "idLogin": "12"
    },
    {
     "email": "Zion49@yahoo.com",
     "senha": "mG25SLwoxugYVFe",
     "idLogin": "13"
    },
    {
     "email": "Raina0@gmail.com",
     "senha": "izIWWLSiUGjMj3p",
     "idLogin": "14"
    },
    {
     "email": "Broderick.Cartwright37@hotmail.com",
     "senha": "tZdXi4s8CJs8Jfh",
     "idLogin": "15"
    },
    {
     "email": "Reyes.Ryan68@hotmail.com",
     "senha": "td0UDR61O06Wr1y",
     "idLogin": "16"
    },
    {
     "email": "Gennaro.Shanahan52@gmail.com",
     "senha": "AhzCUxm1l6h02kg",
     "idLogin": "17"
    },
    {
     "email": "Annetta.Hodkiewicz74@hotmail.com",
     "senha": "CyV3FMNFW01rmXv",
     "idLogin": "18"
    },
    {
     "email": "Braeden.Kuhlman@gmail.com",
     "senha": "kIqLdAjfg1i7Gp_",
     "idLogin": "19"
    },
    {
     "email": "Marianna_Lebsack@yahoo.com",
     "senha": "viiJar_DzcRcRNY",
     "idLogin": "20"
    },
    {
     "email": "Mavis71@gmail.com",
     "senha": "F3WzBJwVNpY9xqj",
     "idLogin": "21"
    },
    {
     "email": "Edwin_Mueller@gmail.com",
     "senha": "x48IU6qs5edlz9d",
     "idLogin": "22"
    },
    {
     "email": "Shania.Zboncak@hotmail.com",
     "senha": "NcaxB0pX3swKyYu",
     "idLogin": "23"
    },
    {
     "email": "Junior13@yahoo.com",
     "senha": "jqcAtQLY1HH3MSD",
     "idLogin": "24"
    },
    {
     "email": "Ofelia_Gorczany14@hotmail.com",
     "senha": "2x7LOMhOyisXZFX",
     "idLogin": "25"
    },
    {
     "email": "Jaqueline72@gmail.com",
     "senha": "Guug87BRo3t7dh4",
     "idLogin": "26"
    },
    {
     "email": "Aurore_Hickle61@gmail.com",
     "senha": "0X87FGe3AGmzbsv",
     "idLogin": "27"
    },
    {
     "email": "Mable86@yahoo.com",
     "senha": "CUJSaxZbZeavKva",
     "idLogin": "28"
    },
    {
     "email": "Dwight.Jacobson79@yahoo.com",
     "senha": "xSCqifTmXibzH3b",
     "idLogin": "29"
    },
    {
     "email": "Francisca_Hegmann@yahoo.com",
     "senha": "yTLAc7EpAP7aZdG",
     "idLogin": "30"
    },
    {
     "email": "Ryan.Crist62@gmail.com",
     "senha": "x8wMlGjo96nkcyb",
     "idLogin": "31"
    },
    {
     "email": "Juston.Auer@gmail.com",
     "senha": "o0CC0sDAiaD9Udn",
     "idLogin": "32"
    },
    {
     "email": "Lilliana27@yahoo.com",
     "senha": "43WVOXvQvIfWFfE",
     "idLogin": "33"
    },
    {
     "email": "Scot_Weissnat34@hotmail.com",
     "senha": "U1vfN2Nvv3c72Pv",
     "idLogin": "34"
    },
    {
     "email": "Yvonne64@gmail.com",
     "senha": "hZHDN8xHoBiw8KK",
     "idLogin": "35"
    },
    {
     "email": "Cleveland.Sipes42@hotmail.com",
     "senha": "I2cFgwHx2SukwI7",
     "idLogin": "36"
    },
    {
     "email": "Enrique66@yahoo.com",
     "senha": "1AEBqv148lPkIId",
     "idLogin": "37"
    },
    {
     "email": "Serena_Zulauf74@yahoo.com",
     "senha": "Ru038ZQKTVV6Xna",
     "idLogin": "38"
    },
    {
     "email": "Santa_Block53@yahoo.com",
     "senha": "YybFZezu9pt0Vkd",
     "idLogin": "39"
    },
    {
     "email": "Ezra9@yahoo.com",
     "senha": "Lpm8xHARMvFAXaE",
     "idLogin": "40"
    },
    {
     "email": "Randall_Will40@gmail.com",
     "senha": "BoELMSD2dBlynw_",
     "idLogin": "41"
    },
    {
     "email": "Keven97@yahoo.com",
     "senha": "4xGHTX7rXtWJyvc",
     "idLogin": "42"
    },
    {
     "email": "Jovany_Jacobson@gmail.com",
     "senha": "h4BcOnSA_c3Ufuk",
     "idLogin": "43"
    },
    {
     "email": "Keshawn8@gmail.com",
     "senha": "cUSPtwWaPV1JwMH",
     "idLogin": "44"
    },
    {
     "email": "Jerald_Larson34@gmail.com",
     "senha": "28ip0YnlthTq9kf",
     "idLogin": "45"
    },
    {
     "email": "Jamaal.Schimmel43@hotmail.com",
     "senha": "kspBWkQht3FBrIf",
     "idLogin": "46"
    },
    {
     "email": "Hal_Larkin65@gmail.com",
     "senha": "_fSV7wN46PVyZI1",
     "idLogin": "47"
    },
    {
     "email": "Vidal17@gmail.com",
     "senha": "il16imgsUey2dDP",
     "idLogin": "48"
    },
    {
     "email": "Price72@yahoo.com",
     "senha": "8g9jWpl4eThCv8V",
     "idLogin": "49"
    },
    {
     "email": "Alex_Oberbrunner@yahoo.com",
     "senha": "pyOcxg1WfYrjiYm",
     "idLogin": "50"
    }
  ];
  loginData.map((login, index) => {
    login.idLogin = index + 1;
  });
  try {
    await prisma.tbl_login.deleteMany({});
    await prisma.tbl_login.createMany({
      data: loginData,
    });
  } catch (error) {
    !error
      ? console.log(" > tbl_login seeded.")
      : console.log(` > tbl_login `, `WAS NOT SEEDED\n`, error);
  }

  // tbl_ongs
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
     "idLogin": "1",
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
     "idLogin": "2",
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
     "idLogin": "3",
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
     "idLogin": "4",
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
     "idLogin": "5",
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
     "idLogin": "6",
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
     "idLogin": "7",
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
     "idLogin": "8",
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
     "idLogin": "9",
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
     "idLogin": "10",
     "senha": "1"
    },
    {
     "descricao": "aperiam mollitia sint",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "3373e241-c785-4d72-a48c-83fecc90489f",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Paucek - Lind",
     "idLogin": "11",
     "senha": "1"
    },
    {
     "descricao": "iste deleniti in",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "fca0aa64-c985-4625-bf40-3ff659e39575",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Collins Inc",
     "idLogin": "12",
     "senha": "1"
    },
    {
     "descricao": "omnis at officiis",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "3442c134-fcd0-41d7-b68e-b919f69baf26",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "McClure and Sons",
     "idLogin": "13",
     "senha": "1"
    },
    {
     "descricao": "qui nam et",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "c821b41d-fbe9-47fe-9645-0afb47a0e7dc",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Stamm Inc",
     "idLogin": "14",
     "senha": "1"
    },
    {
     "descricao": "impedit aliquid vero",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "19c937c6-93f1-41bd-a3c8-31b7caef1999",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Nader - Robel",
     "idLogin": "15",
     "senha": "1"
    },
    {
     "descricao": "aperiam nulla tempore",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "b760e91b-3a85-475f-9754-a9281e867641",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Halvorson Group",
     "idLogin": "16",
     "senha": "1"
    },
    {
     "descricao": "enim porro a",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "800e7576-afdb-4c1c-b1b0-52343563b085",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Bogisich - Vandervort",
     "idLogin": "17",
     "senha": "1"
    },
    {
     "descricao": "quis magnam aliquam",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "25537555-d971-47d7-82ae-c72e63ddf465",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Borer and Sons",
     "idLogin": "18",
     "senha": "1"
    },
    {
     "descricao": "corporis eum atque",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "69113990-35f0-47c4-84df-3b181e8bf136",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Maggio - Torphy",
     "idLogin": "19",
     "senha": "1"
    },
    {
     "descricao": "quod quae alias",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "fc0078c0-30a1-4b60-8c0c-2824a798eff4",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Boyer, Rippin and Goyette",
     "idLogin": "20",
     "senha": "1"
    },
    {
     "descricao": "ea reprehenderit ipsum",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "13e3c7ee-07d2-49de-aacf-5de31a17266a",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Boyer LLC",
     "idLogin": "21",
     "senha": "1"
    },
    {
     "descricao": "molestias aperiam quisquam",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "17ef8059-5f7d-42ed-8ca9-359aa15e32ab",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Medhurst, Macejkovic and Dach",
     "idLogin": "22",
     "senha": "1"
    },
    {
     "descricao": "officiis non non",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "fdfa780f-4b5b-4c15-8174-b253bc02aaff",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Price Inc",
     "idLogin": "23",
     "senha": "1"
    },
    {
     "descricao": "ipsum perspiciatis beatae",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "f5a72692-d856-4614-8f1d-93320d7be060",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Schuppe, Waelchi and Schamberger",
     "idLogin": "24",
     "senha": "1"
    },
    {
     "descricao": "dolore dolorem cupiditate",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "c39f670a-9218-49a2-83b2-67db80f6bc58",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Terry and Sons",
     "idLogin": "25",
     "senha": "1"
    },
    {
     "descricao": "expedita sed nostrum",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "06eef36b-9635-43db-8205-9303a72b72f1",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Adams - Kertzmann",
     "idLogin": "26",
     "senha": "1"
    },
    {
     "descricao": "qui laudantium iusto",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "c45d261d-5238-4512-9409-9615e88140d5",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Jacobson, Stiedemann and Luettgen",
     "idLogin": "27",
     "senha": "1"
    },
    {
     "descricao": "saepe iure necessitatibus",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "8ed26590-3ecb-478c-b3c5-d6c2dd706386",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Cummerata - Hahn",
     "idLogin": "28",
     "senha": "1"
    },
    {
     "descricao": "sed voluptas sit",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "2ec6fc8a-e00d-4679-9276-084d48b1a23a",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Moore Group",
     "idLogin": "29",
     "senha": "1"
    },
    {
     "descricao": "quo expedita accusantium",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "a1f96270-370a-4680-b0ff-f1a8af55bdf1",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Maggio - Toy",
     "idLogin": "30",
     "senha": "1"
    },
    {
     "descricao": "veniam omnis tenetur",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "2bf34fc2-f53e-424f-9fbe-960091d6c275",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Feest, Koelpin and Schowalter",
     "idLogin": "31",
     "senha": "1"
    },
    {
     "descricao": "ea consequatur quo",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "a6b09203-fb81-40b3-a171-c1daa94311e9",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Will, Howe and Renner",
     "idLogin": "32",
     "senha": "1"
    },
    {
     "descricao": "reprehenderit amet nihil",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "a3291f91-4b94-43bd-9234-c7a4f232899e",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Shanahan, Gibson and Johnston",
     "idLogin": "33",
     "senha": "1"
    },
    {
     "descricao": "quis dicta distinctio",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "914261e9-6884-40ed-9883-2e43ef57f078",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Howell, Abshire and Sipes",
     "idLogin": "34",
     "senha": "1"
    },
    {
     "descricao": "enim ex autem",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "41a164c0-cbb7-4f2c-9b11-72249e270a72",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Stamm - Kirlin",
     "idLogin": "35",
     "senha": "1"
    },
    {
     "descricao": "amet nobis voluptatum",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "848f8225-d523-4a4a-8065-d98d0a49d254",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Reichert - Bogisich",
     "idLogin": "36",
     "senha": "1"
    },
    {
     "descricao": "ab quia at",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "a685c984-fe1d-4d16-b4a6-937a34638f01",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Okuneva and Sons",
     "idLogin": "37",
     "senha": "1"
    },
    {
     "descricao": "sed dolore consequatur",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "530f711d-61fe-47a6-9564-0890c4912038",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Schaefer, Christiansen and Mraz",
     "idLogin": "38",
     "senha": "1"
    },
    {
     "descricao": "quo sint consequuntur",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "0cee5233-48dd-45e4-b699-fd109df056ec",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Cassin Group",
     "idLogin": "39",
     "senha": "1"
    },
    {
     "descricao": "eaque unde et",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "2e4f7d0a-65d1-4ae7-8e5a-fc88bb78b7ba",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Russel - Wiza",
     "idLogin": "40",
     "senha": "1"
    },
    {
     "descricao": "nihil aut ut",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "983f904a-2e03-4b00-ad1f-9316068a38fb",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Gutmann, Mills and McClure",
     "idLogin": "41",
     "senha": "1"
    },
    {
     "descricao": "blanditiis quis iste",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "661b28d7-0be6-40d1-b309-2ebbb80e3950",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Abshire, Barrows and Crist",
     "idLogin": "42",
     "senha": "1"
    },
    {
     "descricao": "illo perspiciatis non",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "6de00ca8-b8dd-4084-a9bd-6ca342e09dc1",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Rice - Bechtelar",
     "idLogin": "43",
     "senha": "1"
    },
    {
     "descricao": "et qui qui",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "b82b3e48-3dfa-403d-b71b-285ae7e80cfa",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "O'Kon Inc",
     "idLogin": "44",
     "senha": "1"
    },
    {
     "descricao": "nam eum aut",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "4a826712-0965-430e-8267-37b033b8335e",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Harber, Johnson and Goldner",
     "idLogin": "45",
     "senha": "1"
    },
    {
     "descricao": "quia sed veritatis",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "3eeed342-520c-4c87-b984-1ed557810d49",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Von - Hickle",
     "idLogin": "46",
     "senha": "1"
    },
    {
     "descricao": "non quidem culpa",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "26a648b1-ad96-4a82-9501-d07228c3b79a",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Swift Group",
     "idLogin": "47",
     "senha": "1"
    },
    {
     "descricao": "quia rerum dolores",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "176bbceb-4c20-4d3c-83c3-a4e5af850bdb",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Kassulke, Johnson and Farrell",
     "idLogin": "48",
     "senha": "1"
    },
    {
     "descricao": "delectus aut adipisci",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "e3cc8869-f70e-4b01-a9d5-674727bde41a",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "VonRueden LLC",
     "idLogin": "49",
     "senha": "1"
    },
    {
     "descricao": "dolorum eligendi sed",
     "foto": "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
     "banner": "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
     "historia": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
     "cnpj": "67363742-0643-4626-81d1-6feddfe108af",
     "qtdDeMembros": 234871287,
     "dataDeFundacao": "2008-12-31 18:20:00",
     "dataDeCriacao": "2008-12-31 18:20:00",
     "nome": "Kertzmann, Yundt and Leannon",
     "idLogin": "50",
     "senha": "1"
    }
   ];

  ongData.map((ong, index) => {
    ong.dataDeCriacao = new Date().toISOString();
    ong.dataDeFundacao = new Date().toISOString();
    ong.idLogin = index + 1;
  });

  try {
    await prisma.tbl_ong.deleteMany({});
    await prisma.tbl_ong.createMany({
      data: ongData
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
    });
  } catch (error) {
    !error
      ? console.log(" > tbl_ong seeded.")
      : console.log(` > tbl_ong `, `WAS NOT SEEDED\n`, error);
  }
}
main();
