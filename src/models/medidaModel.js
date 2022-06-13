var database = require("../database/config");

function buscarUltimasMedidas(idUsuario) {
    instrucaoSql = `select 
                        distinct(tipoArtigo) as 'sistema',
                        count(tipoArtigo) as 'qtd'
                        from tbArtigo where fkUsuario = ${idUsuario} and tipoArtigo like 'campanha%'
                    group by tipoArtigo;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarCampanhasPerfil(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", idUsuario)
    instrucaoSql = `select 
                        *
                        from tbArtigo where fkUsuario = ${idUsuario} and tipoArtigo like 'campanha%'
                        order by idArtigo desc limit 2;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listar(filtro) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", filtro)
    instrucaoSql = `select 
                        *
                        from tbArtigo where tipoArtigo like '${filtro}%';`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarCampanhasDestaque(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    instrucaoSql = `select 
                        *
                        from tbArtigo where tipoArtigo like 'campanha%'
                        order by idArtigo desc limit 3;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarCampanhasPerfil,
    listar,
    buscarCampanhasDestaque
}
