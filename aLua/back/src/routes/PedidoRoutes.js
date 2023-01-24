const express = require('express');
const Router = express.Router();

const Pedi = require('../controller/pedidoController.js');

Router.get('/bomblanches/dor', Pedi.listarAll);
Router.post('/bomblanches/criaDor', Pedi.criarPedido)

module.exports = Router;