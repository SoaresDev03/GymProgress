var quizModel = require("../models/quizModel")

// function registrarResultadoQuiz(req, res) {
//     const { fk_usuario, acertos, erros } = req.body;
//     console.log("Dados recebidos:", req.body);



//     if (fk_usuario == undefined || acertos == undefined || erros == undefined) {
//         res.status(400).send("Dados incompletos para registrar o quiz!");
//     } else {
//         quizModel.registrarResultadoQuiz(fk_usuario, acertos, erros)
//             .then(resultado => res.json(resultado))
//             .catch(erro => {
//                 console.log("Erro ao registrar quiz:", erro.sqlMessage);
//                 res.status(500).json(erro.sqlMessage);
//             });
//     }
// }


function registrarResultadoQuiz(req, res) {
    const { fk_usuario, acertos, erros } = req.body;
    console.log("Dados recebidos para registrar quiz:", { fk_usuario, acertos, erros });

    if (fk_usuario == undefined || acertos == undefined || erros == undefined) {
        console.log("Dados incompletos:", { fk_usuario, acertos, erros });
        return res.status(400).json({ 
            error: "Dados incompletos",
            message: "Todos os campos (fk_usuario, acertos, erros) são obrigatórios"
        });
    }

    if (isNaN(fk_usuario)) {
        return res.status(400).json({ 
            error: "Dados inválidos",
            message: "ID do usuário deve ser um número"
        });
    }

    quizModel.registrarResultadoQuiz(fk_usuario, acertos, erros)
        .then(resultado => {
            console.log("Quiz registrado com sucesso:", resultado);
            res.json({ success: true, message: "Quiz registrado com sucesso" });
        })
        .catch(erro => {
            console.error("Erro ao registrar quiz:", erro);
            res.status(500).json({ 
                error: "Erro no servidor",
                message: erro.sqlMessage || "Erro ao registrar quiz no banco de dados"
            });
        });
}

module.exports = {
    registrarResultadoQuiz
};
