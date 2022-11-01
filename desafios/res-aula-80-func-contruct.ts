// Exercício 1 - Classe
class Moto1 {
  constructor (public nome: string, public velocidade: number = 0) {}

  buzinar (): void {
    console.log('Toooooooooot!')
  }

  acelerar (delta: number): void {
    this.velocidade = this.velocidade + delta
  }
}

const moto1 = new Moto1('Ducati')
moto.buzinar()
console.log(moto1.velocidade)
moto1.acelerar(30)
console.log(moto1.velocidade)
