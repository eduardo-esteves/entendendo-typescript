// @ts-nocheck

function echoMelhorado<T> (objeto: T): T { return objeto }

console.log(echoMelhorado('João').length)
// ERROR => Property 'length' does not exist on type '27'.ts(2339)
console.log(echoMelhorado(27).length)
