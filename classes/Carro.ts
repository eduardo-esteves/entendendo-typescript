class Carro {
  private velocidadeAtual: number = 0

  constructor (public marca: string, public modelo: string, private readonly velocidadeMaxima: number = 200) {}

  protected alterarVelocidade (delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta
    const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima

    if (velocidadeValida) {
      this.velocidadeAtual = novaVelocidade
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
    }

    return this.velocidadeAtual
  }

  acelerar (): number {
    return this.alterarVelocidade(5)
  }

  frear (): number {
    return this.alterarVelocidade(-5)
  }
}

const carro1 = new Carro('Ford', 'Ka', 185)

Array(50).fill(0).forEach(() => carro1.acelerar())
Array(10).fill(0).forEach(() => carro1.frear())

console.log({ carro1 })

// Simulando erros do lado do typescript

carro1.velocidadeAtual = 400

console.log({ carro1 })

class Ferrari extends Carro {
  constructor (modelo: string, velMaxima: number) {
    super('Ferrari', modelo, velMaxima)
  }

  public acelerar (): number {
    return this.alterarVelocidade(20)
  }

  public frear (): number {
    return this.alterarVelocidade(-15)
  }
}

const f40 = new Ferrari('F40', 324)

Array(50).fill(0).forEach(() => f40.acelerar())

console.log({ f40 })
