// const listaDeQuestoes = [
//     {
//         pergunta: "Qual é o músculo mais forte do corpo humano em relação ao seu tamanho?",
//         alternativaA: "Bíceps",
//         alternativaB: "Quadríceps",
//         alternativaC: "Masseter (mandíbula)",
//         alternativaD: "Glúteo máximo",
//         alternativaCorreta: "alternativaC"
//     },
//     {
//         pergunta: "Qual é o principal músculo trabalhado no exercício supino reto?",
//         alternativaA: "Dorsais",
//         alternativaB: "Peitoral maior",
//         alternativaC: "Deltóides",
//         alternativaD: "Tríceps",
//         alternativaCorreta: "alternativaB"
//     },
//     {
//         pergunta: "Qual desses exercícios é considerado um dos melhores para desenvolver as costas?",
//         alternativaA: "Leg Press",
//         alternativaB: "Barra fixa",
//         alternativaC: "Elevação lateral",
//         alternativaD: "Rosca direta",
//         alternativaCorreta: "alternativaB"
//     },
//     {
//         pergunta: "Quantos grupos musculares principais existem no corpo humano?",
//         alternativaA: "5",
//         alternativaB: "8",
//         alternativaC: "11",
//         alternativaD: "14",
//         alternativaCorreta: "alternativaC"
//     },
//     {
//         pergunta: "Qual é o tempo ideal de descanso entre séries para hipertrofia muscular?",
//         alternativaA: "15-30 segundos",
//         alternativaB: "30-60 segundos",
//         alternativaC: "60-90 segundos",
//         alternativaD: "90-120 segundos",
//         alternativaCorreta: "alternativaC"
//     },
//     {
//         pergunta: "Qual desses nutrientes é mais importante para a recuperação muscular pós-treino?",
//         alternativaA: "Carboidratos",
//         alternativaB: "Proteínas",
//         alternativaC: "Gorduras",
//         alternativaD: "Vitaminas",
//         alternativaCorreta: "alternativaB"
//     },
//     {
//         pergunta: "Qual é o principal músculo trabalhado no agachamento?",
//         alternativaA: "Panturrilhas",
//         alternativaB: "Quadríceps e glúteos",
//         alternativaC: "Abdominais",
//         alternativaD: "Ombros",
//         alternativaCorreta: "alternativaB"
//     },
//     {
//         pergunta: "O que significa a sigla 'RM' na musculação?",
//         alternativaA: "Repetições Máximas",
//         alternativaB: "Resistência Muscular",
//         alternativaC: "Repouso Mínimo",
//         alternativaD: "Rotina Mensal",
//         alternativaCorreta: "alternativaA"
//     },
//     {
//         pergunta: "Qual desses exercícios é considerado um dos melhores para desenvolver os ombros?",
//         alternativaA: "Desenvolvimento com halteres",
//         alternativaB: "Rosca martelo",
//         alternativaC: "Extensão de tríceps",
//         alternativaD: "Cadeira extensora",
//         alternativaCorreta: "alternativaA"
//     },
//     {
//         pergunta: "Qual é a função principal do músculo abdominal?",
//         alternativaA: "Flexão do tronco",
//         alternativaB: "Extensão das pernas",
//         alternativaC: "Rotação dos ombros",
//         alternativaD: "Flexão dos braços",
//         alternativaCorreta: "alternativaA"
//     }
// ];

// let DaQuestaoAtual = 0;
// let pontuacaoFinal = 0;
// let certas = 0;
// let erradas = 0;
// const quantidadeDeQuestoes = listaDeQuestoes.length;

// let btnAcao;

// function onloadEsconder() {
//     document.getElementById('pontuacao').style.display = "none";
//     document.getElementById('jogo').style.display = "none";
// }

// function iniciarQuiz() {
//     btnAcao = document.getElementById("btnAcao");

