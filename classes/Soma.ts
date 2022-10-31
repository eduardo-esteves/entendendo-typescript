import Calculo from './Calculo'

class Soma extends Calculo {
  executar (...numeros: number[]): void {
    this.resultado = numeros.reduce((soma, val) => soma + val)
  }
}

const soma = new Soma()
soma.executar(10, 20, 30)
console.log(soma.getResultado())
