import { PrismaClient } from "@prisma/client";
import { data } from "./data";
const prisma = new PrismaClient();


export class Seeds {
  async tableEstado(dataEstado) {
    try {
      const result = await prisma.tbl_estado.createMany({data: dataEstado, skipDuplicates: true});
      console.log("> tbl_estado seeded.");
      return result;
    } catch (error) {
      console.log(`> tbl_estado `, `WAS NOT SEEDED\n`, error);
    }
  }

  async tableLogin(loginData) {
    try {
      const result = await prisma.tbl_login.createMany({data: loginData, skipDuplicates: true});
      console.log("> tbl_login seeded.")
      return result;
    } catch (error) {
      console.log(`> tbl_login `, `WAS NOT SEEDED\n`, error);
    }
  }

  async tableOng(ongData) {
    try {
    ongData.map((ong) => {
      ong.dataDeCriacao = new Date().toISOString();
      ong.dataDeFundacao = new Date().toISOString();
    });
  
    const result = await prisma.tbl_ong.createMany({data: ongData, skipDuplicates: true});
      console.log("> tbl_ong seeded.")
    return result;
    } catch (error) {
      console.log(`> tbl_ong `, `WAS NOT SEEDED\n`, error);
    }
  }

  async tableContato(contatoData) {
    console.log(contatoData);
    
    try {
      const result = await prisma.tbl_contato.createMany({
        data: contatoData
          // idOng: 1 ?? contatoData.idOng,
          // email: contatoData.email,
          // numero: contatoData.numero,
          // telefone: contatoData.telefone,

        ,
        // skipDuplicates: true
      });
      console.log("> tbl_contato seeded.");
      return result;
    } catch (error) {
      console.log(`> tbl_contato `, `WAS NOT SEEDED\n`, error);
    }
  }

  async tablePatrocinadores(patrocinadorData) {
    try {
      const result = await prisma.tbl_patrocinadores.createMany({data: patrocinadorData, skipDuplicates: true});
      console.log("> tbl_patrocinadores seeded.");
      return result;
    } catch (error) {
      console.log(`> tbl_patrocinadores `, `WAS NOT SEEDED\n`, error);
    }
  }

  async tableFavoritos(favoritosData) {
    try {
      const result = await prisma.tbl_favoritos.createMany({
        data: favoritosData,
        skipDuplicates: true
      });
      console.log("> tbl_favoritos seeded.")
      return result;
    } catch (error) {
      console.log(`> tbl_favoritos `, `WAS NOT SEEDED\n`, error);
    }
  }
}

async function ExecSeeds() {
  const seeds = new Seeds();
  try {
    seeds.tableLogin(data.login);
    seeds.tableOng(data.ong);
    seeds.tableEstado(data.estado);
    seeds.tablePatrocinadores(data.patrocinadores);

    const contatos = await prisma.tbl_contato.findMany();
    if (contatos.length === 0) {
      seeds.tableContato(data.contato);  
    }

    seeds.tableFavoritos(data.favoritos);
    
  } catch (error) {
    throw new Error(error);
  }
}

ExecSeeds();



