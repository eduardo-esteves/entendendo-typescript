interface Conta {
  saldo: number
  depositar: (val: number) => void
}

interface contaCorrente {
  nome: string
  contaBancaria: Conta
  contatos: string[]
}

const contaBancaria: Conta = {
  saldo: 3456,
  depositar (valor) {
    this.saldo += valor
  }
}

const correntista: contaCorrente = {
  nome: 'Ana Silva',
  contaBancaria,
  contatos: ['54545454', '988888777']
}

correntista.contaBancaria.depositar(3000)
