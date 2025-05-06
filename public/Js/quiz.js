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

]

let DaQuestaoAtual = 0
let pontuacaoFinal = 0
let tentativaIncorreta = 0
let certas = 0
let erradas = 0
let quantidadeDeQuestoes = listaDeQuestoes.length
let isUltima = DaQuestaoAtual == quantidadeDeQuestoes-1 ? true : false

function onloadEsconder() {
    document.getElementById('pontuacao').style.display = "none"
    document.getElementById('jogo').style.display = "none"
}

function iniciarQuiz() {
    document.getElementById('pontuacao').style.display = "flex"
    document.getElementById('jogo').style.display = "flex"
    document.getElementById('btnIniciarQuiz').style.display = "none"

    document.getElementById('qtdQuestoes').innerHTML = quantidadeDeQuestoes

    preencherHTMLcomQuestaoAtual(0)

    btnSubmeter.disabled = false
    btnProx.disabled = true
    btnConcluir.disabled = true
 btnTentarNovamente.disabled = true
}

function preencherHTMLcomQuestaoAtual(index) {
    habilitarAlternativas(true)
    const questaoAtual = listaDeQuestoes[index]
    DaQuestaoAtual = index
    console.log("questaoAtual")
    console.log(questaoAtual)
    document.getElementById("spanNumeroDaQuestaoAtual").innerHTML = Number(index) + 1 // ajustando porque o index começa em 0
    document.getElementById("spanQuestaoExibida").innerHTML = questaoAtual.pergunta;
    document.getElementById("labelOpcaoUm").innerHTML = questaoAtual.alternativaA;
    document.getElementById("labelOpcaoDois").innerHTML = questaoAtual.alternativaB;
    document.getElementById("labelOpcaoTres").innerHTML = questaoAtual.alternativaC;
    document.getElementById("labelOpcaoQuatro").innerHTML = questaoAtual.alternativaD;
}

function submeter() {
    const options = document.getElementsByName("option"); // recupera alternativas no html

    let hasChecked = false
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            hasChecked = true
            break
        }
    }

    if (!hasChecked) {
        alert("Não há alternativas escolhidas. Escolha uma opção.")
    } else {
        btnSubmeter.disabled = true
        btnProx.disabled = false

        habilitarAlternativas(false)

        checarResposta()
    }
}

function habilitarAlternativas(trueOrFalse) {
    let opcaoEscolhida = trueOrFalse ? false : true

    primeiraOpcao.disabled = opcaoEscolhida
    segundaOpcao.disabled = opcaoEscolhida
    terceiraOpcao.disabled = opcaoEscolhida
    quartaOpcao.disabled = opcaoEscolhida

}

function avancar() {
    btnProx.disabled = true
    btnSubmeter.disabled = false

    desmarcarRadioButtons()

    if (DaQuestaoAtual < quantidadeDeQuestoes - 1) {
        preencherHTMLcomQuestaoAtual(DaQuestaoAtual)
    } else if (DaQuestaoAtual == quantidadeDeQuestoes - 1) {
        alert("Atenção... a próxima é a ultima questão!")
        preencherHTMLcomQuestaoAtual(DaQuestaoAtual)
    } else {
        finalizarJogo()
    }
    limparCoresBackgroundOpcoes()
}

function tentarNovamente() {
    // atualiza a página
    window.location.reload()
}

function checarResposta() {
    const questaoAtual = listaDeQuestoes[DaQuestaoAtual] // questão atual 
    const respostaQuestaoAtual = questaoAtual.alternativaCorreta // qual é a resposta correta da questão atual

    const options = document.getElementsByName("option"); // recupera alternativas no html

    let alternativaCorreta = null // variável para armazenar a alternativa correta

    options.forEach((option) => {
        if (option.value === respostaQuestaoAtual) {
            console.log("alternativaCorreta está no componente: " + alternativaCorreta)
            alternativaCorreta = option.labels[0].id
        }
    })

    // verifica se resposta assinalada é correta
    options.forEach((option) => {
        if (option.checked === true && option.value === respostaQuestaoAtual) {
            document.getElementById(alternativaCorreta).classList.add("text-success-with-bg")
            pontuacaoFinal++
            certas++
            document.getElementById("spanCertas").innerHTML = certas
            DaQuestaoAtual++
        } else if (option.checked && option.value !== respostaQuestaoAtual) {
            const wrongLabelId = option.labels[0].id

            document.getElementById(wrongLabelId).classList.add("text-danger-with-bg")
            document.getElementById(alternativaCorreta).classList.add("text-success-with-bg")
            tentativaIncorreta++
            erradas++
            document.getElementById("spanErradas").innerHTML = erradas
            DaQuestaoAtual++
        }
    })
}

function limparCoresBackgroundOpcoes() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).classList.remove("text-danger-with-bg")
        document.getElementById(option.labels[0].id).classList.remove("text-success-with-bg")
    })
}

function desmarcarRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

function finalizarJogo() {
    let textoParaMensagemFinal = null
    let classComCoresParaMensagemFinal = null
    const porcentagemFinalDeAcertos = pontuacaoFinal / quantidadeDeQuestoes

    if (porcentagemFinalDeAcertos <= 0.3) {
        textoParaMensagemFinal = "Parece que você não estudou..."
        classComCoresParaMensagemFinal = "text-danger-with-bg"
    }
    else if (porcentagemFinalDeAcertos > 0.3 && porcentagemFinalDeAcertos < 0.9) {
        textoParaMensagemFinal = "Pode melhorar na próxima, hein!"
        classComCoresParaMensagemFinal = "text-warning-with-bg"
    }
    else if (porcentagemFinalDeAcertos >= 0.9) {
        textoParaMensagemFinal = "Uau, parabéns!"
        classComCoresParaMensagemFinal = "text-success-with-bg"
    }

    textoParaMensagemFinal += "<br> Você acertou " + Math.round((porcentagemFinalDeAcertos) * 100) + "% das questões."


    document.getElementById('msgFinal').innerHTML = textoParaMensagemFinal
    document.getElementById('msgFinal').classList.add(classComCoresParaMensagemFinal)
    document.getElementById('spanPontuacaoFinal').innerHTML = pontuacaoFinal

    document.getElementById('jogo').classList.add("text-new-gray")

    btnProx.disabled = true
    btnSubmeter.disabled = true
    btnConcluir.disabled = true
    btnTentarNovamente.disabled = true

}
