interface PersonP {
  nome: string
  idade: number
  profissao?: string
  [prop: string]: any
}

function saudarPersonP (pessoa: PersonP): void {
  console.log(`Olá ${pessoa.nome} voce tem ${pessoa.idade} anos `)
}

function setPersonP (pessoa: PersonP): void {
  pessoa.nome = 'Janaina'
  pessoa.idade = 30
  console.log(`Olá ${pessoa.nome} voce tem ${pessoa.idade} anos `)
}

const peopleP: PersonP = {
  nome: 'João',
  idade: 27
}

saudarPersonP(peopleP)
setPersonP({
  nome: 'Eduardo',
  idade: 30,
  xyz: 123
})
