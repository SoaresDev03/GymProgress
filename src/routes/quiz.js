var express = require("express");
var router = express.Router();
var quizController = require("../controllers/quizController");

router.post("/registrar", function (req, res) {
    quizController.registrarResultadoQuiz(req, res);
});


function finalizarJogo() {
    // ... código existente ...

    // Verificar se o ID do usuário está disponível
    if (!sessionStorage.ID_USUARIO) {
        console.error("ID do usuário não encontrado no sessionStorage");
        alert("Erro: Usuário não identificado. Faça login novamente.");
        return;
    }

    fetch("/quiz/registrar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            fk_usuario: sessionStorage.ID_USUARIO,
            acertos: certas,
            erros: erradas
        })
    })
    .then(res => {
        if (!res.ok) {
            return res.json().then(err => { throw err; });
        }
        return res.json();
    })
    .then(data => {
        console.log("Resultado do quiz registrado:", data);
        // Opcional: exibir mensagem de sucesso para o usuário
    })
    .catch(err => {
        console.error("Erro ao registrar quiz:", err);
        alert(`Erro ao salvar resultados: ${err.message || "Tente novamente mais tarde"}`);
    });
}
module.exports = router;
