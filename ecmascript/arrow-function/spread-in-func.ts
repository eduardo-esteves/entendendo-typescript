// Rest Operator
const retornarArray = (a: number, ...args: number[]): number[] => args

// Spread Operator
const numeros = [1, 2, 3, 4, 5, 6, 7]
console.log(retornarArray(2, ...numeros))
