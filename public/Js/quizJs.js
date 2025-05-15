const listaDeQuestoes = [
    {
        pergunta: "Qual é o músculo mais forte do corpo humano em relação ao seu tamanho?",
        alternativaA: "Bíceps",
        alternativaB: "Quadríceps",
        alternativaC: "Masseter (mandíbula)",
        alternativaD: "Glúteo máximo",
        alternativaCorreta: "alternativaC"
    },
    {
        pergunta: "Qual é o principal músculo trabalhado no exercício supino reto?",
        alternativaA: "Dorsais",
        alternativaB: "Peitoral maior",
        alternativaC: "Deltóides",
        alternativaD: "Tríceps",
        alternativaCorreta: "alternativaB"
    },
    {
        pergunta: "Qual desses exercícios é considerado um dos melhores para desenvolver as costas?",
        alternativaA: "Leg Press",
        alternativaB: "Barra fixa",
        alternativaC: "Elevação lateral",
        alternativaD: "Rosca direta",
        alternativaCorreta: "alternativaB"
    },
    {
        pergunta: "Quantos grupos musculares principais existem no corpo humano?",
        alternativaA: "5",
        alternativaB: "8",
        alternativaC: "11",
        alternativaD: "14",
        alternativaCorreta: "alternativaC"
    },
    {
        pergunta: "Qual é o tempo ideal de descanso entre séries para hipertrofia muscular?",
        alternativaA: "15-30 segundos",
        alternativaB: "30-60 segundos",
        alternativaC: "60-90 segundos",
        alternativaD: "90-120 segundos",
        alternativaCorreta: "alternativaC"
    },
    {
        pergunta: "Qual desses nutrientes é mais importante para a recuperação muscular pós-treino?",
        alternativaA: "Carboidratos",
        alternativaB: "Proteínas",
        alternativaC: "Gorduras",
        alternativaD: "Vitaminas",
        alternativaCorreta: "alternativaB"
    },
    {
        pergunta: "Qual é o principal músculo trabalhado no agachamento?",
        alternativaA: "Panturrilhas",
        alternativaB: "Quadríceps e glúteos",
        alternativaC: "Abdominais",
        alternativaD: "Ombros",
        alternativaCorreta: "alternativaB"
    },
    {
        pergunta: "O que significa a sigla 'RM' na musculação?",
        alternativaA: "Repetições Máximas",
        alternativaB: "Resistência Muscular",
        alternativaC: "Repouso Mínimo",
        alternativaD: "Rotina Mensal",
        alternativaCorreta: "alternativaA"
    },
    {
        pergunta: "Qual desses exercícios é considerado um dos melhores para desenvolver os ombros?",
        alternativaA: "Desenvolvimento com halteres",
        alternativaB: "Rosca martelo",
        alternativaC: "Extensão de tríceps",
        alternativaD: "Cadeira extensora",
        alternativaCorreta: "alternativaA"
    },
    {
        pergunta: "Qual é a função principal do músculo abdominal?",
        alternativaA: "Flexão do tronco",
        alternativaB: "Extensão das pernas",
        alternativaC: "Rotação dos ombros",
        alternativaD: "Flexão dos braços",
        alternativaCorreta: "alternativaA"
    }
];

let DaQuestaoAtual = 0;
let pontuacaoFinal = 0;
let certas = 0;
let erradas = 0;
const quantidadeDeQuestoes = listaDeQuestoes.length;

let btnAcao; 

function onloadEsconder() {
    document.getElementById('pontuacao').style.display = "none";
    document.getElementById('jogo').style.display = "none";
}

