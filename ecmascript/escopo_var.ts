const estaFrio = false

if (estaFrio) {
  const acao = 'Colocar o casaco!'
}
// console.log(acao)

const segredo = 'externo!'
function revelar (): void {
  const segredo = 'interno'
  console.log(segredo)
}

revelar()
console.log(segredo)
