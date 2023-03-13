const express = require("express");

const router = express.Router();

const vm = require("../controller/veicularM");
const midle = require("../middlerware/middlerware");

router.post("*", midle.ValidaAcesso);

router.post("/registrar", vm.create);
router.get("/registrar", vm.read);
router.put("/registrar/:id", vm.update);

module.exports = router;