//     document.getElementById('pontuacao').style.display = "flex";
//     document.getElementById('jogo').style.display = "flex";
//     document.getElementById('btnIniciarQuiz').style.display = "none";
//     document.getElementById('UsernameExib').style.display = "none";

//     document.getElementById('qtdQuestoes').innerHTML = quantidadeDeQuestoes;
//     DaQuestaoAtual = 0;
//     certas = 0;
//     erradas = 0;
//     pontuacaoFinal = 0;
//     document.getElementById("spanCertas").innerHTML = certas;
//     document.getElementById("spanErradas").innerHTML = erradas;


//     preencherHTMLcomQuestaoAtual(DaQuestaoAtual);

//     btnAcao.textContent = "Enviar resposta";
//     btnAcao.onclick = processarResposta;
//     btnAcao.disabled = false;

//     document.getElementById('pontuacaoFinalJogo').style.display = "none";
//     document.getElementById('pontuacaoDuranteJogo').style.display = "flex";

// }

// function preencherHTMLcomQuestaoAtual(index) {
//     habilitarAlternativas(true);
//     desmarcarRadioButtons();
//     limparCoresBackgroundOpcoes();
//     const questaoAtual = listaDeQuestoes[index];

//     document.getElementById("spanNumeroDaQuestaoAtual").innerHTML = index + 1;
//     document.getElementById("spanQuestaoExibida").innerHTML = questaoAtual.pergunta;
//     document.getElementById("labelOpcaoUm").innerHTML = questaoAtual.alternativaA;
//     document.getElementById("labelOpcaoDois").innerHTML = questaoAtual.alternativaB;
//     document.getElementById("labelOpcaoTres").innerHTML = questaoAtual.alternativaC;
//     document.getElementById("labelOpcaoQuatro").innerHTML = questaoAtual.alternativaD;
// }

// function processarResposta() {
//     const options = document.getElementsByName("option");
//     let hasChecked = false;
//     for (let i = 0; i < options.length; i++) {
//         if (options[i].checked) {
//             hasChecked = true;
//             break;
//         }
//     }

//     if (!hasChecked) {
//         alert("Não há alternativas escolhidas. Escolha uma opção.");
//         return;
//     }

//     habilitarAlternativas(false);
//     checarResposta();

//     if (DaQuestaoAtual < quantidadeDeQuestoes) {
//         btnAcao.textContent = "Próxima questão";
//         btnAcao.onclick = carregarProximaQuestao;
//         btnAcao.disabled = false;
//     } else {
//         finalizarJogo();
//     }
// }

// function carregarProximaQuestao() {

//     preencherHTMLcomQuestaoAtual(DaQuestaoAtual);

//     btnAcao.textContent = "Enviar resposta";
//     btnAcao.onclick = processarResposta;
//     btnAcao.disabled = false;
// }


// function habilitarAlternativas(ativar) {
//     document.getElementById('primeiraOpcao').disabled = !ativar;
//     document.getElementById('segundaOpcao').disabled = !ativar;
//     document.getElementById('terceiraOpcao').disabled = !ativar;
//     document.getElementById('quartaOpcao').disabled = !ativar;
// }

// function checarResposta() {
//     const questaoAtual = listaDeQuestoes[DaQuestaoAtual];
//     const respostaCorreta = questaoAtual.alternativaCorreta;
//     const options = document.getElementsByName("option");
//     let idCorreta = "";

//     options.forEach((option) => {
//         if (option.value === respostaCorreta) {
//             idCorreta = option.labels[0].id;
//         }
//     });

//     options.forEach((option) => {
//         if (option.checked && option.value === respostaCorreta) {
//             document.getElementById(option.labels[0].id).classList.add("text-success-with-bg");
//             pontuacaoFinal++;
//             certas++;
//             document.getElementById("spanCertas").innerHTML = certas;
//         } else if (option.checked && option.value !== respostaCorreta) {
//             const idErrada = option.labels[0].id;
//             document.getElementById(idErrada).classList.add("text-danger-with-bg");
//             document.getElementById(idCorreta).classList.add("text-success-with-bg");
//             erradas++;
//             document.getElementById("spanErradas").innerHTML = erradas;
//         }
//     });
//     DaQuestaoAtual++;
// }

