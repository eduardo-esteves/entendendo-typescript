const contagemRegressiva = (inicio: number = 3): void => {
  console.log(`Valor inicial ${inicio}`)

  while (inicio > 0) {
    console.log(inicio)
    inicio--
  }

  console.log('Fim!')
}

contagemRegressiva()
contagemRegressiva(10)
