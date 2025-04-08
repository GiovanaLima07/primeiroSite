const setaEsquerda = document.getElementById('esquerda');
const setaDireita = document.getElementById('direita');
const conteudo = document.getElementById('conteudo');

let posicao = 0;
const totalItens = 4; 

function atualizarCarrossel() {
    const deslocamento = -posicao * 25;
    conteudo.style.transform = `translateX(${deslocamento}%)`;
    conteudo.style.transition = 'transform 0.5s ease-in-out';
}

setaDireita.addEventListener('click', () => {
    if (posicao < totalItens - 1) {
        posicao++;
    } else {
        posicao = 0;
    }
    atualizarCarrossel();
});

setaEsquerda.addEventListener('click', () => {
    if (posicao > 0) {
        posicao--;
    } else {
        posicao = totalItens - 1;
    }
    atualizarCarrossel();
});


