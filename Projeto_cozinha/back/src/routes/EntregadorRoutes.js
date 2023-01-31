const express = require('express');
const Router = express.Router();

const Entre = require('../controller/entregadorController.js');

Router.get('/bomblanches/entrega', Entre.listarEntregador);
Router.post('/bomblanches/login', Entre.Login)

module.exports = Router;