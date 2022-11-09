@logarClasse
class Eletrodomestico {
  constructor () {
    console.log('Iniciou....')
  }
}

function logarClasse (classe: Eletrodomestico): void {
  console.log(classe)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const eletrodomestico = new Eletrodomestico()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const eletrodomestico2 = new Eletrodomestico()
