function entrar() {

    var emailVar = ipt_email.value;
    var senhaVar = ipt_senha.value;

    // TODO: VERIFICAR AS VALIDAÇÕES QUE ELES ESTÃO APRENDENDO EM ALGORITMOS 
    if (emailVar == "" || senhaVar == "") {
        
        alert("Preencha todos os campos");
        return false;
    }

    if (emailVar.indexOf("@") == -1 || emailVar.indexOf(".com") == -1) {
        
        alert("Email inválido");
        return false;
    }

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nomeUsuario;
                sessionStorage.ID_USUARIO = json.idUsuario;
                sessionStorage.APELIDO_USUARIO = json.apelido;
                sessionStorage.BIO_USUARIO = json.bio;
                sessionStorage.FOTO_USUARIO = json.foto;

                setTimeout(function () {
                    window.location = "index.html";
                }, 1000); // apenas para exibir o loading

            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                alert(texto);
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

function cadastrar() {

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = ipt_nome.value;
    var apelidoVar = ipt_apelido.value;
    var emailVar = ipt_email.value;
    var senhaVar = ipt_cadastrarsenha.value;
    var confirmacaoSenhaVar = ipt_confirmarsenha.value;

    if (nomeVar == "" || apelidoVar == "" || emailVar == "" || senhaVar == "" || confirmacaoSenhaVar == "") {

        alert("Preencha todos os campos!");
        return false;
    }

    if (emailVar.indexOf("@") == -1 || emailVar.indexOf(".com") == -1) {

        alert("Email inválido!");
        return false;
    }

    if (senhaVar != confirmacaoSenhaVar) {

        alert("Senhas não conferem!");
        return false;
    }

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            apelidoServer: apelidoVar,
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            alert("Cadastrado com sucesso!");
            console.log("Cadastrado com sucesso!");
            location.href = 'login.html'
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;
}

function sair() {
    aguardar();
    sessionStorage.clear();
    finalizarAguardar();
    window.location = "index.html";
}