const express = require('express');

const router = express.Router();


const Setor = require('../controller/setor');
const Produtos = require('../controller/produtos');
const Vendedores = require('../controller/vendedores');
const Vendas = require('../controller/vendas');
const Detalhes = require('../controller/detalhes');


router.post('/produtos/create', Produtos.create);
router.get('/produtos', Produtos.read)


router.post('/setores/create', Setor.create);
router.get('/setores', Setor.read)
router.get('/setores/:id', Setor.readOne)

router.post('/vendedores/create', Vendedores.create);
router.get('/vendedores', Vendedores.read)

router.post('/vendas/create', Vendas.create);
router.get('/vendas', Vendas.read)
router.put('/vendas/:id', Vendas.update)
router.delete('/vendas/:id', Vendas.remove)
router.get('/vendas/:id', Vendas.readOne)

router.post('/detalhes/create', Detalhes.create);
router.get('/detalhes', Detalhes.read)
router.put('/detalhes/:id', Detalhes.update)
router.delete('/detalhes/:id', Detalhes.remove)


module.exports = router;