// function calc() { }

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

function Registrar(){

    alert('Usuario cadastrado com sucesso!')

}