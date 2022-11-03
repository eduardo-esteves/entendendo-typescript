function saudar (pessoa: { nome: string, idade: number }): void {
  console.log(`Olá ${pessoa.nome} voce tem ${pessoa.idade} anos `)
}

function setPessoa (pessoa: { nome: string, idade: number }): void {
  pessoa.nome = 'Janaina'
  pessoa.idade = 30
  console.log(`Olá ${pessoa.nome} voce tem ${pessoa.idade} anos `)
}

const pessoa = {
  nome: 'João',
  idade: 27
}

saudar(pessoa)
setPessoa(pessoa)
