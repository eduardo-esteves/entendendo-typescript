interface Person {
  nome: string
  idade: number
}

function saudarPerson (pessoa: Person): void {
  console.log(`Olá ${pessoa.nome} voce tem ${pessoa.idade} anos `)
}

function setPerson (pessoa: Person): void {
  pessoa.nome = 'Janaina'
  pessoa.idade = 30
  console.log(`Olá ${pessoa.nome} voce tem ${pessoa.idade} anos `)
}

const people: Person = {
  nome: 'João',
  idade: 27
}

saudarPerson(people)
setPerson(people)
