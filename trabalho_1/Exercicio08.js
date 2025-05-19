const prompt = require('prompt-sync')();
let valA = 0
let valB = 0

valA = Number(prompt('informe o valor A: '));
valB = Number(prompt('informe o valor B: '));

if(valA < valB){
    console.log(valA, valB)
}else{
    console.log(valB, valA)
}