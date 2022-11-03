class Estagiario {
  private _primeiroNome: string = ''

  get nome (): string {
    return this._primeiroNome
  }

  set nome (nome: string) {
    this._primeiroNome = (nome.length >= 3) ? nome : this._primeiroNome
  }
}

const estag = new Estagiario()

// console.log(estag._primeiroNome)
estag.nome = 'Le'
console.log(estag.nome)
estag.nome = 'Leonardo'
console.log(estag.nome)
