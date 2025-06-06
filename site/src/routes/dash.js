var express = require("express");
var router = express.Router();
var dashController = require("../controllers/dashController");

router.post("/buscarJogadoresPontuacoes", function (req, res) {
    dashController.buscarJogadoresPontuacoes(req, res);
});
router.get("/exibir", function (req, res) {
    dashController.exibirDados(req, res);
});
router.get("/exibir-melhor", function (req, res) {
    dashController.exibirDadosMelhor(req, res);
});

module.exports = router;