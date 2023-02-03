-- DropForeignKey
ALTER TABLE `detalhes` DROP FOREIGN KEY `Detalhes_id_venda_fkey`;

-- AddForeignKey
ALTER TABLE `Detalhes` ADD CONSTRAINT `Detalhes_id_venda_fkey` FOREIGN KEY (`id_venda`) REFERENCES `Vendas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
