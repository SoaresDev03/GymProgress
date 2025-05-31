// var mysql = require("mysql2");

// // CONEXÃO DO BANCO MYSQL SERVER
// var mySqlConfig = {
//     host: process.env.DB_HOST,
//     database: process.env.DB_DATABASE,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     port: process.env.DB_PORT
// };

// function executar(instrucao) {

//     if (process.env.AMBIENTE_PROCESSO !== "producao" && process.env.AMBIENTE_PROCESSO !== "desenvolvimento") {
//         console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM .env OU dev.env OU app.js\n");
//         return Promise.reject("AMBIENTE NÃO CONFIGURADO EM .env");
//     }

//     return new Promise(function (resolve, reject) {
//         var conexao = mysql.createConnection(mySqlConfig);
//         conexao.connect();
//         conexao.query(instrucao, function (erro, resultados) {
//             conexao.end();
//             if (erro) {
//                 reject(erro);
//             }
//             console.log(resultados);
//             resolve(resultados);
//         });
//         conexao.on('error', function (erro) {
//             return ("ERRO NO MySQL SERVER: ", erro.sqlMessage);
//         });
//     });
// }

// module.exports = {
//     executar
// };

const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    connectionLimit: 10 // Ajuste conforme necessário
});

function executar(instrucao) {
    if (process.env.AMBIENTE_PROCESSO !== "producao" && process.env.AMBIENTE_PROCESSO !== "desenvolvimento") {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM .env OU dev.env OU app.js\n");
        return Promise.reject("AMBIENTE NÃO CONFIGURADO EM .env");
    }

    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => { // Obtém uma conexão do pool
            if (err) {
                console.error("Erro ao obter conexão do pool:", err);
                reject(err);
                return;
            }

            connection.query(instrucao, (erroQuery, resultados) => {
                connection.release(); // Devolve a conexão ao pool
                if (erroQuery) {
                    console.error("Erro ao executar a query:", erroQuery);
                    reject(erroQuery);
                    return;
                }
                console.log(resultados);
                resolve(resultados);
            });
        });
    });
}

module.exports = { executar };