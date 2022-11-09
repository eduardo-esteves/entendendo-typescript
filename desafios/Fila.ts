class Fila<T> {
  private readonly fila: T[]

  constructor (...fila: T[]) {
    this.fila = fila
  }

  entrar (nome: T): void {
    this.fila.push(nome)
  }

  proximo (): T | null {
    if (this.fila.length >= 0 && this.fila[0]) {
      const primeiro = this.fila[0]
      this.fila.splice(0, 1)
      return primeiro
    }
    return null
  }

  imprimir (): void {
    console.log(...this.fila)
  }
}

const fila = new Fila('Eduardo', 'Larissa')
console.log(fila)
console.log(fila.imprimir())
console.log(fila.proximo())
console.log(fila)
