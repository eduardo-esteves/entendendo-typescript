// eslint-disable-next-line @typescript-eslint/array-type
const avaliacoes: Array<number> = [10, 9.3, 7.7]

avaliacoes.push(8.4)
// @ts-expect-error
avaliacoes.push('5.5')
