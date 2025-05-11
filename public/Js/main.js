

function togglePassword() {
    const passwordInput = document.getElementById('inputSenha');
    const password2Input = document.getElementById('inputSenha2');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';

    } else {
        passwordInput.type = 'password';

    }

    if (password2Input.type === 'password') {
        password2Input.type = 'text';

    } else {
        password2Input.type = 'password';
    }
}

function registrar() {

    var usuario = document.getElementById('inputUsername').value;
    var email = document.getElementById('inputEmail').value;
    var senha = document.getElementById('inputSenha').value;
    var senha2 = document.getElementById('inputSenha2').value

    var usuarioValido = true;
    var emailValido = true;
    var senhaValida = true;
    var senha2Valida = true;

    if (email.indexOf('@') === -1) {
        usuarioValido = false;
        alert("Usuário deve conter um '@' no e-mail.");
    }

    if (senha.length < 8) {
        senhaValida = false;
        alert("Senha deve ter no mínimo 8 caracteres.");
    } else {
        var temLetraMinuscula = false;
        var temLetraMaiuscula = false;
        var temCaractereEspecial = false;
        var caracteresEspeciais = "!@#$%^&*()-_=+[]{};:,.<>?/|\\";

        for (var indiceSenha = 0; indiceSenha < senha.length; indiceSenha++) {
            if (senha[indiceSenha] >= 'a' && senha[indiceSenha] <= 'z') {
                temLetraMinuscula = true;
            }
            if (senha[indiceSenha] >= 'A' && senha[indiceSenha] <= 'Z') {
                temLetraMaiuscula = true;
            }
            for (var indiceCaractereEspecial = 0; indiceCaractereEspecial < caracteresEspeciais.length; indiceCaractereEspecial++) {
                if (senha[indiceSenha] === caracteresEspeciais[indiceCaractereEspecial]) {
                    temCaractereEspecial = true;
                }
            }
        }

        if (!temLetraMinuscula || !temLetraMaiuscula || !temCaractereEspecial) {
            senhaValida = false;
            alert(` Senha deve ter pelo menos uma letra minúscula. \n
                Senha deve ter pelo menos uma letra maiúscula. \n
                Senha deve ter pelo menos um caractere especial.`);
        }
    }

    if (senha2 != senha) {
        senha2Valida = false;
        alert("As senhas não coincidem!")
    }

    if (emailValido && senhaValida && senha2Valida) {
        alert("Cadastro realizado com sucesso.");
        window.location.href = '../login.html';
    }

}