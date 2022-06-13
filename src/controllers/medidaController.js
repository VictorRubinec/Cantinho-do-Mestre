var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {

    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as ultimas medidas`);

    medidaModel.buscarUltimasMedidas(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarCampanhasPerfil(req, res) {

    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as ultimas medidas`);

    medidaModel.buscarCampanhasPerfil(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarCampanhasDestaque(req, res) {

    const limite_campanhas = 2;

    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as ultimas medidas`);

    medidaModel.buscarCampanhasDestaque(idUsuario, limite_campanhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listar(req, res) {

    var filtro = req.params.filtro;

    console.log(`Recuperando as ultimas medidas`);

    medidaModel.listar(filtro).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    buscarUltimasMedidas,
    buscarCampanhasPerfil,
    listar,
    buscarCampanhasDestaque
}