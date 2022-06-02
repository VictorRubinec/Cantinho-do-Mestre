// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var apelido = sessionStorage.APELIDO_USUARIO;

    var ApelidoUser = document.getElementById("user_nome");

    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        if (apelido == undefined) {
            ApelidoUser.innerHTML = '';
        } else {
            ApelidoUser.innerHTML = apelido;
        }
        // finalizarAguardar();
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
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
