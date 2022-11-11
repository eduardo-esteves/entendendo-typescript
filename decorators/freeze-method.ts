import { naoNegativo } from './freeze-on-property'

class ContaCorrente {
  @naoNegativo
  private saldo: number

  constructor (saldo: number) {
    this.saldo = saldo
  }

  @congelar
  sacar (valor: number): boolean {
    if (valor) {
      this.saldo -= valor
      return true
    }
    return false
  }

  @congelar
  getSaldo (): number {
    return this.saldo
  }
}

const cc = new ContaCorrente(10000)
cc.sacar(15000)
console.log(cc.getSaldo())

// cc.getSaldo = function () {
//   // eslint-disable-next-line @typescript-eslint/dot-notation
//   return this['saldo'] + 7000
// }

console.log(cc.getSaldo())

function congelar (alvo: any, nomeMetodo: string, descritor: PropertyDescriptor): void {
  console.log(alvo)
  console.log(nomeMetodo)
  descritor.writable = false
}
