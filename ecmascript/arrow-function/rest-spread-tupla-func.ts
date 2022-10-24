const myTupla: [number, string, boolean] = [1, 'abc', false]

const receivTupla = (...params: [number, string, boolean]): void => console.log({ ...params })

receivTupla(...myTupla)
