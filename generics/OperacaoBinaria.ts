abstract class OperacaoBinaria <T, R> {
  constructor (public operando1: T, public operando2: T) {}

  abstract executar (): R
}

class SomaBinaria extends OperacaoBinaria<number, number> {
  executar (): number {
    return this.operando1 + this.operando2
  }
}

console.log(new SomaBinaria(3, 4).executar())
