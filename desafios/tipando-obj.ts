const contaBancaria = {
  saldo: 3456,
  depositar (valor) {
    this.saldo += valor
  }
}

const correntista = {
  nome: 'Ana Silva',
  contaBancaria,
  contatos: ['54545454', '988888777']
}

correntista.contaBancaria.depositar(3000)
