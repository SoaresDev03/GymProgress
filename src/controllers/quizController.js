var quizModel = require("../models/quizModel")

function registrarResultadoQuiz(req, res) {
    const { fk_usuario, acertos, erros } = req.body;
    console.log("Dados recebidos:", req.body);



    if (fk_usuario == undefined || acertos == undefined || erros == undefined) {
        res.status(400).send("Dados incompletos para registrar o quiz!");
    } else {
        quizModel.registrarResultadoQuiz(fk_usuario, acertos, erros)
            .then(resultado => res.json(resultado))
            .catch(erro => {
                console.log("Erro ao registrar quiz:", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    registrarResultadoQuiz
};
