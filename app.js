let listaNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female');
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', "Jogo do numero secreto");
    exibirTextoNaTela('p', "Escolha um número entre 1 e 100");
}
exibirMensagemInicial();

function verificarChute() {
    console.log('O botão foi clicado');
}
function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('h1', 'Você acertou');
        let mensagemTentativas = `Você descobriu o número secreto com  ${tentativas} ${palavraTentativa} `;
        exibirTextoNaTela('p', mensagemTentativas);
        document.querySelector('#reiniciar').removeAttribute('disabled');

    }
    else {

        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O numero secreto é menor que o chute');
        }
        else {
            exibirTextoNaTela('p', 'O numero secreto é maior que o chute');
        }
        tentativas++;
        limparCampo();
    }

}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroEscolhido)) { // includes vai verificar se na lista está o numero gerado aleatório;
        return gerarNumeroAleatorio();
    }
    else {
        listaNumerosSorteados.push(numeroEscolhido); // push vai colocar o numero gerado aleatorio dentro do array;
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = "";
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

