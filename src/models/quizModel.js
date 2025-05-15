var database = require("../database/config");

function registrarResultadoQuiz(fk_usuario, acertos, erros) {
    const instrucaoSql = `
        INSERT INTO resultado_quiz (fk_usuario, acertos, erros) 
        VALUES (${fk_usuario}, ${acertos}, ${erros});
    `;
    console.log("Executando SQL para registrar quiz:", instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    registrarResultadoQuiz 
};