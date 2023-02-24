const express = require('express');

const router = express.Router();

const vm = require('../controller/veicularO');

router.post('/operacao/', vm.create);
router.get('/operacao', vm.read);


module.exports = router;