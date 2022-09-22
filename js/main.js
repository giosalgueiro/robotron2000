const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {

    elemento.addEventListener('click', (evento) => {

        manipulaDados(evento.target.textContent, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)

    })
})

function manipulaDados(operacao, controle) {

    const peca = controle.querySelector("[data-contador]")

    if (operacao === "-") {

        peca.value = parseInt(peca.value) - 1

    } else {
        peca.value = parseInt(peca.value) + 1

    }
}

function atualizaEstatisticas(peca) {
    console.log()

    estatisticas.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}
















// 1) .addEventListener("click") >> isso é um escutador de eventos do tipo clickk , ou seja, quando perceber um clicck faça alguma coisa
// 2) somar.addEventListener("click", (evento) => { //1 e 2 >> ao invés de escrever function (), pode usar "() =>", que é um arroz function



// function dizOi(nome) {
//     console.log(nome);
//     console.log("Bem-vindo ao Robotron 2000");
// }

// dizOi("Giovanna")