function iniciarQuiz() {
    btnAcao = document.getElementById("btnAcao"); 

    document.getElementById('pontuacao').style.display = "flex";
    document.getElementById('jogo').style.display = "flex";
    document.getElementById('btnIniciarQuiz').style.display = "none";
    document.getElementById('UsernameExib').style.display = "none";

    document.getElementById('qtdQuestoes').innerHTML = quantidadeDeQuestoes;
    DaQuestaoAtual = 0;
    certas = 0;
    erradas = 0;
    pontuacaoFinal = 0;
    document.getElementById("spanCertas").innerHTML = certas;
    document.getElementById("spanErradas").innerHTML = erradas;


    preencherHTMLcomQuestaoAtual(DaQuestaoAtual);

    btnAcao.textContent = "Enviar resposta";
    btnAcao.onclick = processarResposta;
    btnAcao.disabled = false;

    document.getElementById('btnConcluir').disabled = true;
    document.getElementById('btnTentarNovamente').disabled = true;
    document.getElementById('pontuacaoFinalJogo').style.display = "none";
    document.getElementById('pontuacaoDuranteJogo').style.display = "flex";

}

function preencherHTMLcomQuestaoAtual(index) {
    habilitarAlternativas(true);
    desmarcarRadioButtons();
    limparCoresBackgroundOpcoes();
    const questaoAtual = listaDeQuestoes[index];
    
    document.getElementById("spanNumeroDaQuestaoAtual").innerHTML = index + 1;
    document.getElementById("spanQuestaoExibida").innerHTML = questaoAtual.pergunta;
    document.getElementById("labelOpcaoUm").innerHTML = questaoAtual.alternativaA;
    document.getElementById("labelOpcaoDois").innerHTML = questaoAtual.alternativaB;
    document.getElementById("labelOpcaoTres").innerHTML = questaoAtual.alternativaC;
    document.getElementById("labelOpcaoQuatro").innerHTML = questaoAtual.alternativaD;
}

function processarResposta() {
    const options = document.getElementsByName("option");
    let hasChecked = false;
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            hasChecked = true;
            break;
        }
    }

    if (!hasChecked) {
        alert("Não há alternativas escolhidas. Escolha uma opção.");
        return;
    }

    habilitarAlternativas(false);
    checarResposta(); 
    
    if (DaQuestaoAtual < quantidadeDeQuestoes) {
        btnAcao.textContent = "Próxima questão";
        btnAcao.onclick = carregarProximaQuestao;
        btnAcao.disabled = false; 
    } else {
        finalizarJogo();
    }
}

function carregarProximaQuestao() {
    
    preencherHTMLcomQuestaoAtual(DaQuestaoAtual);
    
    btnAcao.textContent = "Enviar resposta";
    btnAcao.onclick = processarResposta;
    btnAcao.disabled = false;
}


function habilitarAlternativas(ativar) {
    document.getElementById('primeiraOpcao').disabled = !ativar;
    document.getElementById('segundaOpcao').disabled = !ativar;
    document.getElementById('terceiraOpcao').disabled = !ativar;
    document.getElementById('quartaOpcao').disabled = !ativar;
}

function tentarNovamente() {
    DaQuestaoAtual = 0;
    pontuacaoFinal = 0;
    certas = 0;
    erradas = 0;
    
    iniciarQuiz(); 
}

function checarResposta() {
    const questaoAtual = listaDeQuestoes[DaQuestaoAtual];
    const respostaCorreta = questaoAtual.alternativaCorreta;
    const options = document.getElementsByName("option");
    let idCorreta = "";

    options.forEach((option) => {
        if (option.value === respostaCorreta) {
            idCorreta = option.labels[0].id;
        }
    });

    options.forEach((option) => {
        if (option.checked && option.value === respostaCorreta) {
            document.getElementById(option.labels[0].id).classList.add("text-success-with-bg");
            pontuacaoFinal++;
            certas++;
            document.getElementById("spanCertas").innerHTML = certas;
        } else if (option.checked && option.value !== respostaCorreta) {
            const idErrada = option.labels[0].id;
            document.getElementById(idErrada).classList.add("text-danger-with-bg");
            document.getElementById(idCorreta).classList.add("text-success-with-bg");
            erradas++;
            document.getElementById("spanErradas").innerHTML = erradas;
        }
    });
    DaQuestaoAtual++; 
}

function limparCoresBackgroundOpcoes() {
    const labels = document.querySelectorAll(".option");
    labels.forEach((label) => {
        label.classList.remove("text-success-with-bg", "text-danger-with-bg");
    });
}

