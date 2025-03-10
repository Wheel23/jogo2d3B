const canvas = document.getElementById('jogo2D')
const ctx = canvas.getContext('2d')
const gravidade = 1
let iniciajogo = false
let colisaoAconteceu = false
document.addEventListener('keypress', (e) => {
    if(e.code == 'Space' && personagem.pulando == false){
        personagem.velocidY =  20
        personagem.pulando = true
        
    
    }})
document.addEventListener('click', (e) => {
    if(iniciajogo == true){
        location.reload()
    }
})

const personagem ={
    x: 100,
    y: canvas.height - 50,
    altura: 50,
    largura: 50,
    velocidY: 0,
    pulando: false
}

function desenharPersonagem(){
    ctx.fillStyle = 'black'
    ctx.fillRect(personagem.x, personagem.y, personagem.altura,personagem.largura)
}
function atualizarPersonagem(){
    if(personagem.pulando == true){
        personagem.velocidY -= gravidade
        personagem.y -= personagem.velocidY
        if(personagem.y >= canvas.height-50){
            personagem.velocidY = 0
            personagem.pulando = false
            personagem.y = canvas.height-50  
        }
    }
}

const obstaculo = {
	x:canvas.width-50,
	y:canvas.height-100,
	largura:50,
	altura:100,
	velocidadex: 5
}


function desenharObstaculo(){
	ctx.fillStyle= 'red'
	ctx.fillRect(obstaculo.x,obstaculo.y,obstaculo.largura,obstaculo.altura)
	
}


function AtualizaObstaculo(){
	obstaculo.x -= obstaculo.velocidadex
    if(obstaculo.x <= 0- obstaculo.largura){
        obstaculo.x = canvas.width
        obstaculo.velocidadex += 0.2
        let naltura = (Math.random() * -50) +100
        obstaculo.altura = naltura
        obstaculo.y = canvas.height - naltura
    }
}

function GameOver(){
    personagem.velocidY = 0
    obstaculo.velocidadex = 0
    console.log('parou')
    ctx.fillStyle = 'red'
    ctx.fillRect((canvas.width/2) -200,(canvas.height/2)-50, 400, 100)
    ctx.fillStyle='black'
    ctx.font = '50px Arial'
    ctx.fillText('GAME OVER',(canvas.width/2) -150,(canvas.height/2)-50, 400, 100 )
  
    
}

function Colisao(){
    if(
        personagem.x < obstaculo.x + obstaculo.largura && 
        personagem.x + personagem.largura > obstaculo.x && 
        personagem.y < obstaculo.y + obstaculo.altura &&
        personagem.y + personagem.altura > obstaculo.y
    ){
        colisaoAconteceu = true
        GameOver()
    }
}




function loop(){
    if(!iniciajogo){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    desenharPersonagem()
    atualizarPersonagem()
    AtualizaObstaculo()
    desenharObstaculo()
    Colisao()
    requestAnimationFrame(loop)
}
}

loop()