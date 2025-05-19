const prompt = require('prompt-sync')();
let numero = 0
let soma = 0
let qtdValor = 0

do{
valor = Number(prompt('informe um número diferente de zero ou informe zero para sair: '));
if(numero !== 0 ){
    soma += numero
    qtdValor++
}
}while(numero !== 0){
    console.log(`media: ${soma / qtdValor}`)
}