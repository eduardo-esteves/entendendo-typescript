export function naoNegativo (alvo: any, nomeProPriedade: string): void {
  // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
  delete alvo[nomeProPriedade]

  Object.defineProperty(alvo, nomeProPriedade, {
    get: function (): any {
      return alvo['_' + nomeProPriedade]
    },
    set: function (valor: any): void {
      if (valor < 0) {
        throw new Error('Saldo inválido')
      } else {
        alvo['_' + nomeProPriedade] = valor
      }
    }
  })
}
