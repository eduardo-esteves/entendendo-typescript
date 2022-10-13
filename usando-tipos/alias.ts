interface Funcionario {
  supervisores: string[]
  baterPonto: (hora: number) => string
}

const empregado: Funcionario = {
  supervisores: ['Eduardo', 'Carlos'],
  baterPonto (hora: number): string {
    return hora <= 8 ? 'Ponto normal' : 'Fora do horário'
  }
}

const func = empregado.supervisores
const ponto = empregado.baterPonto(4)

console.log({ func, ponto })
