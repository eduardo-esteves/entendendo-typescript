import Data from '../classes/Data'

abstract class OperacaoBinaria <T, R> {
  constructor (public operando1: T, public operando2: T) {}

  abstract executar (): R
}

class SomaBinaria extends OperacaoBinaria<number, number> {
  executar (): number {
    return this.operando1 + this.operando2
  }
}

class DiferencasEntreDatas extends OperacaoBinaria<Data, String> {
  getTime (data: Data): number {
    const { dia, mes, ano } = data
    return new Date(`${mes}/${dia}/${ano}`).getTime()
  }

  executar (): String {
    const t1 = this.getTime(this.operando1)
    const t2 = this.getTime(this.operando2)
    const diferenca = Math.abs(t1 - t2)
    const dia = 1000 * 60 * 60 * 24
    return `${Math.ceil(diferenca / dia)} dia(s)`
  }
}

console.log(new SomaBinaria(3, 4).executar())

const d1 = new Data(8, 11, 2022)
const d2 = new Data(5, 11, 2022)

console.log(new DiferencasEntreDatas(d1, d2).executar())
