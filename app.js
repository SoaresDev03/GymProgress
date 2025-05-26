// var ambiente_processo = 'producao';
var ambiente_processo = 'desenvolvimento';

var caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';

require("dotenv").config({ path: caminho_env });

var express = require("express");
var cors = require("cors");
var path = require("path");
const { GoogleGenAI } = require("@google/genai");
var PORTA_APP = process.env.APP_PORT;
var HOST_APP = process.env.APP_HOST;

var app = express();

const chatIA = new GoogleGenAI({ apiKey: process.env.MINHA_CHAVE });

var userRouter = require("./src/routes/usuarios");
var quizRouter = require("./src/routes/quiz");
var dashRouter = require("./src/routes/dash");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/usuarios", userRouter);
app.use("/quiz", quizRouter);
app.use("/dash", dashRouter);


app.listen(PORTA_APP, function () {
    console.log(`
   
     ########       ###  ###    ##### #####     ########        ##        ##   ##    ###########                  
   ##        ##      ##  ##     ##  ###  ##   ##        ##      ##        ##                 ##                      
   ##                 ####      ##   #   ##   ##        ##      ##        ##   ##           ##                   
   ##                  ##       ##       ##   ##        ##      ##        ##   ##          ##                   
   ##     #####        ##       ##       ##   ##        ##      ##        ##   ##        ##                    
   ##       #  ##      ##       ##       ##   ##      # #       ##        ##   ##      ##                                 
     ########          ##       ##       ##     ####### #####    ##########    ##    ###########                        

    \n\n\n                                                                                                 
    Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar .: http://${HOST_APP}:${PORTA_APP} :. \n\n
    Você está rodando sua aplicação em ambiente de .:${process.env.AMBIENTE_PROCESSO}:. \n\n
    \tSe .:desenvolvimento:. você está se conectando ao banco local. \n
    \tSe .:producao:. você está se conectando ao banco remoto. \n\n
    \t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'\n\n`);
});


app.post("/perguntar", async (req, res) => {
    const nivelTreino = req.body.nivelTreino;
    const grupoMuscular = req.body.grupoMuscular;
    const idade = req.body.idade;

    try {
        const resultado = await gerarResposta(nivelTreino,grupoMuscular,idade);
        res.json({ resultado });
    } catch (error) {
        res.status(500).json({ error: 'Erro interno do servidor' });
    }

});


async function gerarResposta(nivelTreino,grupoMuscular,idade) {
    try {
        const modeloIA = chatIA.models.generateContent({
            model: "gemini-2.0-flash",
            contents: `Dê no máximo 5 exercícios de ${grupoMuscular}, para um praticante ${nivelTreino} com idade ${idade}, utilizando no maximo 20 palavras para cada.`
        });

        const resposta = (await modeloIA).text;

        const respostaTratada = resposta
        .replace(/^##\s.*$/gmi, '')
        .replace(/\*\*(.*?)\*\*/g, '$1') 
        .replace(/\n{2,}/g, '\n\n')
        .trim();

        const tokens = (await modeloIA).usageMetadata;

        console.log(respostaTratada);
        console.log("Uso de Tokens:", tokens);

        return respostaTratada;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
