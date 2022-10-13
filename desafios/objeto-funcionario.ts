const funcionario: { supervisores: string[], baterPonto: (hora: number) => string } = {
  supervisores: ['Eduardo', 'Carlos'],
  baterPonto (hora: number): string {
    return hora <= 8 ? 'Ponto normal' : 'Fora do horário'
  }
}

const funcionarios = funcionario.supervisores
const pontoString = funcionario.baterPonto(4)

console.log({ funcionarios, pontoString })
