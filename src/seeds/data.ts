const data = {
  estado: [
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
  login: [
    {
      email: "aacd@ong.com",
      senha: "123456789",
    },
    {
      email: "greenpeace@ong.com",
      senha: "123456789",
    },
    {
      email: "vivario@ong.com",
      senha: "123456789",
    },
    {
      email: "sosmataatlantica@ong.com",
      senha: "123456789",
    },
    {
      email: "israel@gmail.com",
      senha: "123456789",
    },
    {
      email: "vandao@email.com",
      senha: "123456789",
    },
    {
      email: "guilherme@email.com",
      senha: "123456789",
    },
    {
      email: "carlos@email.com",
      senha: "123456789",
    },
    {
      email: "kevin@email.com",
      senha: "123456789",
    },
    {
      email: "filipi@email.com",
      senha: "123456789",
    },
    {
      email: "amada@ong.com",
      senha: "123456789",
    },
    {
      email: "pas@ong.com",
      senha: "123456789",
    },
    {
      email: "sbsc@ong.com",
      senha: "123456789",
    },
    {
      email: "lbv@ong.com",
      senha: "123456789",
    },
  ],
  usuario: [
    {
      idLogin: 5,
      nome: "Israel",
      foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Gnome-stock_person.svg/1024px-Gnome-stock_person.svg.png",
      banner:
        "https://www.wayzatacommunitychurch.org/wp-content/uploads/2017/10/helping-hands-banner-1030x429.jpg",
      curriculo: "Eu faço programas",
      dataDeNascimento: new Date("2000-07-09"),
    },
    {
      idLogin: 6,
      nome: "Vandao",
      foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Gnome-stock_person.svg/1024px-Gnome-stock_person.svg.png",
      banner:
        "https://www.wayzatacommunitychurch.org/wp-content/uploads/2017/10/helping-hands-banner-1030x429.jpg",
      curriculo: "Eu faço programas",
      dataDeNascimento: new Date("2001-10-05"),
    },
    {
      idLogin: 7,
      nome: "Guilherme",
      foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Gnome-stock_person.svg/1024px-Gnome-stock_person.svg.png",
      banner:
        "https://www.wayzatacommunitychurch.org/wp-content/uploads/2017/10/helping-hands-banner-1030x429.jpg",
      curriculo: "Eu faço programas",
      dataDeNascimento: new Date("2002-11-09"),
    },
    {
      idLogin: 8,
      nome: "Carlos",
      foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Gnome-stock_person.svg/1024px-Gnome-stock_person.svg.png",
      banner:
        "https://www.wayzatacommunitychurch.org/wp-content/uploads/2017/10/helping-hands-banner-1030x429.jpg",
      curriculo: "Eu faço programas",
      dataDeNascimento: new Date("2003-12-09"),
    },
    {
      idLogin: 9,
      nome: "Kevin",
      foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Gnome-stock_person.svg/1024px-Gnome-stock_person.svg.png",
      banner:
        "https://www.wayzatacommunitychurch.org/wp-content/uploads/2017/10/helping-hands-banner-1030x429.jpg",
      curriculo: "Eu faço programas",
      dataDeNascimento: new Date("2005-05-08"),
    },
    {
      idLogin: 10,
      nome: "Filipi",
      foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Gnome-stock_person.svg/1024px-Gnome-stock_person.svg.png",
      banner:
        "https://www.wayzatacommunitychurch.org/wp-content/uploads/2017/10/helping-hands-banner-1030x429.jpg",
      curriculo: "Eu faço programas",
      dataDeNascimento: new Date("2006-06-09"),
    },
  ],
  ong: [
    {
      nome: "AACD",
      idLogin: 1,
      descricao: "Orgão que ajuda pessoas",
      foto: "https://jornalistainclusivo.com/wp-content/uploads/2020/11/20171016-teleton-1170x650.jpg",
      banner:
        "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
      historia:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      cnpj: "54.421.484/0001-71",
      dataDeFundacao: "1920",
      dataDeCriacao: new Date().toISOString(),
      qtdDeMembros: 234871287,
    },
    {
      nome: "GreenPeace",
      idLogin: 2,
      descricao: "Orgão que ajuda pessoas",
      foto: "https://c8.alamy.com/comp/BHGNH5/greenpeace-banner-at-the-wave-the-biggest-ever-demonstration-on-climate-BHGNH5.jpg",
      banner:
        "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
      historia:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      cnpj: "84.703.965/0001-30",
      dataDeFundacao: "2018",
      dataDeCriacao: new Date().toISOString(),
      qtdDeMembros: 9,
    },
    {
      nome: "Viva Rio",
      idLogin: 3,
      descricao:
        "Viva Rio, a nongovernmental organization based in Rio de Janeiro, Brazil, was founded in December 1993 to combat the growing violence in the city.",
      foto: "https://publisher-publish.s3.eu-central-1.amazonaws.com/pb-brasil247/swp/jtjeq9/media/20190521000512_bd7c8eaf73f435b6960ff07e09d2364cd1fc31617877533ef6fe6003868f2df6.jpeg",
      banner:
        "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
      historia:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      cnpj: "43.505.901/0001-48",
      dataDeFundacao: "1993",
      dataDeCriacao: new Date().toISOString(),
      qtdDeMembros: 124,
    },
    {
      nome: "Fundação SOS Mata Atlântica",
      idLogin: 4,
      descricao: "Orgão que ajuda pessoas",
      foto: "https://www.infoescola.com/wp-content/uploads/2010/01/sos-mata-atlantica.jpg",
      banner:
        "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
      historia:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      cnpj: "99.686.224/0001-66",
      dataDeFundacao: "1986",
      dataDeCriacao: new Date().toISOString(),
      qtdDeMembros: 43215,
    },
    {
      nome: "AMADA",
      idLogin: 11,
      descricao: "Orgão que ajuda pessoas",
      foto: "https://amada-helena.org/wp-content/uploads/2019/05/logo150.png",
      banner:
        "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
      historia:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      cnpj: "51.893.161/0001-92",
      dataDeFundacao: "2018",
      dataDeCriacao: new Date().toISOString(),
      qtdDeMembros: 34244,
      numeroDeSeguidores: 12,
    },
    {
      nome: "PAS",
      idLogin: 12,
      descricao: "Orgão que ajuda pessoas",
      foto: "https://static.wixstatic.com/media/b1c9ff_9528c93b82a14f3e9803c4980e7e25dd.gif",
      banner:
        "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
      historia:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      cnpj: "55.148.075/0001-06",
      dataDeFundacao: "2013",
      dataDeCriacao: new Date().toISOString(),
      qtdDeMembros: 123,
    },
    {
      nome: "Sociedade Benificente de São Camilo", 
      idLogin: 13,
      descricao: "Orgão que ajuda pessoas",
      foto: "https://www.hospitalsaocamilosp.org.br/static/media/logodefault.d6ca4751.png",
      banner:
        "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
      historia:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      cnpj: "23.850.342/0001-04",
      dataDeFundacao: "1979",
      dataDeCriacao: new Date().toISOString(),
      qtdDeMembros: 5675673,
    },
    {
      nome: "Legião Boa Vontade",
      idLogin: 14,
      descricao: "Orgão que ajuda pessoas",
      foto: "https://www.lbv.org/sites/all/themes/lbv/img/logo/lbv_1_Brasil_3.png",
      banner:
        "https://stevenagesportingfutures.co.uk/wp-content/uploads/2016/10/festival-7-300x1080-banner.jpg",
      historia:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      cnpj: "78.574.729/0001-69",
      dataDeFundacao: "1950",
      dataDeCriacao: new Date().toISOString(),
      qtdDeMembros: 12348,
    },
  ],
  contato: [
    {
      idLogin: 1,
      numero: "(11) 9000-0001",
      telefone: "0800 000 0001",
    },
    {
      idLogin: 2,
      numero: "(11) 9000-0002",
      telefone: "0800 000 0002",
    },
    {
      idLogin: 3,
      numero: "(11) 9000-0003",
      telefone: "0800 000 0003",
    },
    {
      idLogin: 4,
      numero: "(11) 9000-0004",
      telefone: "0800 000 0004",
    },
    {
      idLogin: 11,
      numero: "(11) 9000-0005",
      telefone: "0800 000 0005",
    },
    {
      idLogin: 12,
      numero: "(11) 9000-0006",
      telefone: "0800 000 0006",
    },
    {
      idLogin: 13,
      numero: "(11) 9000-0007",
      telefone: "0800 000 0007",
    },
    {
      idLogin: 14,
      numero: "(11) 9000-0008",
      telefone: "0800 000 0008",
    },
  ],
  patrocinadores: [
    {
      nome: "Coca-Cola",
      url: "https://www.coca-cola.com/",
      titulo: "https://logodownload.org/wp-content/uploads/2014/04/coca-cola-logo-1-1.png",
      referencia: "https://logodownload.org/wp-content/uploads/2014/04/coca-cola-logo-1-1.png",
    },
    {
      nome: "Petrobras",
      url: "https://www.petrobras.com.br/",
      titulo: "https://logospng.org/download/petrobras/logo-petrobras-escudo-2048.png",
      referencia: "https://logospng.org/download/petrobras/logo-petrobras-escudo-2048.png",
    },
    {
      nome: "Santander",
      url: "https://www.santander.com.br/",
      titulo: "https://logospng.org/download/santander/logo-santander-512.png",
      referencia: "https://logospng.org/download/santander/logo-santander-512.png",
    },
    {
      nome: "Uber",
      url: "https://www.uber.com.br/",
      titulo: "https://logospng.org/download/uber/logo-uber-preta-1024.png",
      referencia: "https://logospng.org/download/uber/logo-uber-preta-1024.png",
    },
    {
      nome: "iFood",
      url: "https://www.ifood.com.br/",
      titulo: "https://static-images.ifood.com.br/image/upload/t_high/logosgde/15def965-6971-41c7-9aa1-25f71d40f45f_CAFET_SASCO.png",
      referencia: "https://static-images.ifood.com.br/image/upload/t_high/logosgde/15def965-6971-41c7-9aa1-25f71d40f45f_CAFET_SASCO.png",
    },
  ],
  favoritos: [
    {
      idOng: 1,
      idUsuario: 1,
      favoritado: true,
    },
    {
      idOng: 1,
      idUsuario: 2,
      favoritado: true,
    },
    {
      idOng: 1,
      idUsuario: 3,
      favoritado: true,
    },
    {
      idOng: 1,
      idUsuario: 4,
      favoritado: true,
    },
    {
      idOng: 1,
      idUsuario: 5,
      favoritado: true,
    },
    {
      idOng: 1,
      idUsuario: 6,
      favoritado: true,
    },
    {
      idOng: 2,
      idUsuario: 5,
      favoritado: true,
    },
    {
      idOng: 3,
      idUsuario: 5,
      favoritado: true,
    },
    {
      idOng: 4,
      idUsuario: 5,
      favoritado: true,
    },
  ],
  categorias: [
    {
      nome: "Animais",
    },
    {
      nome: "Meio-Ambiente",
    },
    {
      nome: "Educação",
    },
    {
      nome: "Saúde",
    },
    {
      nome: "Arte",
    },
    {
      nome: "Cultura",
    },
    {
      nome: "Caridade",
    },
    {
      nome: "Crianças",
    },
    {
      nome: "Jovens",
    },
    {
      nome: "Idosos",
    },
  ],
  categoriasDasOngs: [
    
  ],
  meiosdeDoacao: [
    {
      idOng: 1,
      site: "https//www.aacd.com.br/",
      pix: "54.421.484/0001-71",
      tipoPix: "cpnj"
    },
    {
      idOng: 2,
      site: "https//www.greenpeace.com.br/",
      pix: "84.703.965/0001-30",
      tipoPix: "cnpj",
    },
    {
      idOng: 3,
      site: "https//www.vivario.com.br/",
      pix: "0303030303030",
    },
  ],
  dadosBancarios: [
    {
      idOng: 1,
      banco: "Banco do Brasil",
      agencia: "0001",
      conta: "0001",
      tipo: "Conta Corrente"
    },
    {
      idOng: 2,
      banco: "Banco do Brasil",
      agencia: "0002",
      conta: "0002",
      tipo: "Conta Corrente"
    },
    {
      idOng: 3,
      banco: "Santander",
      agencia: "0003",
      conta: "0003",
      tipo: "Conta Corrente"
    },
    {
      idOng: 4,
      banco: "Nubank",
      agencia: "0004",
      conta: "0004",
      tipo: "Conta Corrente"
    },
  ],
  estadoDasOngs: [
    {
      idOng: 1,
      idEstado: 1,
    },
  ],
  reacoes: [
    {
      emoji: "coração",
    },
    {
      emoji: "feliz",
    },
    {
      emoji: "triste",
    },
  ],
  enderecos: [
    {
      idLogin: 1,
      cep: "329482394",
      bairro: "Jardim Carlos",
      numero: 1154,
      rua: "Rua Fulano de Tal",
      municipio: "Jardim Silveira",
      idEstado: 1,
      complemento: "Casa 2"
    },
  ],
};

function formatData() {
  data.categorias.map((_, catIndex) => {
    data.categoriasDasOngs.push({
      idOng: catIndex + 1,
      idCategorias: catIndex + 1,
    });
    data.categoriasDasOngs.push({
      idOng: catIndex + 1,
      idCategorias: 8,
    });
  });
  
  data.categoriasDasOngs.push(
    {
      idOng: 2,
      idCategorias: 1,
    },
    {
      idOng: 2,
      idCategorias: 7,
    },
    {
      idOng: 2,
      idCategorias: 3,
    },
    {
      idOng: 2,
      idCategorias: 4,
    },
    {
      idOng: 2,
      idCategorias: 5,
    },
    {
      idOng: 2,
      idCategorias: 6,
    },
  );
  
  for(let iTwo = 0; iTwo < data.ong.length; iTwo++) {
    for(let i = 0; i < 4; i++) {
      let number = Math.floor(Math.random() * 10 + i);
      number > 26? number = 26 : "";
    
      data.estadoDasOngs.push({
        idOng: iTwo + 1,
        idEstado: number,
      });
    }
  }
  
  const adress = data.enderecos[0];
  for (let i = 0; i < data.ong.length; i++) {
    data.enderecos.push({
      idLogin: i + 1,
      cep: adress.cep.concat(String(i+1)),
      bairro: adress.bairro.concat(String(i+1)),
      numero: Math.trunc(( Math.random() * 100 ) + ( Math.random() * 100 )),
      rua: adress.rua.concat(String(i+1)),
      municipio: adress.municipio.concat(String(i+1)),
      idEstado: Math.trunc(( Math.random() * 26 ) + i),
      complemento: adress.complemento.concat(String(i+1)),
    });
  }
}

formatData();

export { data };