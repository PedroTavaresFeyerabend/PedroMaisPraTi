const prompt = require('prompt-sync')();
let numero = 0
let i = 0

numero = Number(prompt('informe um numero inteiro: '));

for( i = 0 ; i < 10; i++){
    console.log(numero)
}