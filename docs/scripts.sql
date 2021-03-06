-- MySQL Script generated by MySQL Workbench
-- Wed Mar 16 16:13:40 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`tbl_login`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tbl_login` ;

CREATE TABLE IF NOT EXISTS `mydb`.`tbl_login` (
  `idLogin` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(80) NOT NULL,
  `senha` VARCHAR(80) NOT NULL,
  PRIMARY KEY (`idLogin`),
  UNIQUE INDEX `idtbl_login_UNIQUE` (`idLogin` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tbl_ong`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tbl_ong` ;

CREATE TABLE IF NOT EXISTS `mydb`.`tbl_ong` (
  `idOng` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `senha` VARCHAR(80) NOT NULL,
  `descricacao` TEXT NULL,
  `numeroDeSeguidores` DOUBLE NULL,
  `dataDeCriacao` DATE NOT NULL,
  `cnpj` VARCHAR(25) NOT NULL,
  `foto` VARCHAR(80) NULL,
  `banner` VARCHAR(80) NULL,
  `historia` TEXT NULL,
  `qtdDeMembros` INT NULL,
  `dataDeFundacao` DATE NULL,
  `idLogin` INT NOT NULL,
  PRIMARY KEY (`idOng`),
  UNIQUE INDEX `idOng_UNIQUE` (`idOng` ASC) VISIBLE,
  UNIQUE INDEX `cnpj_UNIQUE` (`cnpj` ASC) VISIBLE,
  INDEX `fk_tbl_ong_tbl_login1_idx` (`idLogin` ASC) VISIBLE,
  CONSTRAINT `fk_tbl_ong_tbl_login1`
    FOREIGN KEY (`idLogin`)
    REFERENCES `mydb`.`tbl_login` (`idLogin`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tbl_dados_bancarios`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tbl_dados_bancarios` ;

CREATE TABLE IF NOT EXISTS `mydb`.`tbl_dados_bancarios` (
  `idDadosBancario` INT NOT NULL AUTO_INCREMENT,
  `banco` VARCHAR(50) NOT NULL,
  `agencia` VARCHAR(10) NOT NULL,
  `conta` VARCHAR(20) NOT NULL,
  `contaCorrente` TINYINT NOT NULL,
  PRIMARY KEY (`idDadosBancario`),
  UNIQUE INDEX `idDadosBancario_UNIQUE` (`idDadosBancario` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tbl_meios_de_doacao`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tbl_meios_de_doacao` ;

CREATE TABLE IF NOT EXISTS `mydb`.`tbl_meios_de_doacao` (
  `idmeiosDeDoacao` INT NOT NULL AUTO_INCREMENT,
  `site` VARCHAR(150) NULL,
  `pix` VARCHAR(100) NULL,
  `idDadosBancario` INT NOT NULL,
  PRIMARY KEY (`idmeiosDeDoacao`),
  UNIQUE INDEX `idmeiosDeDoacao_UNIQUE` (`idmeiosDeDoacao` ASC) VISIBLE,
  INDEX `fk_tblMeiosDeDoacao_tblDadosBancario_idx` (`idDadosBancario` ASC) VISIBLE,
  CONSTRAINT `fk_tblMeiosDeDoacao_tblDadosBancario`
    FOREIGN KEY (`idDadosBancario`)
    REFERENCES `mydb`.`tbl_dados_bancarios` (`idDadosBancario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tbl_ong_meios_de_doacao`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tbl_ong_meios_de_doacao` ;

