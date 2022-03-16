/*
  Warnings:

  - You are about to drop the `Ong` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Ong`;

-- CreateTable
CREATE TABLE `tbl_categorias` (
    `idCategorias` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(150) NOT NULL,

    UNIQUE INDEX `idtblCategorias_UNIQUE`(`idCategorias`),
    PRIMARY KEY (`idCategorias`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_chat` (
    `idChat` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeArquivo` TEXT NOT NULL,

    UNIQUE INDEX `idtblChat_UNIQUE`(`idChat`),
    PRIMARY KEY (`idChat`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_chat_login` (
    `idChatLogin` INTEGER NOT NULL AUTO_INCREMENT,
    `idLogin` INTEGER NOT NULL,
    `idChat` INTEGER NOT NULL,

    UNIQUE INDEX `idtblChatLogin_UNIQUE`(`idChatLogin`),
    INDEX `fk_tbl_chat_login_tbl_chat1_idx`(`idChat`),
    INDEX `fk_tbl_chat_login_tbl_login1_idx`(`idLogin`),
    PRIMARY KEY (`idChatLogin`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_cidade` (
    `idCidade` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NULL,
    `idEstado` INTEGER NOT NULL,

    UNIQUE INDEX `idCidade_UNIQUE`(`idCidade`),
    INDEX `fk_tblCidade_tblEstado1_idx`(`idEstado`),
    PRIMARY KEY (`idCidade`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_comentario_principal` (
    `idComentarioPricipal` INTEGER NOT NULL AUTO_INCREMENT,
    `comentario` VARCHAR(300) NULL,
    `dataHora` DATETIME(0) NOT NULL,
    `idLogin` INTEGER NOT NULL,

    UNIQUE INDEX `idtblComentarioPricipal_UNIQUE`(`idComentarioPricipal`),
    INDEX `fk_tbl_comentario_principal_tbl_login1_idx`(`idLogin`),
    PRIMARY KEY (`idComentarioPricipal`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_comentario_secundario` (
    `idComentarioSecundario` INTEGER NOT NULL AUTO_INCREMENT,
    `text` VARCHAR(300) NULL,
    `dataHora` DATETIME(0) NOT NULL,
    `idComentarioPricipal` INTEGER NOT NULL,
    `idLogin` INTEGER NOT NULL,

    UNIQUE INDEX `idtbl_comentario_secundario_UNIQUE`(`idComentarioSecundario`),
    INDEX `fk_tbl_comentario_secundario_tbl_comentario_principal1_idx`(`idComentarioPricipal`),
    INDEX `fk_tbl_comentario_secundario_tbl_login1_idx`(`idLogin`),
    PRIMARY KEY (`idComentarioSecundario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_contato` (
    `idcontato` INTEGER NOT NULL AUTO_INCREMENT,
    `numero` VARCHAR(45) NULL,
    `email` VARCHAR(80) NULL,
    `telefone` VARCHAR(45) NULL,
    `idOng` INTEGER NOT NULL,

    UNIQUE INDEX `idcontato_UNIQUE`(`idcontato`),
    INDEX `fk_tblContato_tblOng1_idx`(`idOng`),
    PRIMARY KEY (`idcontato`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_dados_bancarios` (
    `idDadosBancario` INTEGER NOT NULL AUTO_INCREMENT,
    `banco` VARCHAR(50) NOT NULL,
    `agencia` VARCHAR(10) NOT NULL,
    `conta` VARCHAR(20) NOT NULL,
    `contaCorrente` TINYINT NOT NULL,

    UNIQUE INDEX `idDadosBancario_UNIQUE`(`idDadosBancario`),
    PRIMARY KEY (`idDadosBancario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_endereco` (
    `idEndereco` INTEGER NOT NULL AUTO_INCREMENT,
    `bairro` VARCHAR(150) NOT NULL,
    `numero` INTEGER NOT NULL,
    `cep` VARCHAR(80) NOT NULL,
    `rua` VARCHAR(80) NOT NULL,
    `complemento` TEXT NULL,
    `idEstado` INTEGER NOT NULL,

    UNIQUE INDEX `idEndereco_UNIQUE`(`idEndereco`),
    INDEX `fk_tblEndereco_tblEstado1_idx`(`idEstado`),
    PRIMARY KEY (`idEndereco`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_endereco_vagas` (
    `idEnderecoVagas` INTEGER NOT NULL AUTO_INCREMENT,
    `idEndereco` INTEGER NOT NULL,
    `idVagas` INTEGER NOT NULL,

    UNIQUE INDEX `idtbl_endereco_vagas_UNIQUE`(`idEnderecoVagas`),
    INDEX `fk_tbl_endereco_vagas_tbl_endereco1_idx`(`idEndereco`),
    INDEX `fk_tbl_endereco_vagas_tbl_vagas1_idx`(`idVagas`),
    PRIMARY KEY (`idEnderecoVagas`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_estado` (
    `idEstado` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NULL,
    `sigla` VARCHAR(10) NULL,

    UNIQUE INDEX `idEstado_UNIQUE`(`idEstado`),
    PRIMARY KEY (`idEstado`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_eventos` (
    `idEventos` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(200) NOT NULL,
    `dataHora` DATETIME(0) NOT NULL,
    `objetivo` TEXT NOT NULL,
    `descricao` TEXT NOT NULL,
    `dataDeCriacao` DATE NOT NULL,
    `idEndereco` INTEGER NOT NULL,
    `idOng` INTEGER NOT NULL,
    `numeroParticipantes` INTEGER NULL,

    UNIQUE INDEX `idEventos_UNIQUE`(`idEventos`),
    INDEX `fk_tbl_eventos_tbl_endereco1_idx`(`idEndereco`),
    INDEX `fk_tbl_eventos_tbl_ong1_idx`(`idOng`),
    PRIMARY KEY (`idEventos`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_favoritos` (
    `idFavoritos` INTEGER NOT NULL,
    `idOng` INTEGER NOT NULL,
    `idUsuario` INTEGER NOT NULL,
    `favorito` TINYINT NULL,

    INDEX `fk_tbl_favoritos_tbl_ong1_idx`(`idOng`),
    INDEX `fk_tbl_favoritos_tbl_usuario1_idx`(`idUsuario`),
    PRIMARY KEY (`idFavoritos`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_foto` (
    `idFoto` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(100) NULL,
    `tbl_eventos_idEventos` INTEGER NOT NULL,

    UNIQUE INDEX `idtblFoto_UNIQUE`(`idFoto`),
    INDEX `fk_tbl_foto_tbl_eventos1_idx`(`tbl_eventos_idEventos`),
    PRIMARY KEY (`idFoto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_informacoes_de_contato` (
    `idInformacoesDeContado` INTEGER NOT NULL AUTO_INCREMENT,
    `numero` VARCHAR(45) NULL,
    `email` VARCHAR(100) NOT NULL,
    `telefone` VARCHAR(45) NULL,
    `idUsuario` INTEGER NOT NULL,

    UNIQUE INDEX `idInformacoesDeContado_UNIQUE`(`idInformacoesDeContado`),
    INDEX `fk_tblInformacoesDeContado_tblUsuario1_idx`(`idUsuario`),
    PRIMARY KEY (`idInformacoesDeContado`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_login` (
    `idLogin` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(80) NOT NULL,
    `senha` VARCHAR(80) NOT NULL,

    UNIQUE INDEX `idtbl_login_UNIQUE`(`idLogin`),
    PRIMARY KEY (`idLogin`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_login_endereco` (
    `idLoginEndereco` INTEGER NOT NULL AUTO_INCREMENT,
    `idEndereco` INTEGER NOT NULL,
    `idLogin` INTEGER NOT NULL,

    UNIQUE INDEX `idtbl_login_endereco_UNIQUE`(`idLoginEndereco`),
    INDEX `fk_tbl_login_endereco_tbl_endereco1_idx`(`idEndereco`),
    INDEX `fk_tbl_login_endereco_tbl_login1_idx`(`idLogin`),
    PRIMARY KEY (`idLoginEndereco`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_login_reacao` (
    `idLoginReacao` INTEGER NOT NULL AUTO_INCREMENT,
    `idReacao` INTEGER NOT NULL,
    `idLogin` INTEGER NOT NULL,

    UNIQUE INDEX `idtbl_login_reacao_UNIQUE`(`idLoginReacao`),
    INDEX `fk_tbl_login_reacao_tbl_login1_idx`(`idLogin`),
    INDEX `fk_tbl_login_reacao_tbl_reacao1_idx`(`idReacao`),
    PRIMARY KEY (`idLoginReacao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_meios_de_doacao` (
    `idmeiosDeDoacao` INTEGER NOT NULL AUTO_INCREMENT,
    `site` VARCHAR(150) NULL,
    `pix` VARCHAR(100) NULL,
    `idDadosBancario` INTEGER NOT NULL,

    UNIQUE INDEX `idmeiosDeDoacao_UNIQUE`(`idmeiosDeDoacao`),
    INDEX `fk_tblMeiosDeDoacao_tblDadosBancario_idx`(`idDadosBancario`),
    PRIMARY KEY (`idmeiosDeDoacao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_ong` (
    `idOng` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `senha` VARCHAR(80) NOT NULL,
    `descricacao` TEXT NULL,
    `numeroDeSeguidores` DOUBLE NULL,
    `dataDeCriacao` DATE NOT NULL,
    `cnpj` VARCHAR(25) NOT NULL,
    `foto` VARCHAR(80) NULL,
    `banner` VARCHAR(80) NULL,
    `historia` TEXT NULL,
    `qtdDeMembros` INTEGER NULL,
    `dataDeFundacao` DATE NULL,
    `idLogin` INTEGER NOT NULL,

    UNIQUE INDEX `idOng_UNIQUE`(`idOng`),
    UNIQUE INDEX `cnpj_UNIQUE`(`cnpj`),
    INDEX `fk_tbl_ong_tbl_login1_idx`(`idLogin`),
    PRIMARY KEY (`idOng`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_ong_categoria` (
    `idOngCategoria` INTEGER NOT NULL AUTO_INCREMENT,
    `idOng` INTEGER NOT NULL,
    `idCategorias` INTEGER NOT NULL,

    UNIQUE INDEX `idtbl-ong_categoria_UNIQUE`(`idOngCategoria`),
    INDEX `fk_tblong_categoria_tbl_categorias1_idx`(`idCategorias`),
    INDEX `fk_tblong_categoria_tbl_ong1_idx`(`idOng`),
    PRIMARY KEY (`idOngCategoria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_ong_estado` (
    `idOngRegiao` INTEGER NOT NULL AUTO_INCREMENT,
    `idOng` INTEGER NOT NULL,
    `idEstado` INTEGER NOT NULL,

    UNIQUE INDEX `idtblOngRegiao_UNIQUE`(`idOngRegiao`),
    INDEX `fk_tblOngRegiao_tblOng1_idx`(`idOng`),
    INDEX `fk_tbl_ong_estado_tbl_estado1_idx`(`idEstado`),
    PRIMARY KEY (`idOngRegiao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_ong_meios_de_doacao` (
    `idOngMeiosDeDoacao` INTEGER NOT NULL AUTO_INCREMENT,
    `idmeiosDeDoacao` INTEGER NOT NULL,
    `idOng` INTEGER NOT NULL,

    UNIQUE INDEX `idtblOngMeiosDeDoacao_UNIQUE`(`idOngMeiosDeDoacao`),
    INDEX `fk_tblOngMeiosDeDoacao_tblMeiosDeDoacao1_idx`(`idmeiosDeDoacao`),
    INDEX `fk_tblOngMeiosDeDoacao_tblOng1_idx`(`idOng`),
    PRIMARY KEY (`idOngMeiosDeDoacao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_ong_patrocinadores` (
    `idOngPatrocinadores` INTEGER NOT NULL AUTO_INCREMENT,
    `idOng` INTEGER NOT NULL,
    `idPatrocinadores` INTEGER NOT NULL,

    UNIQUE INDEX `idtblOngPatrocinadores_UNIQUE`(`idOngPatrocinadores`),
    INDEX `fk_tblOngPatrocinadores_tblOng1_idx`(`idOng`),
    INDEX `fk_tblOngPatrocinadores_tblPatrocinadores1_idx`(`idPatrocinadores`),
    PRIMARY KEY (`idOngPatrocinadores`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_patrocinadores` (
    `idPatrocinadores` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(45) NOT NULL,
    `foto` TEXT NULL,
    `link` VARCHAR(80) NULL,

    UNIQUE INDEX `idtblPatrocinio_UNIQUE`(`idPatrocinadores`),
    PRIMARY KEY (`idPatrocinadores`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_post` (
    `idPost` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao` TEXT NOT NULL,
    `dataHora` DATETIME(0) NOT NULL,
    `idOng` INTEGER NOT NULL,

    UNIQUE INDEX `idtblPosts_UNIQUE`(`idPost`),
    INDEX `fk_tbl_post_tbl_ong1_idx`(`idOng`),
    PRIMARY KEY (`idPost`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_post_comentario` (
    `idPostComentario` INTEGER NOT NULL AUTO_INCREMENT,
    `idComentarioPricipal` INTEGER NOT NULL,
    `idPost` INTEGER NOT NULL,

    UNIQUE INDEX `idtbl_post_comentario_UNIQUE`(`idPostComentario`),
    INDEX `fk_tbl_post_comentario_tbl_comentario_principal1_idx`(`idComentarioPricipal`),
    INDEX `fk_tbl_post_comentario_tbl_post1_idx`(`idPost`),
    PRIMARY KEY (`idPostComentario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_post_reacao` (
    `idPostReacao` INTEGER NOT NULL AUTO_INCREMENT,
    `idReacao` INTEGER NOT NULL,
    `idPost` INTEGER NOT NULL,

    UNIQUE INDEX `id_post_reacao_UNIQUE`(`idPostReacao`),
    INDEX `fk_tbl_post_reacao_tbl_post1_idx`(`idPost`),
    INDEX `fk_tbl_post_reacao_tbl_reacao1_idx`(`idReacao`),
    PRIMARY KEY (`idPostReacao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_reacao` (
    `idReacao` INTEGER NOT NULL AUTO_INCREMENT,
    `emoji` VARCHAR(20) NOT NULL,

    UNIQUE INDEX `idtblCurtida_UNIQUE`(`idReacao`),
    PRIMARY KEY (`idReacao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_seguidor` (
    `idSeguidor` INTEGER NOT NULL AUTO_INCREMENT,
    `idOng` INTEGER NOT NULL,
    `idUsuario` INTEGER NOT NULL,

    UNIQUE INDEX `idtblUsuarioOng_UNIQUE`(`idSeguidor`),
    INDEX `fk_tblUsuarioOng_tblOng1_idx`(`idOng`),
    INDEX `fk_tblUsuarioOng_tblUsuario1_idx`(`idUsuario`),
    PRIMARY KEY (`idSeguidor`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_usuario` (
    `idUsuario` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(150) NOT NULL,
    `foto` VARCHAR(100) NULL,
    `senha` VARCHAR(100) NOT NULL,
    `dataDeNascimento` DATE NULL,
    `curriculo` TEXT NULL,
    `dataConta` DATE NOT NULL,
    `banner` VARCHAR(100) NULL,
    `idLogin` INTEGER NOT NULL,

    UNIQUE INDEX `idUsuario_UNIQUE`(`idUsuario`),
    INDEX `fk_tbl_usuario_tbl_login1_idx`(`idLogin`),
    PRIMARY KEY (`idUsuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_usuario_evento` (
    `id_usuario_evento` INTEGER NOT NULL AUTO_INCREMENT,
    `idUsuario` INTEGER NOT NULL,
    `idEventos` INTEGER NOT NULL,

    UNIQUE INDEX `idtbl_usuario_evento_UNIQUE`(`id_usuario_evento`),
    INDEX `fk_tbl_usuario_evento_tbl_eventos1_idx`(`idEventos`),
    INDEX `fk_tbl_usuario_evento_tbl_usuario1_idx`(`idUsuario`),
    PRIMARY KEY (`id_usuario_evento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_vagas` (
    `idVagas` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(200) NOT NULL,
    `decricao` TEXT NOT NULL,
    `requisitos` TEXT NOT NULL,
    `dataDeCriacao` DATE NOT NULL,
    `cargaHoraria` TIME(0) NULL,
    `idOng` INTEGER NOT NULL,

    UNIQUE INDEX `idtbl_vagas_UNIQUE`(`idVagas`),
    INDEX `fk_tbl_vagas_tbl_ong1_idx`(`idOng`),
    PRIMARY KEY (`idVagas`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_vagas_usuario` (
    `idVagasUsuario` INTEGER NOT NULL AUTO_INCREMENT,
    `idVagas` INTEGER NOT NULL,
    `idUsuario` INTEGER NOT NULL,

    UNIQUE INDEX `idtblVagasUsuario_UNIQUE`(`idVagasUsuario`),
    INDEX `fk_tbl_vagas_usuario_tbl_usuario1_idx`(`idUsuario`),
    INDEX `fk_tbl_vagas_usuario_tbl_vagas1_idx`(`idVagas`),
    PRIMARY KEY (`idVagasUsuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_video` (
    `idVideo` INTEGER NOT NULL AUTO_INCREMENT,
    `video` VARCHAR(100) NULL,
    `idPost` INTEGER NOT NULL,

    UNIQUE INDEX `idtblVideo_UNIQUE`(`idVideo`),
    INDEX `fk_tblVideo_tblPost1_idx`(`idPost`),
    PRIMARY KEY (`idVideo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tbl_chat_login` ADD CONSTRAINT `fk_tbl_chat_login_tbl_chat1` FOREIGN KEY (`idChat`) REFERENCES `tbl_chat`(`idChat`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_chat_login` ADD CONSTRAINT `fk_tbl_chat_login_tbl_login1` FOREIGN KEY (`idLogin`) REFERENCES `tbl_login`(`idLogin`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_cidade` ADD CONSTRAINT `fk_tblCidade_tblEstado1` FOREIGN KEY (`idEstado`) REFERENCES `tbl_estado`(`idEstado`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_comentario_principal` ADD CONSTRAINT `fk_tbl_comentario_principal_tbl_login1` FOREIGN KEY (`idLogin`) REFERENCES `tbl_login`(`idLogin`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_comentario_secundario` ADD CONSTRAINT `fk_tbl_comentario_secundario_tbl_comentario_principal1` FOREIGN KEY (`idComentarioPricipal`) REFERENCES `tbl_comentario_principal`(`idComentarioPricipal`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_comentario_secundario` ADD CONSTRAINT `fk_tbl_comentario_secundario_tbl_login1` FOREIGN KEY (`idLogin`) REFERENCES `tbl_login`(`idLogin`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_contato` ADD CONSTRAINT `fk_tblContato_tblOng1` FOREIGN KEY (`idOng`) REFERENCES `tbl_ong`(`idOng`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_endereco` ADD CONSTRAINT `fk_tblEndereco_tblEstado1` FOREIGN KEY (`idEstado`) REFERENCES `tbl_estado`(`idEstado`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_endereco_vagas` ADD CONSTRAINT `fk_tbl_endereco_vagas_tbl_endereco1` FOREIGN KEY (`idEndereco`) REFERENCES `tbl_endereco`(`idEndereco`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_endereco_vagas` ADD CONSTRAINT `fk_tbl_endereco_vagas_tbl_vagas1` FOREIGN KEY (`idVagas`) REFERENCES `tbl_vagas`(`idVagas`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_eventos` ADD CONSTRAINT `fk_tbl_eventos_tbl_endereco1` FOREIGN KEY (`idEndereco`) REFERENCES `tbl_endereco`(`idEndereco`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_eventos` ADD CONSTRAINT `fk_tbl_eventos_tbl_ong1` FOREIGN KEY (`idOng`) REFERENCES `tbl_ong`(`idOng`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_favoritos` ADD CONSTRAINT `fk_tbl_favoritos_tbl_ong1` FOREIGN KEY (`idOng`) REFERENCES `tbl_ong`(`idOng`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_favoritos` ADD CONSTRAINT `fk_tbl_favoritos_tbl_usuario1` FOREIGN KEY (`idUsuario`) REFERENCES `tbl_usuario`(`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_foto` ADD CONSTRAINT `fk_tbl_foto_tbl_eventos1` FOREIGN KEY (`tbl_eventos_idEventos`) REFERENCES `tbl_eventos`(`idEventos`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_informacoes_de_contato` ADD CONSTRAINT `fk_tblInformacoesDeContado_tblUsuario1` FOREIGN KEY (`idUsuario`) REFERENCES `tbl_usuario`(`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_login_endereco` ADD CONSTRAINT `fk_tbl_login_endereco_tbl_endereco1` FOREIGN KEY (`idEndereco`) REFERENCES `tbl_endereco`(`idEndereco`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_login_endereco` ADD CONSTRAINT `fk_tbl_login_endereco_tbl_login1` FOREIGN KEY (`idLogin`) REFERENCES `tbl_login`(`idLogin`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_login_reacao` ADD CONSTRAINT `fk_tbl_login_reacao_tbl_login1` FOREIGN KEY (`idLogin`) REFERENCES `tbl_login`(`idLogin`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_login_reacao` ADD CONSTRAINT `fk_tbl_login_reacao_tbl_reacao1` FOREIGN KEY (`idReacao`) REFERENCES `tbl_reacao`(`idReacao`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_meios_de_doacao` ADD CONSTRAINT `fk_tblMeiosDeDoacao_tblDadosBancario` FOREIGN KEY (`idDadosBancario`) REFERENCES `tbl_dados_bancarios`(`idDadosBancario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_ong` ADD CONSTRAINT `fk_tbl_ong_tbl_login1` FOREIGN KEY (`idLogin`) REFERENCES `tbl_login`(`idLogin`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_ong_categoria` ADD CONSTRAINT `fk_tblong_categoria_tbl_categorias1` FOREIGN KEY (`idCategorias`) REFERENCES `tbl_categorias`(`idCategorias`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_ong_categoria` ADD CONSTRAINT `fk_tblong_categoria_tbl_ong1` FOREIGN KEY (`idOng`) REFERENCES `tbl_ong`(`idOng`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_ong_estado` ADD CONSTRAINT `fk_tbl_ong_estado_tbl_estado1` FOREIGN KEY (`idEstado`) REFERENCES `tbl_estado`(`idEstado`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_ong_estado` ADD CONSTRAINT `fk_tblOngRegiao_tblOng1` FOREIGN KEY (`idOng`) REFERENCES `tbl_ong`(`idOng`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_ong_meios_de_doacao` ADD CONSTRAINT `fk_tblOngMeiosDeDoacao_tblMeiosDeDoacao1` FOREIGN KEY (`idmeiosDeDoacao`) REFERENCES `tbl_meios_de_doacao`(`idmeiosDeDoacao`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_ong_meios_de_doacao` ADD CONSTRAINT `fk_tblOngMeiosDeDoacao_tblOng1` FOREIGN KEY (`idOng`) REFERENCES `tbl_ong`(`idOng`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_ong_patrocinadores` ADD CONSTRAINT `fk_tblOngPatrocinadores_tblOng1` FOREIGN KEY (`idOng`) REFERENCES `tbl_ong`(`idOng`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_ong_patrocinadores` ADD CONSTRAINT `fk_tblOngPatrocinadores_tblPatrocinadores1` FOREIGN KEY (`idPatrocinadores`) REFERENCES `tbl_patrocinadores`(`idPatrocinadores`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_post` ADD CONSTRAINT `fk_tbl_post_tbl_ong1` FOREIGN KEY (`idOng`) REFERENCES `tbl_ong`(`idOng`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_post_comentario` ADD CONSTRAINT `fk_tbl_post_comentario_tbl_comentario_principal1` FOREIGN KEY (`idComentarioPricipal`) REFERENCES `tbl_comentario_principal`(`idComentarioPricipal`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_post_comentario` ADD CONSTRAINT `fk_tbl_post_comentario_tbl_post1` FOREIGN KEY (`idPost`) REFERENCES `tbl_post`(`idPost`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_post_reacao` ADD CONSTRAINT `fk_tbl_post_reacao_tbl_post1` FOREIGN KEY (`idPost`) REFERENCES `tbl_post`(`idPost`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_post_reacao` ADD CONSTRAINT `fk_tbl_post_reacao_tbl_reacao1` FOREIGN KEY (`idReacao`) REFERENCES `tbl_reacao`(`idReacao`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_seguidor` ADD CONSTRAINT `fk_tblUsuarioOng_tblOng1` FOREIGN KEY (`idOng`) REFERENCES `tbl_ong`(`idOng`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_seguidor` ADD CONSTRAINT `fk_tblUsuarioOng_tblUsuario1` FOREIGN KEY (`idUsuario`) REFERENCES `tbl_usuario`(`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_usuario` ADD CONSTRAINT `fk_tbl_usuario_tbl_login1` FOREIGN KEY (`idLogin`) REFERENCES `tbl_login`(`idLogin`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_usuario_evento` ADD CONSTRAINT `fk_tbl_usuario_evento_tbl_eventos1` FOREIGN KEY (`idEventos`) REFERENCES `tbl_eventos`(`idEventos`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_usuario_evento` ADD CONSTRAINT `fk_tbl_usuario_evento_tbl_usuario1` FOREIGN KEY (`idUsuario`) REFERENCES `tbl_usuario`(`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_vagas` ADD CONSTRAINT `fk_tbl_vagas_tbl_ong1` FOREIGN KEY (`idOng`) REFERENCES `tbl_ong`(`idOng`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_vagas_usuario` ADD CONSTRAINT `fk_tbl_vagas_usuario_tbl_usuario1` FOREIGN KEY (`idUsuario`) REFERENCES `tbl_usuario`(`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_vagas_usuario` ADD CONSTRAINT `fk_tbl_vagas_usuario_tbl_vagas1` FOREIGN KEY (`idVagas`) REFERENCES `tbl_vagas`(`idVagas`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_video` ADD CONSTRAINT `fk_tblVideo_tblPost1` FOREIGN KEY (`idPost`) REFERENCES `tbl_post`(`idPost`) ON DELETE NO ACTION ON UPDATE NO ACTION;
