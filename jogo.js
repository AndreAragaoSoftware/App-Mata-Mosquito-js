
var altura = 0
var largura = 0
var vidas = 1
var tempo = 10

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {
   
    tempo -= 1

    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        alert('Vitória')
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

//Criando o mosquito
function posicaoRandomica() {

    //removendo o mosquito anterior (caso exista)
    if (document.getElementById('mosquito')) {
       document.getElementById('mosquito').remove()

       if(vidas > 3) {
        window.location.href = 'fim_de_jogo.html'
       }else {
        document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

        vidas++
       }
    }
    

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    // posiçao recebe 0 se for menor que 0 caso contrario recebe ela mesma
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    //criar o elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
    }

    
   
    document.body.appendChild(mosquito)

}

// tamanho radômico do mosquito
function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    
    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}


function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}


