abstract class Calculo {
  protected resultado: number = 0

  abstract executar (...numeros: number[]): void

  getResultado (): number {
    return this.resultado
  }
}

export default Calculo
