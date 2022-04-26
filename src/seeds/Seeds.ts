import { PrismaClient } from "@prisma/client";
import { data } from "./data";
const prisma = new PrismaClient();

export class Seeds {
  async tableEstado(dataEstado) {
    try {
      const result = await prisma.tbl_estado.createMany({
        data: dataEstado,
        skipDuplicates: true,
      });
      console.log("> tbl_estado seeded.");
      return result;
    } catch (error) {
      console.log(`> tbl_estado `, `WAS NOT SEEDED\n`, error);
    }
  }

  async tableLogin(loginData) {
    try {
      const result = await prisma.tbl_login.createMany({
        data: loginData,
        skipDuplicates: true,
      });
      console.log("> tbl_login seeded.");
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

      const result = await prisma.tbl_ong.createMany({
        data: ongData,
        skipDuplicates: true,
      });
      console.log("> tbl_ong seeded.");
      return result;
    } catch (error) {
      console.log(`> tbl_ong `, `WAS NOT SEEDED\n`, error);
    }
  }

  async tableContato(contatoData) {
    try {
      const result = await prisma.tbl_contato.createMany({
        data: contatoData,
      });
      console.log("> tbl_contato seeded.");
      return result;
    } catch (error) {
      console.log(`> tbl_contato `, `WAS NOT SEEDED\n`, error);
    }
  }

  async tablePatrocinadores(patrocinadorData) {
    try {
      const result = await prisma.tbl_patrocinadores.createMany({
        data: patrocinadorData,
        skipDuplicates: true,
      });
      console.log("> tbl_patrocinadores seeded.");
      return result;
    } catch (error) {
      console.log(`> tbl_patrocinadores `, `WAS NOT SEEDED\n`, error);
    }
  }

  async tableUsuario(usuarioData) {
    try {
      const result = await prisma.tbl_usuario.createMany({
        data: usuarioData,
        skipDuplicates: true,
      });
      console.log("> tbl_usuario seeded.");
      return result;
    } catch (error) {
      console.log(`> tbl_usuario `, `WAS NOT SEEDED\n`, error);
    }
  }

  async tableFavoritos(favoritosData) {
    try {
      const result = await prisma.tbl_favoritos.createMany({
        data: favoritosData,
        skipDuplicates: true,
      });
      console.log("> tbl_favoritos seeded.");
      return result;
    } catch (error) {
      console.log(`> tbl_favoritos `, `WAS NOT SEEDED\n`, error);
    }
  }

  async tableCategoria(categoriaData) {
    try {
      const result = await prisma.tbl_categorias.createMany({
        data: categoriaData,
        skipDuplicates: true,
      });
      console.log("> tbl_categoria seeded.");
      return result;
    } catch (error) {
      console.log(`> tbl_categoria `, `WAS NOT SEEDED\n`, error);
    }
  }
}

async function ExecSeeds() {
  const seeds = new Seeds();
  try {
    await seeds.tableLogin(data.login);
    await seeds.tableOng(data.ong);
    await seeds.tableUsuario(data.usuario);
    await seeds.tableEstado(data.estado);
    await seeds.tablePatrocinadores(data.patrocinadores);
    await seeds.tableContato(data.contato);
    await seeds.tableFavoritos(data.favoritos);
    await seeds.tableCategoria(data.categorias);
  } catch (error) {
    throw new Error(error);
  }
}

ExecSeeds();
