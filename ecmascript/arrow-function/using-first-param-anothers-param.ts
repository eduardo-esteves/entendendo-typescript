const contagemRegressiva2 = (inicio: number = 3, fim: number = inicio - 1): void => {
  console.log(`Valor inicial ${inicio} e final ${fim}`)

  while (inicio > fim) {
    console.log(inicio)
    inicio--
  }

  console.log('Fim!')
}

contagemRegressiva2()
contagemRegressiva2(10, 5)
