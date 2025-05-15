// var database = require("../database/config");

// function selecionarDados() {
//     const instrucaoSql = `
//         select fk_usuario, acertos, data_resposta from resultado_quiz  
//         join usuario u on id_usuario=fk_usuario
//         where fk_usuario = ${id_usuario}; 
//         `;
//         // (${fk_usuario}, ${acertos}, ${data_resposta});
//         console.log("Executando SQL para registrar quiz:", instrucaoSql);
   
//         return database.executar(instrucaoSql);
// }

// module.exports = {
//     selecionarDados 
// };

var database = require("../database/config");

function selecionarDados(idUsuario) {
    const instrucaoSql = `
        SELECT 
            fk_usuario,
            acertos,
            erros,
            data_resposta
        FROM resultado_quiz
        join usuario on id_usuario=fk_usuario
        WHERE fk_usuario = ${idUsuario};
    `;
    console.log("Executando SQL para selecionar dados do usuário:", instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    selecionarDados
};