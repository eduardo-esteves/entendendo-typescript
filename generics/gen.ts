function imprimir<T> (args: T[]): void {
  args.forEach(elem => console.log(elem))
}

// resolved for type inference
imprimir([1, 2, 3])
// resolved in a explicit way
imprimir<number>([1, 2, 3])
imprimir<string>(['1', '2', '3'])
// objects dinamic
imprimir<{ nome: string, idade: number }>([
  { nome: 'Eduardo', idade: 43 },
  { nome: 'Larissa', idade: 6 }
])

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type Aluno = { nome: string, idade: number }

imprimir<Aluno>([
  { nome: 'Eduardo', idade: 43 },
  { nome: 'Larissa', idade: 6 }
])
