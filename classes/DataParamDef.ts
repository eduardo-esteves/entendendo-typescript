class DataParamDef {
  dia: number
  mes: number
  ano: number

  constructor (dia: number = 3, mes: number = 2, ano: number = 1990) {
    this.dia = dia
    this.mes = mes
    this.ano = ano
  }
}

const casamento = new DataParamDef()
casamento.dia = 4

console.log(casamento)

class DataConst {
  constructor (public dia: number = 3, public mes: number = 2, public ano: number = 1990) {}
}

const niver = new DataConst()
niver.dia = 4

console.log(niver)
