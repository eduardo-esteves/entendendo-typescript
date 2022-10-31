class Singlet {
  private static readonly instance: Singlet = new Singlet()

  private constructor () {}

  static getInstance (): Singlet {
    return Singlet.instance
  }

  agora (): Date {
    return new Date()
  }
}

console.log(Singlet.getInstance().agora())
