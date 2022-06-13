var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/campanhasPerfil/:idUsuario", function (req, res) {
    medidaController.buscarCampanhasPerfil(req, res);
});

router.get("/lista/:filtro", function (req, res) {
    medidaController.listar(req, res);
});

router.get("/campanhasDestaque", function (req, res) {
    medidaController.buscarCampanhasDestaque(req, res);
});

module.exports = router;