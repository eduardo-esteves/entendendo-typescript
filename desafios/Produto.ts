class Produto {
  constructor (public nome: string, public preco: number, public desconto: number = 0) {
    if (this.desconto > 0) {
      this.calcPreco(this.desconto)
    }
  }

  public calcPreco (desconto: number): void {
    this.preco = this.preco - (this.preco * desconto)
  }
}

const prod1 = new Produto('Guraná', 2.5)
const prod2 = new Produto('Coca Cola', 3, 0.05)

console.log({ prod1, prod2 })
