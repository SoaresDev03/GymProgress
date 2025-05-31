var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idUsuario, nome, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(nome, email, senha, genero) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, genero);


    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha, genero) VALUES ('${nome}', '${email}', '${senha}', '${genero}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function contarUsuarios() {
    const instrucaoSql = `SELECT COUNT(*) AS total FROM usuario;`;
    return database.executar(instrucaoSql);
}

function obterTop3() {
    const instrucaoSql = `
           SELECT 
        u.nome, 
        MAX(r.pontos) AS total_acertos
    FROM resultado_quiz as r
    JOIN usuario as u ON r.fk_usuario = u.idUsuario
    GROUP BY u.idUsuario, u.nome
    ORDER BY total_acertos DESC
    LIMIT 3;
    `;
    return database.executar(instrucaoSql);
}

function UsuariosPorGenero() {
    const instrucaoSql = `
        SELECT genero, COUNT(*) AS quantidade
        FROM usuario
        GROUP BY genero;
    `;
    return database.executar(instrucaoSql);
}

function obterPosicaoRanking(idUsuario) {
    const instrucaoSql = `
        SELECT ranking.posicao, ranking.nome, ranking.total_acertos FROM (
            SELECT 
                u.idUsuario,
                u.nome, 
                MAX(r.pontos) AS total_acertos,
                RANK() OVER (ORDER BY MAX(r.pontos) DESC) AS posicao
            FROM resultado_quiz r
            JOIN usuario u ON r.fk_usuario = u.idUsuario
            GROUP BY u.idUsuario, u.nome
        ) AS ranking
        WHERE ranking.idUsuario = ${idUsuario};
    `;

    return database.executar(instrucaoSql);
}


module.exports = {
    autenticar,
    cadastrar,
    contarUsuarios,
    obterTop3,
    UsuariosPorGenero,
    obterPosicaoRanking
};
