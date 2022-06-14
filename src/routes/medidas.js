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

router.get("/artigo/:idArtigo", function (req, res) {
    medidaController.buscarArtigo(req, res);
});

router.get("/listaUser/:idUsuario", function (req, res) {
    medidaController.buscarListaUser(req, res);
});

router.post("/cadastrarArtigo", function (req, res) {
    medidaController.cadastrarArtigo(req, res);
});


module.exports = router;