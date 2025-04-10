const setaEsquerda = document.getElementById('esquerda');
const setaDireita = document.getElementById('direita');
const conteudo = document.getElementById('conteudo');
const conteudoOriginal = conteudo.innerHTML;

let posicao;
let totalItens;
let itensVisiveis;

function configurarCarrossel() {
    if (window.innerWidth <= 500) {
        conteudo.innerHTML = conteudoOriginal;
        totalItens = 4;
        itensVisiveis = 1;
        posicao = 0; 
    } else if (window.innerWidth <= 1000) {
        conteudo.innerHTML = conteudoOriginal + conteudoOriginal;
        totalItens = 8;
        itensVisiveis = 2;
        posicao = 2; 
    } else {
        conteudo.innerHTML = conteudoOriginal + conteudoOriginal + conteudoOriginal;
        totalItens = 12;
        itensVisiveis = 4;
        posicao = 4; 
    }
}

function atualizarCarrossel() {
    const larguraItem = 100 / itensVisiveis;
    const deslocamento = -posicao * larguraItem;
    
    conteudo.style.transform = `translateX(${deslocamento}%)`;
    conteudo.style.transition = 'transform 0.5s ease-in-out';

    if (posicao > totalItens - itensVisiveis) {
        setTimeout(() => {
            posicao = itensVisiveis === 1 ? 0 : 1;
            conteudo.style.transition = 'none';
            atualizarCarrossel();
        }, 500);
    }
    
    if (posicao < 0) {
        setTimeout(() => {
            posicao = totalItens - itensVisiveis - (itensVisiveis === 1 ? 0 : 1);
            conteudo.style.transition = 'none';
            atualizarCarrossel();
        }, 500);
    }
}

setaDireita.addEventListener('click', () => {
    posicao++;
    atualizarCarrossel();
});

setaEsquerda.addEventListener('click', () => {
    posicao--;
    atualizarCarrossel();
});

function handleResize() {
    clearTimeout(window.resizeTimeout);
    window.resizeTimeout = setTimeout(() => {
        configurarCarrossel();
        atualizarCarrossel();
    }, 100);
}

configurarCarrossel();
atualizarCarrossel();
window.addEventListener('resize', handleResize);