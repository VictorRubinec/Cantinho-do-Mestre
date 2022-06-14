// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var apelido = sessionStorage.APELIDO_USUARIO;

    var ApelidoUser = document.getElementById("user_nome");

    console.log(email);

    // window.alert(`Seja bem-vindo, ${nome}!`);
    if (apelido == undefined) {
        ApelidoUser.innerHTML = '';
        criar.style.display = 'none';
    } else {
        ApelidoUser.innerHTML = apelido;
        user_nome.href = 'perfil.html?idUsuario=' + sessionStorage.ID_USUARIO;
        b_user.href = 'listaUser.html?idUsuario=' + sessionStorage.ID_USUARIO;
        criar.style.display = 'block';
        
    }
    // finalizarAguardar();
}


function perfilUsuario() {
    // aguardar();

    fetch("/usuarios/usuarioPerfil", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idUsuario: data.idUsuario,
        })

    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO que pega dados do usuario")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {

                console.log(JSON.stringify(json));

                var ApelidoPerfil = document.getElementById("perfil_apelido");
                var NomePerfil = document.getElementById("perfil_nome");
                var BioPerfil = document.getElementById("perfil_bio");

                // window.alert(`Seja bem-vindo, ${email}!`);

                ApelidoPerfil.innerHTML = json[0].apelido;
                NomePerfil.innerHTML = json[0].nomeUsuario;
                BioPerfil.innerHTML = json[0].bio;

                // finalizarAguardar();

            });
            // acabarCarregar()
        } else {

            console.log("Houve um erro ao tentar pegar os dados da empresa!");

            // resposta.text().then(texto => {
            //     console.log(texto);
            //     finalizarAguardar(texto);
            // });
        }
    })
    // .catch(function (erro) {
    //     console.log(erro);
    //     alert(erro)
    // });
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../index.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.innerHTML = texto;
    }
}


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}

function mostrarSenha(campo) {

    if (campo == 1) {

        if (ipt_senha.type == 'text') {

            ipt_senha.type = 'password';
            olho1.src = 'assets/olho_d.png';
        } else {

            ipt_senha.type = 'text';
            olho1.src = 'assets/olho_a.png';
        }
    }

    if (campo == 2) {

        if (ipt_cadastrarsenha.type == 'text') {

            ipt_cadastrarsenha.type = 'password';
            olho2.src = 'assets/olho_d.png';
        } else {

            ipt_cadastrarsenha.type = 'text';
            olho2.src = 'assets/olho_a.png';
        }
    }

    if (campo == 3) {

        if (ipt_confirmarsenha.type == 'text') {

            ipt_confirmarsenha.type = 'password';
            olho3.src = 'assets/olho_d.png';
        } else {

            ipt_confirmarsenha.type = 'text';
            olho3.src = 'assets/olho_a.png';
        }
    }
}
