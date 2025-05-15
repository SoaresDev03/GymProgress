var express = require("express");
var router = express.Router();
var dashController = require("../controllers/dashController");

router.post("/exibir", function (req, res) {
    dashController.exibirDados(req, res);
});

module.exports = router;