CREATE TABLE IF NOT EXISTS `mydb`.`tbl_ong_meios_de_doacao` (
  `idOngMeiosDeDoacao` INT NOT NULL AUTO_INCREMENT,
  `idmeiosDeDoacao` INT NOT NULL,
  `idOng` INT NOT NULL,
  PRIMARY KEY (`idOngMeiosDeDoacao`),
  UNIQUE INDEX `idtblOngMeiosDeDoacao_UNIQUE` (`idOngMeiosDeDoacao` ASC) VISIBLE,
  INDEX `fk_tblOngMeiosDeDoacao_tblMeiosDeDoacao1_idx` (`idmeiosDeDoacao` ASC) VISIBLE,
  INDEX `fk_tblOngMeiosDeDoacao_tblOng1_idx` (`idOng` ASC) VISIBLE,
  CONSTRAINT `fk_tblOngMeiosDeDoacao_tblMeiosDeDoacao1`
    FOREIGN KEY (`idmeiosDeDoacao`)
    REFERENCES `mydb`.`tbl_meios_de_doacao` (`idmeiosDeDoacao`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tblOngMeiosDeDoacao_tblOng1`
    FOREIGN KEY (`idOng`)
    REFERENCES `mydb`.`tbl_ong` (`idOng`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tbl_contato`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tbl_contato` ;

CREATE TABLE IF NOT EXISTS `mydb`.`tbl_contato` (
  `idcontato` INT NOT NULL AUTO_INCREMENT,
  `numero` VARCHAR(45) NULL,
  `email` VARCHAR(80) NULL,
  `telefone` VARCHAR(45) NULL,
  `idOng` INT NOT NULL,
  PRIMARY KEY (`idcontato`),
  UNIQUE INDEX `idcontato_UNIQUE` (`idcontato` ASC) VISIBLE,
  INDEX `fk_tblContato_tblOng1_idx` (`idOng` ASC) VISIBLE,
  CONSTRAINT `fk_tblContato_tblOng1`
    FOREIGN KEY (`idOng`)
    REFERENCES `mydb`.`tbl_ong` (`idOng`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tbl_patrocinadores`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tbl_patrocinadores` ;

CREATE TABLE IF NOT EXISTS `mydb`.`tbl_patrocinadores` (
  `idPatrocinadores` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `foto` TEXT NULL,
  `link` VARCHAR(80) NULL,
  PRIMARY KEY (`idPatrocinadores`),
  UNIQUE INDEX `idtblPatrocinio_UNIQUE` (`idPatrocinadores` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tbl_ong_patrocinadores`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tbl_ong_patrocinadores` ;

CREATE TABLE IF NOT EXISTS `mydb`.`tbl_ong_patrocinadores` (
  `idOngPatrocinadores` INT NOT NULL AUTO_INCREMENT,
  `idOng` INT NOT NULL,
  `idPatrocinadores` INT NOT NULL,
  PRIMARY KEY (`idOngPatrocinadores`),
  UNIQUE INDEX `idtblOngPatrocinadores_UNIQUE` (`idOngPatrocinadores` ASC) VISIBLE,
  INDEX `fk_tblOngPatrocinadores_tblOng1_idx` (`idOng` ASC) VISIBLE,
  INDEX `fk_tblOngPatrocinadores_tblPatrocinadores1_idx` (`idPatrocinadores` ASC) VISIBLE,
  CONSTRAINT `fk_tblOngPatrocinadores_tblOng1`
    FOREIGN KEY (`idOng`)
    REFERENCES `mydb`.`tbl_ong` (`idOng`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tblOngPatrocinadores_tblPatrocinadores1`
    FOREIGN KEY (`idPatrocinadores`)
    REFERENCES `mydb`.`tbl_patrocinadores` (`idPatrocinadores`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tbl_estado`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tbl_estado` ;

CREATE TABLE IF NOT EXISTS `mydb`.`tbl_estado` (
  `idEstado` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NULL,
  `sigla` VARCHAR(10) NULL,
  PRIMARY KEY (`idEstado`),
  UNIQUE INDEX `idEstado_UNIQUE` (`idEstado` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tbl_ong_estado`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tbl_ong_estado` ;

CREATE TABLE IF NOT EXISTS `mydb`.`tbl_ong_estado` (
  `idOngRegiao` INT NOT NULL AUTO_INCREMENT,
  `idOng` INT NOT NULL,
  `idEstado` INT NOT NULL,
  PRIMARY KEY (`idOngRegiao`),
  UNIQUE INDEX `idtblOngRegiao_UNIQUE` (`idOngRegiao` ASC) VISIBLE,
  INDEX `fk_tblOngRegiao_tblOng1_idx` (`idOng` ASC) VISIBLE,
  INDEX `fk_tbl_ong_estado_tbl_estado1_idx` (`idEstado` ASC) VISIBLE,
  CONSTRAINT `fk_tblOngRegiao_tblOng1`
    FOREIGN KEY (`idOng`)
    REFERENCES `mydb`.`tbl_ong` (`idOng`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_ong_estado_tbl_estado1`
    FOREIGN KEY (`idEstado`)
    REFERENCES `mydb`.`tbl_estado` (`idEstado`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tbl_endereco`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tbl_endereco` ;

CREATE TABLE IF NOT EXISTS `mydb`.`tbl_endereco` (
  `idEndereco` INT NOT NULL AUTO_INCREMENT,
  `bairro` VARCHAR(150) NOT NULL,
  `numero` INT NOT NULL,
  `cep` VARCHAR(80) NOT NULL,
  `rua` VARCHAR(80) NOT NULL,
  `complemento` TEXT NULL,
  `idEstado` INT NOT NULL,
  PRIMARY KEY (`idEndereco`),
  UNIQUE INDEX `idEndereco_UNIQUE` (`idEndereco` ASC) VISIBLE,
  INDEX `fk_tblEndereco_tblEstado1_idx` (`idEstado` ASC) VISIBLE,
  CONSTRAINT `fk_tblEndereco_tblEstado1`
    FOREIGN KEY (`idEstado`)
    REFERENCES `mydb`.`tbl_estado` (`idEstado`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tbl_cidade`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tbl_cidade` ;

CREATE TABLE IF NOT EXISTS `mydb`.`tbl_cidade` (
  `idCidade` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NULL,
  `idEstado` INT NOT NULL,
  PRIMARY KEY (`idCidade`),
  UNIQUE INDEX `idCidade_UNIQUE` (`idCidade` ASC) VISIBLE,
  INDEX `fk_tblCidade_tblEstado1_idx` (`idEstado` ASC) VISIBLE,
  CONSTRAINT `fk_tblCidade_tblEstado1`
    FOREIGN KEY (`idEstado`)
    REFERENCES `mydb`.`tbl_estado` (`idEstado`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tbl_usuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tbl_usuario` ;

CREATE TABLE IF NOT EXISTS `mydb`.`tbl_usuario` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(150) NOT NULL,
  `foto` VARCHAR(100) NULL,
  `senha` VARCHAR(100) NOT NULL,
  `dataDeNascimento` DATE NULL,
  `curriculo` TEXT NULL,
  `dataConta` DATE NOT NULL,
  `banner` VARCHAR(100) NULL,
  `idLogin` INT NOT NULL,
  PRIMARY KEY (`idUsuario`),
  UNIQUE INDEX `idUsuario_UNIQUE` (`idUsuario` ASC) VISIBLE,
  INDEX `fk_tbl_usuario_tbl_login1_idx` (`idLogin` ASC) VISIBLE,
  CONSTRAINT `fk_tbl_usuario_tbl_login1`
    FOREIGN KEY (`idLogin`)
    REFERENCES `mydb`.`tbl_login` (`idLogin`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tbl_informacoes_de_contato`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tbl_informacoes_de_contato` ;

CREATE TABLE IF NOT EXISTS `mydb`.`tbl_informacoes_de_contato` (
  `idInformacoesDeContado` INT NOT NULL AUTO_INCREMENT,
  `numero` VARCHAR(45) NULL,
  `email` VARCHAR(100) NOT NULL,
  `telefone` VARCHAR(45) NULL,
  `idUsuario` INT NOT NULL,
  PRIMARY KEY (`idInformacoesDeContado`),
  UNIQUE INDEX `idInformacoesDeContado_UNIQUE` (`idInformacoesDeContado` ASC) VISIBLE,
  INDEX `fk_tblInformacoesDeContado_tblUsuario1_idx` (`idUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_tblInformacoesDeContado_tblUsuario1`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `mydb`.`tbl_usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tbl_seguidor`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tbl_seguidor` ;

CREATE TABLE IF NOT EXISTS `mydb`.`tbl_seguidor` (
  `idSeguidor` INT NOT NULL AUTO_INCREMENT,
  `idOng` INT NOT NULL,
  `idUsuario` INT NOT NULL,
  PRIMARY KEY (`idSeguidor`),
  UNIQUE INDEX `idtblUsuarioOng_UNIQUE` (`idSeguidor` ASC) VISIBLE,
  INDEX `fk_tblUsuarioOng_tblOng1_idx` (`idOng` ASC) VISIBLE,
  INDEX `fk_tblUsuarioOng_tblUsuario1_idx` (`idUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_tblUsuarioOng_tblOng1`
    FOREIGN KEY (`idOng`)
    REFERENCES `mydb`.`tbl_ong` (`idOng`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tblUsuarioOng_tblUsuario1`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `mydb`.`tbl_usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tbl_post`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tbl_post` ;

CREATE TABLE IF NOT EXISTS `mydb`.`tbl_post` (
  `idPost` INT NOT NULL AUTO_INCREMENT,
  `descricao` TEXT NOT NULL,
  `dataHora` DATETIME NOT NULL,
  `idOng` INT NOT NULL,
  PRIMARY KEY (`idPost`),
  UNIQUE INDEX `idtblPosts_UNIQUE` (`idPost` ASC) VISIBLE,
  INDEX `fk_tbl_post_tbl_ong1_idx` (`idOng` ASC) VISIBLE,
  CONSTRAINT `fk_tbl_post_tbl_ong1`
    FOREIGN KEY (`idOng`)
    REFERENCES `mydb`.`tbl_ong` (`idOng`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tbl_foto`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tbl_foto` ;

CREATE TABLE IF NOT EXISTS `mydb`.`tbl_foto` (
  `idFoto` INT NOT NULL AUTO_INCREMENT,
  `foto` VARCHAR(100) NULL,
  `tbl_eventos_idEventos` INT NOT NULL,
  PRIMARY KEY (`idFoto`),
  UNIQUE INDEX `idtblFoto_UNIQUE` (`idFoto` ASC) VISIBLE,
  INDEX `fk_tbl_foto_tbl_eventos1_idx` (`tbl_eventos_idEventos` ASC) VISIBLE,
  CONSTRAINT `fk_tbl_foto_tbl_eventos1`
    FOREIGN KEY (`tbl_eventos_idEventos`)
    REFERENCES `mydb`.`tbl_eventos` (`idEventos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tbl_video`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tbl_video` ;

CREATE TABLE IF NOT EXISTS `mydb`.`tbl_video` (
  `idVideo` INT NOT NULL AUTO_INCREMENT,
  `video` VARCHAR(100) NULL,
  `idPost` INT NOT NULL,
  PRIMARY KEY (`idVideo`),
  UNIQUE INDEX `idtblVideo_UNIQUE` (`idVideo` ASC) VISIBLE,
  INDEX `fk_tblVideo_tblPost1_idx` (`idPost` ASC) VISIBLE,
  CONSTRAINT `fk_tblVideo_tblPost1`
    FOREIGN KEY (`idPost`)
    REFERENCES `mydb`.`tbl_post` (`idPost`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tbl_reacao`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tbl_reacao` ;

CREATE TABLE IF NOT EXISTS `mydb`.`tbl_reacao` (
  `idReacao` INT NOT NULL AUTO_INCREMENT,
  `emoji` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`idReacao`),
  UNIQUE INDEX `idtblCurtida_UNIQUE` (`idReacao` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tbl_post_reacao`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tbl_post_reacao` ;

CREATE TABLE IF NOT EXISTS `mydb`.`tbl_post_reacao` (
  `idPostReacao` INT NOT NULL AUTO_INCREMENT,
  `idReacao` INT NOT NULL,
  `idPost` INT NOT NULL,
  PRIMARY KEY (`idPostReacao`),
  UNIQUE INDEX `id_post_reacao_UNIQUE` (`idPostReacao` ASC) VISIBLE,
  INDEX `fk_tbl_post_reacao_tbl_reacao1_idx` (`idReacao` ASC) VISIBLE,
  INDEX `fk_tbl_post_reacao_tbl_post1_idx` (`idPost` ASC) VISIBLE,
  CONSTRAINT `fk_tbl_post_reacao_tbl_reacao1`
    FOREIGN KEY (`idReacao`)
    REFERENCES `mydb`.`tbl_reacao` (`idReacao`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_post_reacao_tbl_post1`
    FOREIGN KEY (`idPost`)
    REFERENCES `mydb`.`tbl_post` (`idPost`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tbl_favoritos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tbl_favoritos` ;

CREATE TABLE IF NOT EXISTS `mydb`.`tbl_favoritos` (
  `idFavoritos` INT NOT NULL,
  `idOng` INT NOT NULL,
  `idUsuario` INT NOT NULL,
  `favorito` TINYINT NULL,
  PRIMARY KEY (`idFavoritos`),
  INDEX `fk_tbl_favoritos_tbl_ong1_idx` (`idOng` ASC) VISIBLE,
  INDEX `fk_tbl_favoritos_tbl_usuario1_idx` (`idUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_tbl_favoritos_tbl_ong1`
    FOREIGN KEY (`idOng`)
    REFERENCES `mydb`.`tbl_ong` (`idOng`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_favoritos_tbl_usuario1`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `mydb`.`tbl_usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tbl_vagas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tbl_vagas` ;

CREATE TABLE IF NOT EXISTS `mydb`.`tbl_vagas` (
  `idVagas` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(200) NOT NULL,
  `decricao` TEXT NOT NULL,
  `requisitos` TEXT NOT NULL,
  `dataDeCriacao` DATE NOT NULL,
  `cargaHoraria` TIME NULL,
  `idOng` INT NOT NULL,
  PRIMARY KEY (`idVagas`),
  UNIQUE INDEX `idtbl_vagas_UNIQUE` (`idVagas` ASC) VISIBLE,
  INDEX `fk_tbl_vagas_tbl_ong1_idx` (`idOng` ASC) VISIBLE,
  CONSTRAINT `fk_tbl_vagas_tbl_ong1`
    FOREIGN KEY (`idOng`)
    REFERENCES `mydb`.`tbl_ong` (`idOng`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tbl_endereco_vagas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tbl_endereco_vagas` ;

CREATE TABLE IF NOT EXISTS `mydb`.`tbl_endereco_vagas` (
  `idEnderecoVagas` INT NOT NULL AUTO_INCREMENT,
  `idEndereco` INT NOT NULL,
  `idVagas` INT NOT NULL,
  PRIMARY KEY (`idEnderecoVagas`),
  UNIQUE INDEX `idtbl_endereco_vagas_UNIQUE` (`idEnderecoVagas` ASC) VISIBLE,
  INDEX `fk_tbl_endereco_vagas_tbl_endereco1_idx` (`idEndereco` ASC) VISIBLE,
  INDEX `fk_tbl_endereco_vagas_tbl_vagas1_idx` (`idVagas` ASC) VISIBLE,
  CONSTRAINT `fk_tbl_endereco_vagas_tbl_endereco1`
    FOREIGN KEY (`idEndereco`)
    REFERENCES `mydb`.`tbl_endereco` (`idEndereco`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_endereco_vagas_tbl_vagas1`
    FOREIGN KEY (`idVagas`)
    REFERENCES `mydb`.`tbl_vagas` (`idVagas`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tbl_comentario_principal`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tbl_comentario_principal` ;

CREATE TABLE IF NOT EXISTS `mydb`.`tbl_comentario_principal` (
  `idComentarioPricipal` INT NOT NULL AUTO_INCREMENT,
  `comentario` VARCHAR(300) NULL,
  `dataHora` DATETIME NOT NULL,
  `idLogin` INT NOT NULL,
  PRIMARY KEY (`idComentarioPricipal`),
  UNIQUE INDEX `idtblComentarioPricipal_UNIQUE` (`idComentarioPricipal` ASC) VISIBLE,
  INDEX `fk_tbl_comentario_principal_tbl_login1_idx` (`idLogin` ASC) VISIBLE,
  CONSTRAINT `fk_tbl_comentario_principal_tbl_login1`
    FOREIGN KEY (`idLogin`)
    REFERENCES `mydb`.`tbl_login` (`idLogin`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tbl_comentario_secundario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tbl_comentario_secundario` ;

CREATE TABLE IF NOT EXISTS `mydb`.`tbl_comentario_secundario` (
  `idComentarioSecundario` INT NOT NULL AUTO_INCREMENT,
  `text` VARCHAR(300) NULL,
  `dataHora` DATETIME NOT NULL,
  `idComentarioPricipal` INT NOT NULL,
  `idLogin` INT NOT NULL,
  PRIMARY KEY (`idComentarioSecundario`),
  UNIQUE INDEX `idtbl_comentario_secundario_UNIQUE` (`idComentarioSecundario` ASC) VISIBLE,
  INDEX `fk_tbl_comentario_secundario_tbl_comentario_principal1_idx` (`idComentarioPricipal` ASC) VISIBLE,
  INDEX `fk_tbl_comentario_secundario_tbl_login1_idx` (`idLogin` ASC) VISIBLE,
  CONSTRAINT `fk_tbl_comentario_secundario_tbl_comentario_principal1`
    FOREIGN KEY (`idComentarioPricipal`)
    REFERENCES `mydb`.`tbl_comentario_principal` (`idComentarioPricipal`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_comentario_secundario_tbl_login1`
    FOREIGN KEY (`idLogin`)
    REFERENCES `mydb`.`tbl_login` (`idLogin`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tbl_post_comentario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tbl_post_comentario` ;

CREATE TABLE IF NOT EXISTS `mydb`.`tbl_post_comentario` (
  `idPostComentario` INT NOT NULL AUTO_INCREMENT,
  `idComentarioPricipal` INT NOT NULL,
  `idPost` INT NOT NULL,
  PRIMARY KEY (`idPostComentario`),
  UNIQUE INDEX `idtbl_post_comentario_UNIQUE` (`idPostComentario` ASC) VISIBLE,
  INDEX `fk_tbl_post_comentario_tbl_comentario_principal1_idx` (`idComentarioPricipal` ASC) VISIBLE,
  INDEX `fk_tbl_post_comentario_tbl_post1_idx` (`idPost` ASC) VISIBLE,
  CONSTRAINT `fk_tbl_post_comentario_tbl_comentario_principal1`
    FOREIGN KEY (`idComentarioPricipal`)
    REFERENCES `mydb`.`tbl_comentario_principal` (`idComentarioPricipal`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_post_comentario_tbl_post1`
    FOREIGN KEY (`idPost`)
    REFERENCES `mydb`.`tbl_post` (`idPost`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tbl_vagas_usuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tbl_vagas_usuario` ;

CREATE TABLE IF NOT EXISTS `mydb`.`tbl_vagas_usuario` (
  `idVagasUsuario` INT NOT NULL AUTO_INCREMENT,
  `idVagas` INT NOT NULL,
  `idUsuario` INT NOT NULL,
  PRIMARY KEY (`idVagasUsuario`),
  UNIQUE INDEX `idtblVagasUsuario_UNIQUE` (`idVagasUsuario` ASC) VISIBLE,
  INDEX `fk_tbl_vagas_usuario_tbl_vagas1_idx` (`idVagas` ASC) VISIBLE,
  INDEX `fk_tbl_vagas_usuario_tbl_usuario1_idx` (`idUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_tbl_vagas_usuario_tbl_vagas1`
    FOREIGN KEY (`idVagas`)
    REFERENCES `mydb`.`tbl_vagas` (`idVagas`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_vagas_usuario_tbl_usuario1`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `mydb`.`tbl_usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tbl_eventos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tbl_eventos` ;

CREATE TABLE IF NOT EXISTS `mydb`.`tbl_eventos` (
  `idEventos` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(200) NOT NULL,
  `dataHora` DATETIME NOT NULL,
  `objetivo` TEXT NOT NULL,
  `descricao` TEXT NOT NULL,
  `dataDeCriacao` DATE NOT NULL,
  `idEndereco` INT NOT NULL,
  `idOng` INT NOT NULL,
  `numeroParticipantes` INT NULL,
  PRIMARY KEY (`idEventos`),
  UNIQUE INDEX `idEventos_UNIQUE` (`idEventos` ASC) VISIBLE,
  INDEX `fk_tbl_eventos_tbl_endereco1_idx` (`idEndereco` ASC) VISIBLE,
  INDEX `fk_tbl_eventos_tbl_ong1_idx` (`idOng` ASC) VISIBLE,
  CONSTRAINT `fk_tbl_eventos_tbl_endereco1`
    FOREIGN KEY (`idEndereco`)
    REFERENCES `mydb`.`tbl_endereco` (`idEndereco`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_eventos_tbl_ong1`
    FOREIGN KEY (`idOng`)
    REFERENCES `mydb`.`tbl_ong` (`idOng`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tbl_usuario_evento`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tbl_usuario_evento` ;

CREATE TABLE IF NOT EXISTS `mydb`.`tbl_usuario_evento` (
  `id_usuario_evento` INT NOT NULL AUTO_INCREMENT,
  `idUsuario` INT NOT NULL,
  `idEventos` INT NOT NULL,
  PRIMARY KEY (`id_usuario_evento`),
  UNIQUE INDEX `idtbl_usuario_evento_UNIQUE` (`id_usuario_evento` ASC) VISIBLE,
  INDEX `fk_tbl_usuario_evento_tbl_usuario1_idx` (`idUsuario` ASC) VISIBLE,
  INDEX `fk_tbl_usuario_evento_tbl_eventos1_idx` (`idEventos` ASC) VISIBLE,
  CONSTRAINT `fk_tbl_usuario_evento_tbl_usuario1`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `mydb`.`tbl_usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_usuario_evento_tbl_eventos1`
    FOREIGN KEY (`idEventos`)
    REFERENCES `mydb`.`tbl_eventos` (`idEventos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tbl_chat`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tbl_chat` ;

CREATE TABLE IF NOT EXISTS `mydb`.`tbl_chat` (
  `idChat` INT NOT NULL AUTO_INCREMENT,
  `nomeArquivo` TEXT NOT NULL,
  PRIMARY KEY (`idChat`),
  UNIQUE INDEX `idtblChat_UNIQUE` (`idChat` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tbl_chat_login`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tbl_chat_login` ;

CREATE TABLE IF NOT EXISTS `mydb`.`tbl_chat_login` (
  `idChatLogin` INT NOT NULL AUTO_INCREMENT,
  `idLogin` INT NOT NULL,
  `idChat` INT NOT NULL,
  PRIMARY KEY (`idChatLogin`),
  UNIQUE INDEX `idtblChatLogin_UNIQUE` (`idChatLogin` ASC) VISIBLE,
  INDEX `fk_tbl_chat_login_tbl_login1_idx` (`idLogin` ASC) VISIBLE,
  INDEX `fk_tbl_chat_login_tbl_chat1_idx` (`idChat` ASC) VISIBLE,
  CONSTRAINT `fk_tbl_chat_login_tbl_login1`
    FOREIGN KEY (`idLogin`)
    REFERENCES `mydb`.`tbl_login` (`idLogin`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_chat_login_tbl_chat1`
    FOREIGN KEY (`idChat`)
    REFERENCES `mydb`.`tbl_chat` (`idChat`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tbl_categorias`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tbl_categorias` ;

CREATE TABLE IF NOT EXISTS `mydb`.`tbl_categorias` (
  `idCategorias` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`idCategorias`),
  UNIQUE INDEX `idtblCategorias_UNIQUE` (`idCategorias` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tbl_ong_categoria`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tbl_ong_categoria` ;

CREATE TABLE IF NOT EXISTS `mydb`.`tbl_ong_categoria` (
  `idOngCategoria` INT NOT NULL AUTO_INCREMENT,
  `idOng` INT NOT NULL,
  `idCategorias` INT NOT NULL,
  PRIMARY KEY (`idOngCategoria`),
  UNIQUE INDEX `idtbl-ong_categoria_UNIQUE` (`idOngCategoria` ASC) VISIBLE,
  INDEX `fk_tblong_categoria_tbl_ong1_idx` (`idOng` ASC) VISIBLE,
  INDEX `fk_tblong_categoria_tbl_categorias1_idx` (`idCategorias` ASC) VISIBLE,
  CONSTRAINT `fk_tblong_categoria_tbl_ong1`
    FOREIGN KEY (`idOng`)
    REFERENCES `mydb`.`tbl_ong` (`idOng`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tblong_categoria_tbl_categorias1`
    FOREIGN KEY (`idCategorias`)
    REFERENCES `mydb`.`tbl_categorias` (`idCategorias`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tbl_foto`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tbl_foto` ;

CREATE TABLE IF NOT EXISTS `mydb`.`tbl_foto` (
  `idFoto` INT NOT NULL AUTO_INCREMENT,
  `foto` VARCHAR(100) NULL,
  `tbl_eventos_idEventos` INT NOT NULL,
  PRIMARY KEY (`idFoto`),
  UNIQUE INDEX `idtblFoto_UNIQUE` (`idFoto` ASC) VISIBLE,
  INDEX `fk_tbl_foto_tbl_eventos1_idx` (`tbl_eventos_idEventos` ASC) VISIBLE,
  CONSTRAINT `fk_tbl_foto_tbl_eventos1`
    FOREIGN KEY (`tbl_eventos_idEventos`)
    REFERENCES `mydb`.`tbl_eventos` (`idEventos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tbl_login_endereco`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tbl_login_endereco` ;

CREATE TABLE IF NOT EXISTS `mydb`.`tbl_login_endereco` (
  `idLoginEndereco` INT NOT NULL AUTO_INCREMENT,
  `idEndereco` INT NOT NULL,
  `idLogin` INT NOT NULL,
  PRIMARY KEY (`idLoginEndereco`),
  UNIQUE INDEX `idtbl_login_endereco_UNIQUE` (`idLoginEndereco` ASC) VISIBLE,
  INDEX `fk_tbl_login_endereco_tbl_endereco1_idx` (`idEndereco` ASC) VISIBLE,
  INDEX `fk_tbl_login_endereco_tbl_login1_idx` (`idLogin` ASC) VISIBLE,
  CONSTRAINT `fk_tbl_login_endereco_tbl_endereco1`
    FOREIGN KEY (`idEndereco`)
    REFERENCES `mydb`.`tbl_endereco` (`idEndereco`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_login_endereco_tbl_login1`
    FOREIGN KEY (`idLogin`)
    REFERENCES `mydb`.`tbl_login` (`idLogin`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tbl_login_reacao`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tbl_login_reacao` ;

CREATE TABLE IF NOT EXISTS `mydb`.`tbl_login_reacao` (
  `idLoginReacao` INT NOT NULL AUTO_INCREMENT,
  `idReacao` INT NOT NULL,
  `idLogin` INT NOT NULL,
  PRIMARY KEY (`idLoginReacao`),
  UNIQUE INDEX `idtbl_login_reacao_UNIQUE` (`idLoginReacao` ASC) VISIBLE,
  INDEX `fk_tbl_login_reacao_tbl_reacao1_idx` (`idReacao` ASC) VISIBLE,
  INDEX `fk_tbl_login_reacao_tbl_login1_idx` (`idLogin` ASC) VISIBLE,
  CONSTRAINT `fk_tbl_login_reacao_tbl_reacao1`
    FOREIGN KEY (`idReacao`)
    REFERENCES `mydb`.`tbl_reacao` (`idReacao`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_login_reacao_tbl_login1`
    FOREIGN KEY (`idLogin`)
    REFERENCES `mydb`.`tbl_login` (`idLogin`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
