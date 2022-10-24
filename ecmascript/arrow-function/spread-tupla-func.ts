const tupla: [number, string, boolean] = [1, 'abc', false]

const recTupla = (a: number, b: string, c: boolean): void => console.log({ a, b, c })

recTupla(...tupla)
