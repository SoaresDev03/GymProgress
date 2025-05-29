const comecarQuiz = document.querySelector(".start");
const perguntas = document.querySelector(".questoes");
const questao = document.querySelector(".pergunta");
const respostas = document.querySelector("#respostas");
const proximaPergunta = document.querySelector(".next");
const resultado = document.getElementById("pontuacaoFinalJogo");
const pontuacaoDuranteJogo = document.getElementById("pontuacaoDuranteJogo");
const spanCertas = document.getElementById("spanCertas");
const spanErradas = document.getElementById("spanErradas");
const spanNumeroDaQuestaoAtual = document.getElementById("spanNumeroDaQuestaoAtual");
const qtdQuestoesSpan = document.getElementById("qtdQuestoes");
const spanQuestaoExibida = document.getElementById("spanQuestaoExibida");
const btnIniciarQuiz = document.getElementById("btnIniciarQuiz");

let perguntaAtual = 0;
let pontos = 0;
let listaDePerguntas = [];

comecarQuiz.addEventListener("click", start);
proximaPergunta.addEventListener("click", next);
window.onload = () => {
    const nomeUsuario = sessionStorage.getItem("NOME_USUARIO");
    if (nomeUsuario) {
        document.getElementById("b_usuario").textContent = nomeUsuario;
    }
};

function start() {
    comecarQuiz.style.display = "none";
    perguntas.classList.remove("hide");
    resultado.classList.add("hide");
    pontuacaoDuranteJogo.style.display = "flex";
    perguntaAtual = 0;
    pontos = 0;
    spanCertas.textContent = 0;
    spanErradas.textContent = 0;
    fetchPerguntas();
}

function fetchPerguntas() {
    fetch("/quiz/perguntas")
        .then(res => {
            if (!res.ok) {
                console.error(`Erro na requisição: ${res.status} - ${res.statusText}`);
                alert("Erro ao carregar as perguntas do quiz.");
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then(data => {
            if (!Array.isArray(data)) {
                console.error("Erro: Dados recebidos do servidor não são um array:", data);
                alert("Erro ao processar as perguntas do quiz.");
                return;
            }

            const perguntasAgrupadas = {};
            data.forEach(item => {
                if (!perguntasAgrupadas[item.idPergunta]) {
                    perguntasAgrupadas[item.idPergunta] = {
                        pergunta: item.pergunta,
                        respostas: []
                    };
                }
                perguntasAgrupadas[item.idPergunta].respostas.push({
                    text: item.resposta,
                    correct: item.correta == 1
                });
            });
            listaDePerguntas = Object.values(perguntasAgrupadas);
            qtdQuestoesSpan.textContent = listaDePerguntas.length;
            next();
        })
        .catch(error => {
            console.error("Erro ao buscar as perguntas:", error);
        });
}

function next() {
    if (perguntaAtual >= listaDePerguntas.length) {
        return finalizarQuiz();
    }

    const q = listaDePerguntas[perguntaAtual];
    spanNumeroDaQuestaoAtual.textContent = perguntaAtual + 1;
    spanQuestaoExibida.textContent = q.pergunta;
    respostas.innerHTML = "";
    sortearAlternativas(q.respostas).forEach(alt => {
        const btn = document.createElement("button");
        btn.classList.add("botoes", "answer");
        btn.textContent = alt.text;
        if (alt.correct) btn.dataset.correct = true;
        btn.addEventListener("click", selecionarRespostas);
        respostas.appendChild(btn);
    });

    proximaPergunta.classList.add("hide");
}

function selecionarRespostas(e) {
    const escolhido = e.target;
    const correta = escolhido.dataset.correct === "true";
    if (correta) pontos++;

    Array.from(respostas.children).forEach(btn => {
        btn.disabled = true;
        if (btn.dataset.correct === "true") {
            btn.classList.add("correto");
        } else {
            btn.classList.add("incorreto");
        }
    });

    proximaPergunta.classList.remove("hide");
    perguntaAtual++;
    spanCertas.textContent = pontos;
    spanErradas.textContent = perguntaAtual - pontos;
}

function finalizarQuiz() {
    perguntas.classList.add("hide");
    resultado.classList.remove("hide");
    pontuacaoDuranteJogo.style.display = "none";
    document.getElementById("spanPontuacaoFinal").textContent = pontos;
    document.getElementById("msgFinal").textContent = `Você acertou ${pontos} de ${listaDePerguntas.length} perguntas.`;
    proximaPergunta.classList.add("hide");
}

function sortearAlternativas(alts) {
    for (let i = alts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [alts[i], alts[j]] = [alts[j], alts[i]];
    }
    return alts;
}

btnIniciarQuiz.addEventListener("click", start);