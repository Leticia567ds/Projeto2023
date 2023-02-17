-- CreateTable
CREATE TABLE `Login` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `motorista` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `CNH` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `frota` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `placa` VARCHAR(191) NOT NULL,
    `modelo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `manutencaoVeicular` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dataI` DATETIME(3) NOT NULL,
    `dataF` DATETIME(3) NULL,
    `valor` DOUBLE NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `operacaoVeicular` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_motor` INTEGER NOT NULL,
    `nomeM` VARCHAR(191) NOT NULL,
    `dataS` DATETIME(3) NOT NULL,
    `dataR` DATETIME(3) NULL,
    `descricao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `motorista` ADD CONSTRAINT `motorista_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `Login`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `operacaoVeicular` ADD CONSTRAINT `operacaoVeicular_id_motor_fkey` FOREIGN KEY (`id_motor`) REFERENCES `motorista`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
