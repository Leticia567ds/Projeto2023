const express = require('express');

const router = express.Router();


const Setor = require('../controller/setor');
const Produtos = require('../controller/produtos');
const Vendedores = require('../controller/vendedores');


router.post('/produtos/create', Produtos.create);
router.get('/produtos', Produtos.read)


router.post('/setores/create', Setor.create);
router.get('/setores', Setor.read)
router.get('/setores/:id', Setor.readOne)

router.post('/vendedores/create', Vendedores.create);
router.get('/vendedores', Vendedores.read)

module.exports = router;