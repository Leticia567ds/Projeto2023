const express = require("express");

const router = express.Router();

const vm = require("../controller/veicularO");
const midle = require("../middlerware/middlerware");

router.post("*", midle.ValidaAcesso);

router.post("/operacao/", vm.create);
router.get("/operacao", vm.read);
router.put("/operacao/:id", vm.update);

module.exports = router;
