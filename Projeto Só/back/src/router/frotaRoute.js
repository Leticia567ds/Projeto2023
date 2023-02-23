const express = require('express');

const router = express.Router();

const frota = require('../controller/frota');

router.post('/frota', frota.create);
router.get('/frota', frota.read);
router.put('/frota/', frota.update);
router.delete('/frota/:id', frota.remove);

module.exports = router;