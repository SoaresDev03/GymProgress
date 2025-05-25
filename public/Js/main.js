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
    var username = document.getElementById('inputUsername').value.trim();
    var email = document.getElementById('inputEmail').value.trim();
    var senha = document.getElementById('inputSenha').value;
    var senha2 = document.getElementById('inputSenha2').value;
    var genero = document.getElementById('slcGenero').value;

    var usernameVar = inputUsername.value;
    var emailVar = inputEmail.value;
    var senhaVar = inputSenha.value;
    var generoVar = slcGenero.value;
    var senha2Var = inputSenha2.value;

    if (!username || !email || !senha || !senha2 || genero == "#") {
        alert("Todos os campos são obrigatórios.");
        return false;
    }

    if (!email.includes('@')) {
        alert("E-mail inválido. Deve conter '@'.");
        return false;
    }

    if (senha !== senha2) {
        alert("As senhas não coincidem.");
        return false;
    }


    if (senha.length < 8) {
        alert("A senha deve ter no mínimo 8 caracteres.");
        return false;
    }

    var temLetraMinuscula = /[a-z]/.test(senha);
    var temLetraMaiuscula = /[A-Z]/.test(senha);
    var temCaractereEspecial = /[!@#$%^&*()\-_=+[\]{};:,.<>?/|\\]/.test(senha);

    if (!temLetraMinuscula || !temLetraMaiuscula || !temCaractereEspecial) {
        alert(`A senha deve conter:

         Pelo menos uma letra minúscula.
         Pelo menos uma letra maiúscula.
         Pelo menos um caractere especial.
        `);
        return false;
    }
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nomeServer: usernameVar,
            emailServer: emailVar,
            senhaServer: senhaVar,
            generoServer: generoVar
        }),
    }).then(function (resposta) {
        if (resposta.ok) {
            alert("Cadastro realizado com sucesso!")
            setTimeout(() => {
                window.location.href = "login.html";
            }, 2000);

        } else {
            alert("Erro ao cadastrar. Tente novamente.");
        }
    }).catch(function (erro) {
        console.error("Erro na requisição: ", erro);
        alert("Erro na conexão com o servidor.");
    });

    return false;
}
