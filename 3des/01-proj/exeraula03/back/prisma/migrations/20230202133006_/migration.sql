/*
  Warnings:

  - Added the required column `valor` to the `Produtos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `produtos` ADD COLUMN `valor` DOUBLE NOT NULL;
