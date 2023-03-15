const express = require("express");

const router = express.Router();

const vm = require("../controller/veicularM");
const midle = require("../middlerware/middlerware");

router.post("*", midle.ValidaAcesso);

router.post("/registrar", vm.create);
router.get("/registrar", vm.read);
router.delete("/registrar/:id", vm.remove);
router.put("/registrar/:id", vm.update);
router.put("/registrar/alterar/:id", vm.alterar);
router.get("/registrar/relatorio", vm.gastoTotal);

module.exports = router;
