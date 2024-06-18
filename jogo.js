var altura = 0;
var largura = 0;

/* A função foi criada para mostrar no console a alteração em tempo real do tamanho
da tela onde o jogo irá rodar*/
function ajusteDeTamanho(){             
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(largura, altura);
} 

ajusteDeTamanho()

/* este trecho gera posições aletórias para o mosquito no game */
var larguraX = Math.floor(Math.random() * largura)
var alturaY = Math.floor(Math.random() * altura)
console.log(larguraX, alturaY)