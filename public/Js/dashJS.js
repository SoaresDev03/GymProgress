const { response } = require("express");

fetch("/dash/exibir")
.then(response=>response.json())
  .then(data => {

    const pontuacao = document.getElementById('totalAcertos');
    pontuacao.innerHTML = '';

      const listItem = document.createElement('li');
      listItem.innerHTML = `${player.pontos} pontos`;
      pontuacao.appendChild(listItem)
  })
  .catch(error => console.error('Erro ao buscar top 3 pontuadores:', error))