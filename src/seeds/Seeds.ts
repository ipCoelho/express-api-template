import { PrismaClient } from "@prisma/client";
import { data } from "./data";
const prisma = new PrismaClient();


export class Seeds {
  async tableEstado(dataEstado) {
    try {
      await prisma.tbl_estado.createMany({data: dataEstado});
      console.log("> tbl_estado seeded.");
    } catch (error) {
      console.log(`> tbl_estado `, `WAS NOT SEEDED\n`, error);
    }
  }

  async tableLogin(loginData) {
    try {
      await prisma.tbl_login.createMany({data: loginData});
      console.log("> tbl_login seeded.")
    } catch (error) {
      console.log(`> tbl_login `, `WAS NOT SEEDED\n`, error);
    }
  }

  async tableOng(ongData) {
    ongData.map((ong) => {
      ong.dataDeCriacao = new Date().toISOString();
      ong.dataDeFundacao = new Date().toISOString();
    });
  
    try {
      await prisma.tbl_ong.createMany({data: ongData});
      console.log("> tbl_ong seeded.")
    } catch (error) {
      console.log(`> tbl_ong `, `WAS NOT SEEDED\n`, error);
    }
  }

  async tableContato(contatoData) {
    try {
      await prisma.tbl_contato.createMany({data: contatoData});
      console.log("> tbl_contato seeded.")
    } catch (error) {
      console.log(`> tbl_contato `, `WAS NOT SEEDED\n`, error);
    }
  }

  async tablePatrocinadores(patrocinadorData) {
    try {
      await prisma.tbl_patrocinadores.createMany({data: patrocinadorData});
      console.log("> tbl_patrocinadores seeded.")
    } catch (error) {
      console.log(`> tbl_patrocinadores `, `WAS NOT SEEDED\n`, error);
    }
  }
}

const seeds = new Seeds();
seeds.tableEstado(data.estado);
seeds.tableLogin(data.login);
seeds.tableOng(data.ongReal);
seeds.tableContato(data.contato);
seeds.tablePatrocinadores(data.patrocinadores);
