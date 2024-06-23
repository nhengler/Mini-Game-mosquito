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
function posicaoRandomica(){

var larguraX = Math.floor(Math.random() * largura)
var alturaY = Math.floor(Math.random() * altura)
console.log(larguraX, alturaY)

//manipulação do HTML pelo DOM
var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosca.png'
mosquito.className = tamanhoMosquito() //aplicação do estilo criado em CSS
mosquito.style.left = larguraX + 'px'
mosquito.style.top = alturaY + 'px'
mosquito.style.position = 'absolute' //necessário para que as posições seja aplicadas
document.body.appendChild(mosquito)
}

function tamanhoMosquito(){
    var classe = Math.floor(Math.random() * 3)
    switch(classe){
        case 0:
        return 'mosquito'
        
        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }


}