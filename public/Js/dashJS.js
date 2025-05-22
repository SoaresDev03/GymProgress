fetch("/dash/exibir")
  .then(response => response.json())
  .then(data => {
    const pontuacao = document.getElementById('totalAcertos');
    pontuacao.innerHTML = '';

    data.forEach(player => {
      const listItem = document.createElement('li');
      listItem.textContent = `${player.pontos} pontos`;
      pontuacao.appendChild(listItem);
    });
  })
  .catch(error => console.error('Erro ao buscar top 3 pontuadores:', error));


function esconderForm() {
  formulario.style.display = "none";
}

function exibirForm() {
  if (formulario.style.display === "none") {
    formulario.style.display = "flex";
  } else {
    esconderForm()
  }
}


function exibirResposta() {
    const box = document.getElementById("boxResposta");
    box.classList.toggle("expandir");
}
