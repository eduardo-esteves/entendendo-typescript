// Atribuição implicita
const usuario = {
  nome: 'João',
  idade: 27
}

// Atribuição explicita
const usuario2: { nome: string, idade: number } = {
  nome: 'João',
  idade: 27
}

console.log({ usuario, usuario2 })
