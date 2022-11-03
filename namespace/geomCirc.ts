/* eslint-disable */

/**
 * ES2015 module syntax is preferred over custom TypeScript modules and 
 * namespaces.eslint@typescript-eslint/no-namespace
*/

namespace Geometria {
  const PI = 3.14

  export const circunferencia = (raio: number): number => PI * Math.pow(raio, 2)
}