function desmarcarRadioButtons() {
    const options = document.getElementsByName("option");
    options.forEach(option => option.checked = false);
}

function finalizarJogo() {
    let textoParaMensagemFinal = "";
    let classComCoresParaMensagemFinal = "";
    const porcentagemFinalDeAcertos = quantidadeDeQuestoes > 0 ? (pontuacaoFinal / quantidadeDeQuestoes) : 0;


    if (!sessionStorage.ID_USUARIO) {
        const mensagem = "Erro: Usuário não identificado. Faça login novamente.";
        console.error("ID do usuário não encontrado no sessionStorage", mensagem);
        alert(mensagem);
        return;
    }

    fetch("/quiz/registrar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            fk_usuario: sessionStorage.ID_USUARIO,
            acertos: certas,
            erros: erradas
        })
    })
    .then(res => {
        if (!res.ok) {
            return res.json().then(err => { 
                console.error("Erro na resposta do servidor:", err);
                throw err; 
            });
        }
        return res.json();
    })
    .then(data => {
        console.log("Resultado do quiz registrado:", data);
        alert("Quiz finalizado com sucesso!");
    })
    .catch(err => {
        const mensagem = err.message || "Erro ao salvar resultados: Tente novamente mais tarde.";
        console.error("Erro ao registrar quiz:", err, mensagem);
        alert(mensagem);
    });


    if (porcentagemFinalDeAcertos <= 0.3) {
        textoParaMensagemFinal = "Parece que você não estudou...";
        classComCoresParaMensagemFinal = "text-danger-with-bg";
    } else if (porcentagemFinalDeAcertos < 0.9) {
        textoParaMensagemFinal = "Pode melhorar na próxima, hein!";
        classComCoresParaMensagemFinal = "text-warning-with-bg";
    } else {
        textoParaMensagemFinal = "Uau, parabéns!";
        classComCoresParaMensagemFinal = "text-success-with-bg";
    }

    textoParaMensagemFinal += "<br> Você acertou " + Math.round(porcentagemFinalDeAcertos * 100) + "% das questões.";

    document.getElementById('jogo').style.display = "none";
    document.getElementById('pontuacaoDuranteJogo').style.display = "none";
    document.getElementById('pontuacaoFinalJogo').style.display = "block"; 
    document.getElementById('pontuacao').style.display = "flex";

    document.getElementById('msgFinal').innerHTML = textoParaMensagemFinal;
    
    document.getElementById('msgFinal').className = 'width-fit-content'; 
    document.getElementById('msgFinal').classList.add(classComCoresParaMensagemFinal);
    document.getElementById('spanPontuacaoFinal').innerHTML = pontuacaoFinal;

    document.getElementById('pontuacaoEJogo').style.flexDirection = "column";
    document.getElementById('pontuacaoEJogo').style.alignItems = "center";
    document.getElementById('pontuacaoEJogo').style.justifyContent = "center";

    btnAcao.disabled = true; 
    document.getElementById('btnConcluir').disabled = true; 
    document.getElementById('btnTentarNovamente').disabled = false;

    if (!sessionStorage.ID_USUARIO) {
        console.error("ID do usuário não encontrado no sessionStorage");
        alert("Erro: Usuário não identificado. Faça login novamente.");
        return;
    }

    fetch("/quiz/registrar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            fk_usuario: sessionStorage.ID_USUARIO,
            acertos: certas,
            erros: erradas
        })
    })
    .then(res => {
        if (!res.ok) {
            return res.json().then(err => { throw err; });
        }
        return res.json();
    })
    .then(data => {
        console.log("Resultado do quiz registrado:", data);
    })
    .catch(err => {
        console.error("Erro ao registrar quiz:", err);
        alert(`Erro ao salvar resultados: ${err.message || "Tente novamente mais tarde"}`);
    })

    .then(res => res.ok ? console.log("Resultado do quiz registrado") : console.error("Erro ao registrar quiz"))
    .catch(err => console.error("Erro na requisição:", err));
}