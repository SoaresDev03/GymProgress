var quizModel = require("../models/quizModel");

function registrarResultadoQuiz(req, res) {
    const { fk_usuario, acertos, erros } = req.body;
    console.log("Dados recebidos para registrar quiz:", { fk_usuario, acertos, erros });

    if (fk_usuario === undefined || acertos === undefined || erros === undefined) {
        const mensagem = "Todos os campos (fk_usuario, acertos, erros) são obrigatórios";
        console.warn("Dados incompletos:", { fk_usuario, acertos, erros }, mensagem);
        return res.status(400).json({ 
            error: "Dados incompletos",
            message: mensagem
        });
    }

    if (isNaN(fk_usuario)) {
        const mensagem = "ID do usuário deve ser um número";
        console.warn("Dados inválidos:", { fk_usuario }, mensagem);
        return res.status(400).json({ 
            error: "Dados inválidos",
            message: mensagem
        });
    }

    quizModel.registrarResultadoQuiz(fk_usuario, acertos, erros)
        .then(resultado => {
            console.log("Quiz registrado com sucesso:", resultado);
            res.status(200).json({ success: true, message: "Quiz registrado com sucesso", data: resultado }); 
        })
        .catch(erro => {
            const mensagem = "Erro ao registrar quiz: " + (erro.message || "Erro desconhecido");
            console.error("Erro ao registrar quiz:", erro, mensagem);
            res.status(500).json({ 
                error: "Erro no servidor",
                message: mensagem
            });
        });
}

module.exports = {
    registrarResultadoQuiz,
};