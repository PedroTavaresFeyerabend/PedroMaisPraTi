const prompt = require('prompt-sync')();
let numero = 0
let i = 0
let total = 0

for( i ; i < 5 ; i++){
    numero = Number(prompt('informe um numero: '));
    total += numero
}
console.log(`a soma final dos números é : ${soma}`)