const express = require('express');

const router = express.Router();

const motorista = require('../controller/motor');
const midle = require('../middlerware/middlerware')

router.put('*',midle.ValidaAcesso);
router.post('*',midle.ValidaAcesso);
router.delete('*',midle.ValidaAcesso);

router.get('/motorista', motorista.read);
router.post('/motorista', motorista.create);
router.put('/motorista/:id', motorista.update);
router.delete('/motorista/:id', motorista.remove);

module.exports = router;