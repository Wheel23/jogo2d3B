const canvas = document.getElementById('jogo2D');
const ctx = canvas.getContext('2d');
let iniciajogo = false

document.addEventListener('keypress', (e) => {
    if (e.code == 'Space' && personagem.pulando == false) {
        personagem.velocidY = 20
        personagem.pulando = true


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
    constructor(x, y, w, h) {
        super(x, y, w, h)
    }
}




class obstaculo extends Entidade {
    constructor(x, y, w, h) {
        super(x, y, w, h)
    }
}

const personagem = new Personagem(100, canvas.height - 50, 50, 50)



function loop() {
    if (!iniciajogo) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        personagem.desenhar(ctx, 'black')
        //atualizarPersonagem()
        //AtualizaObstaculo()
        //desenharObstaculo()
        //Colisao()
        requestAnimationFrame(loop)
    }
}

loop()