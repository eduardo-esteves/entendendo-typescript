@log
class Logar {
  constructor () {
    console.log('Iniciou....')
  }
}

function log (constructor: Function): any {
  return class extends Logar {
    created_at: Date = new Date()
  }
}

console.log(new Logar())
