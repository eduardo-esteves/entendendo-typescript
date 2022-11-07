interface PersonP {
  nome: string
  idade: number
  profissao?: string
  [prop: string]: any
  saudar: (pessoa: PersonP) => void
}

function saudarPersonP (pessoa: PersonP): void {
  pessoa.saudar(pessoa)
}

function setPersonP (pessoa: PersonP): void {
  pessoa.nome = 'Janaina'
  pessoa.idade = 30
  pessoa.saudar(pessoa)
}

const peopleP: PersonP = {
  nome: 'João',
  idade: 27,
  saudar (pessoa: PersonP): void {
    console.log(`Olá ${pessoa.nome} voce tem ${pessoa.idade} anos `)
  }
}

saudarPersonP(peopleP)
setPersonP({
  nome: 'Eduardo',
  idade: 30,
  xyz: 123,
  saudar: peopleP.saudar
})
