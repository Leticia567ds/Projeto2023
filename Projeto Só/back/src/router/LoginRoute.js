const express = require('express');

const router = express.Router();

const Usuario = require('../controller/user');


router.get('/user', Usuario.read);
router.post('/login', Usuario.login);
router.post('/usuario', Usuario.create);

module.exports = router;