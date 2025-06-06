var quizModel = require("../models/quizModel");

function registrarResultadoQuiz(req, res) {
    const { fk_usuario, pontos, erros } = req.body;
    console.log("Dados recebidos para registrar quiz:", { fk_usuario, pontos, erros });

    if (fk_usuario === undefined || pontos === undefined || erros === undefined) {
        const mensagem = "Todos os campos (fk_usuario, pontos, erros) são obrigatórios";
        console.warn("Dados incompletos:", { fk_usuario, pontos, erros }, mensagem);
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

    quizModel.registrarResultadoQuiz(fk_usuario, pontos, erros)
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

function buscarPerguntas(req, res) {

    quizModel.buscarPerguntas()
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.error("Erro ao buscar perguntas:", erro)
            res.status(500).json({ erro: "Erro ao buscar perguntas" })
        });
}

module.exports = {
    registrarResultadoQuiz,
    buscarPerguntas
};