// function limparCoresBackgroundOpcoes() {
//     const labels = document.querySelectorAll(".option");
//     labels.forEach((label) => {
//         label.classList.remove("text-success-with-bg", "text-danger-with-bg");
//     });
// }

// function desmarcarRadioButtons() {
//     const options = document.getElementsByName("option");
//     options.forEach(option => option.checked = false);
// }

// function finalizarJogo() {
//     let textoParaMensagemFinal = "";
//     let classComCoresParaMensagemFinal = "";
//     const porcentagemFinalDeAcertos = quantidadeDeQuestoes > 0 ? (pontuacaoFinal / quantidadeDeQuestoes) : 0;


//     if (!sessionStorage.ID_USUARIO) {
//         const mensagem = "Erro: Usuário não identificado. Faça login novamente.";
//         console.error("ID do usuário não encontrado no sessionStorage", mensagem);
//         alert(mensagem);
//         return;
//     }

//     fetch("/quiz/registrar", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//             fk_usuario: sessionStorage.ID_USUARIO,
//             acertos: certas,
//             erros: erradas
//         })
//     })
//         .then(res => {
//             if (!res.ok) {
//                 return res.json().then(err => {
//                     console.error("Erro na resposta do servidor:", err);
//                     throw err;
//                 });
//             }
//             return res.json();
//         })
//         .then(data => {
//             console.log("Resultado do quiz registrado:", data);
//             alert("Quiz finalizado com sucesso!");
//         })
//         .catch(err => {
//             const mensagem = err.message || "Erro ao salvar resultados: Tente novamente mais tarde.";
//             console.error("Erro ao registrar quiz:", err, mensagem);
//             alert(mensagem);
//         });


//     if (porcentagemFinalDeAcertos <= 0.3) {
//         textoParaMensagemFinal = "Parece que você não estudou...";
//         classComCoresParaMensagemFinal = "text-danger-with-bg";
//     } else if (porcentagemFinalDeAcertos < 0.9) {
//         textoParaMensagemFinal = "Pode melhorar na próxima, hein!";
//         classComCoresParaMensagemFinal = "text-warning-with-bg";
//     } else {
//         textoParaMensagemFinal = "Uau, parabéns!";
//         classComCoresParaMensagemFinal = "text-success-with-bg";
//     }

//     textoParaMensagemFinal += "<br> Você acertou " + Math.round(porcentagemFinalDeAcertos * 100) + "% das questões.";

//     document.getElementById('jogo').style.display = "none";
//     document.getElementById('pontuacaoDuranteJogo').style.display = "none";
//     document.getElementById('pontuacaoFinalJogo').style.display = "block";
//     document.getElementById('pontuacao').style.display = "flex";

//     document.getElementById('msgFinal').innerHTML = textoParaMensagemFinal;

//     document.getElementById('msgFinal').className = 'width-fit-content';
//     document.getElementById('msgFinal').classList.add(classComCoresParaMensagemFinal);
//     document.getElementById('spanPontuacaoFinal').innerHTML = pontuacaoFinal;

//     document.getElementById('pontuacaoEJogo').style.flexDirection = "column";
//     document.getElementById('pontuacaoEJogo').style.alignItems = "center";
//     document.getElementById('pontuacaoEJogo').style.justifyContent = "center";

//     btnAcao.disabled = true;
//     document.getElementById('btnConcluir').disabled = true;
//     document.getElementById('btnTentarNovamente').disabled = false;

//     if (!sessionStorage.ID_USUARIO) {
//         console.error("ID do usuário não encontrado no sessionStorage");
//         alert("Erro: Usuário não identificado. Faça login novamente.");
//         return;
//     }

