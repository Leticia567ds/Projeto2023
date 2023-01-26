const express = require('express');
const Router = express.Router();

const Pedi = require('../controller/pedidoController.js');

Router.get('/bomblanches/dor', Pedi.listarAll);
Router.post('/bomblanches/criaDor', Pedi.criarPedido);
Router.delete('/bomblanches/pedido/:id_pedido', Pedi.ExcluirPedido);
Router.put('/bomblanches/pedido/update', Pedi.UpdatePedido);
Router.put('/bomblanches/pedido/upCozinha', Pedi.UpCozinha);
Router.put('/bomblanches/pedido/upEntrega', Pedi.UpEntrega);

module.exports = Router;