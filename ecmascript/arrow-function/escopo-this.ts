function normalComThis (): void {
  console.log(this)
}
normalComThis()

const normalComThisEspecial = normalComThis.bind({ msg: 'Hello World!' })
normalComThisEspecial()