//     fetch("/quiz/registrar", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//             fk_usuario: sessionStorage.ID_USUARIO,
//             acertos: certas,
//             erros: erradas
//         })
//     })
//         .then(res => {
//             if (!res.ok) {
//                 return res.json().then(err => { throw err; });
//             }
//             return res.json();
//         })
//         .then(data => {
//             console.log("Resultado do quiz registrado:", data);
//         })
//         .catch(err => {
//             console.error("Erro ao registrar quiz:", err);
//             alert(`Erro ao salvar resultados: ${err.message || "Tente novamente mais tarde"}`);
//         })

//         .then(res => res.ok ? console.log("Resultado do quiz registrado") : console.error("Erro ao registrar quiz"))
//         .catch(err => console.error("Erro na requisição:", err));
// }


// function esconderForm() {
//     formulario.style.display = "none";
// }

// function fechar() {
//     formulario.style.display = "none";
//     btnIniciarQuiz.style.display = "flex";
//     pontuacaoEJogo.style.display = "flex";
//     resposta.innerHTML = "";
// }

// function exibirForm() {
//     if (formulario.style.display == "none") {
//         formulario.style.display = "flex";
//         btnIniciarQuiz.style.display = "none";
//         document.getElementById('pontuacao').style.display = "none";
//         document.getElementById('jogo').style.display = "none";
//         pontuacaoEJogo.style.display = "none"
//     } else {
//         esconderForm()
//         pontuacaoEJogo.style.display = "flex"
//     }
// }

// async function gerarResposta() {
//     const selects = document.querySelectorAll("select");

//     for (let select of selects) {
//         if (select.value === "#") {
//             alert("Por favor, responda todas as perguntas antes de finalizar.");
//             return;
//         }
//     }

//     setTimeout
//     const box = document.getElementById("boxResposta");
//     box.classList.toggle("expandir");

//     const nivelTreino = document.getElementById('slcNivel').value;
//     const grupoMuscular = document.getElementById('slcGrupo').value;
//     const idade = document.getElementById('slcIdade').value;

//     const response = await fetch('/perguntar', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ nivelTreino, grupoMuscular, idade })
//     });

//     const data = await response.json();

//     resposta.style.display = 'block';
//     document.getElementById('resposta').innerHTML = data.resultado
//         .split('\n')
//         .filter(linha => linha.trim() !== '')
//         .map(linha => `<p>${linha.trim()}</p>`)
//         .join('');
// }








// // //////////////////////////////////////////////////////

// const comecarQuiz = document.querySelector(".start")
// const perguntas = document.querySelector(".questoes")
// const questao = document.querySelector(".pergunta")
// const respostas = document.querySelector(".respostas")
// const proximaPergunta = document.querySelector(".next")

// comecarQuiz.addEventListener("click", start)
// proximaPergunta.addEventListener("click", next)

// var perguntaAtual = 0
// var pontos = 0
// const fkQuiz = sessionStorage.getItem("fkQuiz")

// if (!fkQuiz) {
//     alert("Quiz não identificado.")
//     window.location.href = "../../home.html"
// }

// function start() {
//     comecarQuiz.style.display = "none"
//     perguntas.classList.remove("hide")
//     iniciarCronometro()
//     next()
//     // document.getElementById("cronometro").classList.remove("hide")
// }

// function sortearAlternativas(alternativas) {
//     for (var i = alternativas.length - 1; i > 0; i--) {
//         const sortear = Math.floor(Math.random() * (i + 1));
//         [alternativas[i], alternativas[sortear]] = [alternativas[sortear], alternativas[i]];
//     }
//     return alternativas;
// }

// function next() {
//     if (listaDePerguntas.length == perguntaAtual) {
//         return finalizarQuiz()
//     }

//     listaDePerguntas[perguntaAtual].respostas = sortearAlternativas(listaDePerguntas[perguntaAtual].respostas);

//     respostas.innerHTML = ""
//     questao.textContent = listaDePerguntas[perguntaAtual].pergunta

