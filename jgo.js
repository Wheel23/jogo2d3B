const canvas = document.getElementById('jogo2D');
const ctx = canvas.getContext('2d');
let iniciajogo = false
let colisaoAconteceu = false

document.addEventListener('keypress', (e) => {
    if (e.code == 'Space' && personagem.pulando == false){
        personagem.saltar()
    }
})
document.addEventListener('click', (e) => {
    if (iniciajogo == true) {
        location.reload()
    }
})


class Entidade {
    #gravidade
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.#gravidade = 0.5
    }
    get gravidade() {
        return this.#gravidade
    }

    desenhar = function (ctx, cor) {
        ctx.fillStyle = cor
        ctx.fillRect(this.x, this.y, this.w, this.h)
    }


}

class Personagem extends Entidade {
    #pulando
    #velocidY
    #w
    #h
    constructor(x, y, w, h) {
        super(x, y, w, h)
        this.#pulando = false
        this.#velocidY = 0
        this.#h = 100
        this.#w = 50
        
    }
    saltar = function(){
         personagem.#velocidY = 15
        personagem.#pulando = true
        console.log('Saltou')
    
        
    }
    houveColisao(Obstaculo){
        personagem.#velocidY = 0
        Obstaculo.velocidade = 0
        ctx.fillStyle = 'red'
        ctx.fillRect((canvas.width/2) -200,(canvas.height/2)-50, 400, 100)
        ctx.fillStyle='black'
        ctx.font = '50px Arial'
        ctx.fillText('GAME OVER',(canvas.width/2) -150,(canvas.height/2)-50, 400, 100 )
    }

    

    get pulando(){
        return this.#pulando
    }
    atualizarPersonagem(){
        if(this.#pulando == true){
            this.#velocidY -= this.gravidade
            this.y -= this.#velocidY
            if(this.y >= canvas.height-50){
                this.#velocidY = 0
                this.#pulando = false
                this.y = canvas.height-50  
            }
        }
    }
    Colisao(Obstaculo){

        if(
            this.x < Obstaculo.x + Obstaculo.w && 
            this.x + this.w > Obstaculo.x && 
            this.y < Obstaculo.y + Obstaculo.h &&
            this.y + this.h > Obstaculo.y
        ){
           
           this.houveColisao(Obstaculo)
          
        }
    }
    
}


class obstaculo extends Entidade {
    #velocidadex
    #largura
    constructor(x, y, w, h) {
        super(x, y, w, h)
        this.#largura = 100
        this.#velocidadex = 5
    }
     
    AtualizaObstaculo(){
        this.x -= this.#velocidadex
        if(this.x <= 0- this.#largura){
            this.x = canvas.width
            this.#velocidadex += 0.2
            let naltura = (Math.random() * -50) +100
            this.altura = naltura
            this.y = canvas.height - naltura
        }
    }
    get velocidade(){
        return this.#velocidadex
    }

    set velocidade(valor){
        if(valor >= 0){
        return this.#velocidadex = valor
    }
    }
}

const Obstaculo = new obstaculo(canvas.width-50, canvas.width-100, 50, 100,5)

const personagem = new Personagem(100, canvas.height - 50, 50, 50)



function loop() {
    if (!iniciajogo) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        personagem.desenhar(ctx, 'black')
        personagem.atualizarPersonagem()
        Obstaculo.AtualizaObstaculo()
        Obstaculo.desenhar(ctx, 'red')
        personagem.Colisao(Obstaculo)
        requestAnimationFrame(loop)
        
    }
}

loop()