const express = require('express');

const router = express.Router();

const motorista = require('../controller/motor');


router.get('/motorista', motorista.read);
router.post('/motorista/', motorista.create);
router.put('/motorista/:id', motorista.update);
router.delete('/motorista/:id', motorista.remove);

module.exports = router;