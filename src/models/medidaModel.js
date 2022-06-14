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

    if (filtro == 'a') {
        instrucaoSql = `select 
                            *
                            from tbArtigo where tipoArtigo like '%-${filtro}';`;
    } else {

        instrucaoSql = `select 
                        *
                        from tbArtigo where tipoArtigo like '${filtro}%';`;
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarListaUser(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", idUsuario)


    instrucaoSql = `select 
                            *
                            from tbUsuario, tbArtigo where idUsuario = '${idUsuario}' and fkUsuario = idUsuario;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarArtigo(idArtigo) {
    console.log("teste ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", idArtigo)


    instrucaoSql = `select 
                        *
                        from tbArtigo join tbUsuario on idArtigo = '${idArtigo}' and fkUsuario = idUsuario;`;


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

function cadastrarArtigo(id, titulo, descricao, capa, conteudo, tipo) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", id, titulo, descricao, capa, conteudo, tipo);
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO tbArtigo (tituloArtigo, descricaoArtigo, textoArtigo, tipoArtigo, capa, fkUsuario) VALUES ('${titulo}', '${descricao}', '${conteudo}', '${tipo}', '${capa}','${id}');
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
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
