const express = require('express');

const router = express.Router();

const vm = require('../controller/veicularM');

router.post('/registrar', vm.create);
router.get('/registrar', vm.read);


module.exports = router;