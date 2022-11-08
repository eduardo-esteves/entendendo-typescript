class OperacaoBinaria {
  constructor (public operando1: any, public operando2: any) {}

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  executar () {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    return this.operando1 + this.operando2
  }
}

console.log(new OperacaoBinaria('Bom ', 'dia').executar())
console.log(new OperacaoBinaria(3, 7).executar())
console.log(new OperacaoBinaria(3, 'Opa').executar())
