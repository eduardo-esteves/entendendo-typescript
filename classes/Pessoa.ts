class Pessoa {
  private _idade: number = 0

  get idade (): number {
    return this._idade
  }

  set idade (val: number) {
    this._idade = (val >= 0) ? val : this._idade
  }
}

const pessoa1 = new Pessoa()
pessoa1.idade = 20

console.log(pessoa1.idade)
