// var usuarioModel = require("../models/usuarioModel");

// function autenticar(req, res) {
//     var email = req.body.emailServer;
//     var senha = req.body.senhaServer;

//     if (email == undefined) {
//         res.status(400).send("Seu email está undefined!");
//     } else if (senha == undefined) {
//         res.status(400).send("Sua senha está indefinida!");
//     }
// }

// function cadastrar(req, res) {
//     var nome = req.body.nomeServer;
//     var email = req.body.emailServer;
//     var senha = req.body.senhaServer;

//     // Faça as validações dos valores
//     if (nome == undefined) {
//         res.status(400).send("Seu nome está undefined!");
//     } else if (email == undefined) {
//         res.status(400).send("Seu email está undefined!");
//     } else if (senha == undefined) {
//         res.status(400).send("Sua senha está undefined!");
//     }  else {

//         // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
//         usuarioModel.cadastrar(nome, email, senha)
//             .then(
//                 function (resultado) {
//                     res.json(resultado);
//                 }
//             ).catch(
//                 function (erro) {
//                     console.log(erro);
//                     console.log(
//                         "\nHouve um erro ao realizar o cadastro! Erro: ",
//                         erro.sqlMessage
//                     );
//                     res.status(500).json(erro.sqlMessage);
//                 }
//             );
//     }
// }

// module.exports = {
//     autenticar,
//     cadastrar
// }

var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        usuarioModel.autenticar(email, senha) // Chama a função autenticar do usuarioModel
            .then(
                function (resultado) {
                    if (resultado.length > 0) {
                        // Usuário autenticado com sucesso
                        res.json(resultado[0]); // Envia os dados do usuário (ou um token)
                    } else {
                        // Nenhum usuário encontrado com as credenciais fornecidas
                        res.status(403).send("Email e/ou senha inválidos!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        usuarioModel.cadastrar(nome, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar
};