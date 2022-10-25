class Produto {
  precoDesconto: number

  constructor (public nome: string, public preco: number, public desconto: number = 0) {
    this.precoDesconto = preco
    if (this.desconto > 0) {
      this.calcDiscPrice(this.desconto)
    }
  }

  public calcDiscPrice (desconto: number): void {
    this.precoDesconto = this.preco * (1 - desconto)
  }
}

const prod1 = new Produto('Guraná', 2.5)
const prod2 = new Produto('Coca Cola', 3, 0.05)

console.log({ prod1, prod2 })
