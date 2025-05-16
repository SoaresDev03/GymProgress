var dashModel = require("../models/dashModel");

function exibirDados(req, res) {
    const idUsuario = sessionStorage.idUsuario;

    dashModel.selecionarDados() 
        .then(resultados => {
            if (resultados && resultados.length > 0) {
                res.json(resultados);
            } else {
                res.status(404).json({ mensagem: "Nenhum resultado encontrado para este usuário." });
            }
        })
        .catch(erro => {
            console.error("Erro ao obter dados do quiz:", erro);
            res.status(500).json({ mensagem: "Erro ao obter dados do quiz: " + erro.message });
        });
}

module.exports = {
    exibirDados
};