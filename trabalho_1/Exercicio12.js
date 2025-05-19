const prompt = require('prompt-sync')();
let numero = 0
let i = 0

valor = Number(prompt('informe um número: '));

for( i ; i <= 10 ; i++){
   console.log(`${numero}x${i} = ${numero * i }`)
}