/* eslint-disable */

/**
 * ES2015 module syntax is preferred over custom TypeScript modules and 
 * namespaces.eslint@typescript-eslint/no-namespace
*/

namespace Area {
  const PI = 3.14

  export const circunferencia = (raio: number): number => PI * Math.pow(raio, 2)

  export const retangulo = (base: number, altura: number): number => base * altura
}

console.log(Area.circunferencia(10))
console.log(Area.retangulo(10, 20))
