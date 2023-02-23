const express = require('express');

const router = express.Router();

const motorista = require('../controller/motor');

router.post('/motorista', motorista.create);
router.get('/motorista', motorista.read);
router.put('/motorista/', motorista.update);
router.delete('/motorista/:id', motorista.remove);

module.exports = router;