var database = require("../database/config");

function selecionarDados(idUsuario) {
    const instrucaoSql = `
    SELECT 
        u.nome,
        r.fk_usuario,
        r.pontos,
        r.erros,
        r.data_resposta
    FROM resultado_quiz as r
    JOIN usuario as u ON r.fk_usuario = u.idUsuario
    WHERE u.idUsuario = ${Number(idUsuario)};
    `;
    console.log("Executando SQL para selecionar dados do usuário:", instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarJogadoresPontuacoes() {
    const instrucaoSql = `
        SELECT 
            usuario.idUsuario AS jogador_id, 
            usuario.nome AS nome_jogador, 
            MAX(r.pontos) AS pontos
        FROM resultado_quiz as r
        JOIN usuario ON r.fk_usuario = usuario.idUsuario
        GROUP BY usuario.idUsuario, usuario.nome
        ORDER BY pontos DESC
        LIMIT 10;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    selecionarDados,
    buscarJogadoresPontuacoes
};
