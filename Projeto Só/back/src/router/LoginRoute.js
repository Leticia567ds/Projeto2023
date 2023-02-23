const express = require('express');

const router = express.Router();

const Usuario = require('../controller/user');


router.post('/usuario', Usuario.create);
router.post('/login', Usuario.login);
router.get('/usuarios', Usuario.read);
router.update('/usuarios/id', Usuario.update);
router.delete('/usuarios/id', Usuario.del);


module.exports = router;