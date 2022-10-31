// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class Matematica {
  static PI: number = 3.1416

  static areaCirc (raio: number): number {
    return this.PI * raio * raio
  }
}

console.log(Matematica.areaCirc(20))
