const express = require('express');

const router = express.Router();

const frota = require('../controller/frota');
const midle = require('../middlerware/middlerware')

router.put('*',midle.ValidaAcesso);
router.post('*',midle.ValidaAcesso);
router.delete('*',midle.ValidaAcesso);

router.post('/frota', frota.create);
router.get('/frota', frota.read);
router.put('/frota/:id', frota.update);
router.delete('/frota/:id', frota.remove);

module.exports = router;