//     listaDePerguntas[perguntaAtual].respostas.forEach(answer => {
//         const novaResposta = document.createElement("button")
//         novaResposta.classList.add("botoes", "answer")
//         novaResposta.textContent = answer.text

//         if (answer.correct) {
//             novaResposta.dataset.correct = true
//         }

//         respostas.appendChild(novaResposta)

//         novaResposta.addEventListener("click", selecionarRespostas)
//         proximaPergunta.classList.add("hide")
//     })
// }

// function selecionarRespostas(event) {
//     const respostaClicada = event.target

//     if (respostaClicada.dataset.correct) {
//         pontos++
//     }

//     document.querySelectorAll(".answer").forEach(button => {
//         if (button.dataset.correct) {
//             button.classList.add("correto")
//         } else {
//             button.classList.add("incorreto")
//         }

//         button.disabled = true
//         proximaPergunta.classList.remove("hide")
//     })

//     proximaPergunta.classList.remove("hide")
//     perguntaAtual++
// }

// function finalizarQuiz() {
//     const qtdPerguntas = listaDePerguntas.length
//     proximaPergunta.classList.add("hide")

//     perguntas.innerHTML = `
//         <div class="msgFinal">
//             <p>
//                 Você acertou ${pontos} de ${qtdPerguntas} perguntas!
//             </p>
//             <span>
//                 Tente de novo ou acesse a dashboard e veja como foi seu desempenho comparado ao dos outros usuários
//             </span>
//             <button onclick="window.location.reload()" class="botoes end">
//                 Tentar novamente
//             </button>
//         </div>

        
//     `
//     enviarPontuacao(pontos, sessionStorage.ID_USUARIO);
// }

// var listaDePerguntas = [];

// window.onload = () => {
//     fetch(`/quiz/perguntas`)
//         .then(res => res.json())
//         .then(data => {
//             const perguntasAgrupadas = {}

//             data.forEach(item => {
//                 if (!perguntasAgrupadas[item.idPergunta]) {
//                     perguntasAgrupadas[item.idPergunta] = {
//                         pergunta: item.pergunta,
//                         respostas: []
//                     }
//                 }

//                 perguntasAgrupadas[item.idPergunta].respostas.push({
//                     text: item.resposta,
//                     correct: item.correta == 1
//                 })
//             })

//             listaDePerguntas = Object.values(perguntasAgrupadas)
//             next()
//         })
//         .catch(err => console.error("Erro ao carregar perguntas:", err))
// }


const comecarQuiz = document.querySelector(".start");
const perguntas = document.querySelector(".questoes");
const questao = document.querySelector(".pergunta");
const respostas = document.querySelector("#respostas");
const proximaPergunta = document.querySelector(".next");
const resultado = document.getElementById("resultado");

let perguntaAtual = 0;
let pontos = 0;
let listaDePerguntas = [];

comecarQuiz.addEventListener("click", start);
proximaPergunta.addEventListener("click", next);

function start() {
    comecarQuiz.style.display = "none";
    perguntas.classList.remove("hide");
    fetchPerguntas();
}

function fetchPerguntas() {
    fetch("/quiz/perguntas")
        .then(res => res.json())
        .then(data => {
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
            next();
        })
        .catch(err => {
            alert("Erro ao carregar perguntas.");
            console.error(err);
        });
}

function next() {
    if (perguntaAtual >= listaDePerguntas.length) {
        return finalizarQuiz();
    }

    const q = listaDePerguntas[perguntaAtual];
    questao.textContent = q.pergunta;
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
}

function finalizarQuiz() {
    perguntas.innerHTML = "";
    resultado.classList.remove("hide");
    resultado.innerHTML = `
        <p>Você acertou ${pontos} de ${listaDePerguntas.length} perguntas.</p>
        <button onclick="window.location.reload()">Tentar novamente</button>
    `;
}

function sortearAlternativas(alts) {
    for (let i = alts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [alts[i], alts[j]] = [alts[j], alts[i]];
    }
    return alts;
}


