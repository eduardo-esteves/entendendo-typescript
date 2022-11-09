class FilaConstraints<T extends number | string> {
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

const filaConstraints = new FilaConstraints<string>('Eduardo', 'Larissa')
console.log(filaConstraints)
console.log(filaConstraints.imprimir())
console.log(filaConstraints.proximo())
console.log(filaConstraints)

const novaFilaConstraints = new FilaConstraints<number>(1, 2, 3, 4)
console.log(novaFilaConstraints)
