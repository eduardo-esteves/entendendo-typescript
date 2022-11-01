class Objeto2D {
  constructor (public base: number = 0, public altura: number = 0) {}
}

class Retang extends Objeto2D {
  area (): number {
    return this.base * this.altura
  }
}

const retang = new Retang(5, 7)
console.log(retang.area())
