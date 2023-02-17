/*
  Warnings:

  - Added the required column `marca` to the `frota` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cargo` to the `Login` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_veic` to the `manutencaoVeicular` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CPF` to the `motorista` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_veic` to the `operacaoVeicular` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `frota` ADD COLUMN `marca` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `login` ADD COLUMN `cargo` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `manutencaoveicular` ADD COLUMN `id_veic` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `motorista` ADD COLUMN `CPF` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `operacaoveicular` ADD COLUMN `id_veic` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `manutencaoVeicular` ADD CONSTRAINT `manutencaoVeicular_id_veic_fkey` FOREIGN KEY (`id_veic`) REFERENCES `frota`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `operacaoVeicular` ADD CONSTRAINT `operacaoVeicular_id_veic_fkey` FOREIGN KEY (`id_veic`) REFERENCES `frota`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
