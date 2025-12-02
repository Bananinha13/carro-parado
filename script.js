const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

  
const perguntas = [
    {
    enunciado: "se vocẽ ver o Lula ganhando a eleição tenovo qual seria sua reação",
    alternativas: [
        {
            texto: "Brava",
            afirmacao: "por que eu não gosta do Lula.",
        },
        {
            texto: "Feliz",
            afirmacao: "por que eu gosto do Lula.",
        }
    ]
},
{
    enunciado: "Vocẽ entra no zoologico mas ta na hora de fechar mais o dono falou que vocẽ pode ver so um animal qual é a sua escolha",
    alternativas: [
        {
            texto: "elefantes",
            afirmacao: "por que os Elefantes são mais legais.",
        },
        {
            texto: "girafas",
            afirmacao: "por que as Girafas são mais legais.",
        }
    ]
},
{
    enunciado: "vocẽ ganha duas viagens uma para ir no havai e a outra ir para os estados unito, mas vocẽ tenque escolher só uma, qual vocẽ iria escolher",
    alternativas: [
        {
            texto: "Havai",
            afirmacao: "Vou para o Havai para eu relachar.",
        },
        {
            texto: "Estados unidos",
            afirmacao: "Vou para os Estados Unidos para eu se diverdir.",
        }
    ]
},
{
    enunciado: "qual das duas professoras vocẽ escolheria para não ter mais aula com ela",
    alternativas: [
        {
            texto: "CARLA KUHN GRAUNKE",
            afirmacao: "Por que eu não gosto da Carla.",
        },
        {
            texto: "JUCIMARA ZANELATO",
            afirmacao: "Por que eu não gosto da Jucimara.",
        }
    ]
},
{
    enunciado: "qual bicho de estimação você escolheria",
    alternativas: [
        {
            texto: "Cachorro",
            afirmacao: "Eu prefiro o cachorro porque ele é muito devertido",
        },
        {
            texto: "Gato",
            afirmacao: "eu prefiro o cato porque ele é muito divertido",
        }
    ]
    },
];    

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + "E ";
    atual++;
    mostraPergunta();   
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2026...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
