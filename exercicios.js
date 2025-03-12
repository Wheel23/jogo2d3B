class veiculo{
    #velocidade
    constructor(tipo,marca,cor,velocidade,passageiros){
        this.tipo = tipo
        this.marca = marca
        this.cor = cor
        this.#velocidade = velocidade
        this.passageiros = passageiros
    }
    acelerar = function(){
        this.#velocidade += 10
        console.log(this.#velocidade)
    }
    freiar = function(){
        this.#velocidade -= 10
        console.log(this.#velocidade)
        if(this.#velocidade <= 0){
            console.log('ESTA PARADO')
        }
    }
}
const carro = new veiculo(
    'conversivel',
    'Ford',
    'Preto',
   100,
    2
)

console.log(carro)
carro.acelerar()
carro.acelerar()
carro.freiar()

class aviao extends veiculo{
    #mach
    constructor(tipo,marca,cor,velocidade,passageiros, companhia){
        super(tipo,marca,cor,velocidade,passageiros);
        this.#mach = 10;
    }
    acelerar = function(){
        this.#mach += 10
        console.log(this.#mach)
    }
    freiar = function(){
        this.#mach -= 10
        console.log(this.#mach)
        if(this.#mach <= 0){
            console.log('ESTA PARADO')
        }
    }
}

const Aviao = new aviao('Comercial', '19 bis', 'amarelo',0, 0, 'Goleiro')

console.log(Aviao)


class barco extends veiculo{
    constructor(tipo,marca,cor,velocidade,passageiros, motor){
        super(tipo,marca,cor,velocidade,passageiros);
        this.motor = motor;
}
acelerar = function(){
    this.velocidade += 10
    console.log(this.velocidade)
}
freiar = function(){
    this.velocidade -= 10
    console.log(this.velocidade)
    if(this.velocidade <= 0){
        console.log('ESTA PARADO')
    }
}

}
const Barco = new barco('Comercial', 'TITANIO', 'amarelo', 0, 0, 'Goleiro 92')
console.log(Barco)

class jato extends veiculo{
    constructor(tipo,marca,cor,velocidade,passageiros, motor){
        super(tipo,marca,cor,velocidade,passageiros);
        this.motor = motor;
}
acelerar = function(){
    this.velocidade += 10
    console.log(this.velocidade)
}
freiar = function(){
    this.velocidade -= 10
    console.log(this.velocidade)
    if(this.velocidade <= 0){
        console.log('ESTA PARADO')
    }
}
}
const Jato = new jato('Comercial', '19 bis', 'amarelo',0, 0, 'Goleiro')

console.log(Jato)
Barco.acelerar()
Barco.freiar()
Jato.acelerar()
Jato.freiar()
Aviao.acelerar()
Aviao.freiar()

