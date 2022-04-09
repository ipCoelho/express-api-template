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
}

const seeds = new Seeds();
seeds.tableEstado(data.estado);
seeds.tableLogin(data.login);
seeds.tableOng(data.ong);
