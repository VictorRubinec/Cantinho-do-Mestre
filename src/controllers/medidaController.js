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

function buscarListaUser(req, res) {

    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as ultimas medidas` + idUsuario);

    medidaModel.buscarListaUser(idUsuario).then(function (resultado) {
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

function cadastrarArtigo(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var id = req.body.usuarioServer;
    var titulo = req.body.tituloServer;
    var descricao = req.body.descricaoServer;
    var capa = req.body.capaServer;
    var conteudo = req.body.conteudoServer;
    var tipo = req.body.tipoServer;

    if (id == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (titulo == undefined) {
        res.status(400).send("Seu titulo está undefined!");
    } else if (descricao == undefined) {
        res.status(400).send("Sua descricao está undefined!");
    } else if (conteudo == undefined) {
        res.status(400).send("Seu conteudo está undefined!");
    }

    medidaModel.cadastrarArtigo(id, titulo, descricao, capa, conteudo, tipo)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function buscarArtigo(req, res) {

    var idArtigo = req.params.idArtigo;

    console.log(`Recuperando as ultimas medidas ` + idArtigo);

    medidaModel.buscarArtigo(idArtigo).then(function (resultado) {
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
    buscarCampanhasDestaque,
    cadastrarArtigo,
    buscarArtigo,
    buscarListaUser
}