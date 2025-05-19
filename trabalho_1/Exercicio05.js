const prompt = require('prompt-sync')();
let peso = Number(prompt("Digite o peso em kg:"));
let altura = Number(prompt("Digite a altura em metros:"));

let imc = peso / (altura * altura);

console.log("Seu IMC é: " + imc.toFixed(2))

if (imc < 18.5) {
    console.log("Classificação: Baixo peso")
} else if ((imc >= 18.5) && (imc < 25)) {
    console.log("Classificação: Peso normal")
} else if ((imc >= 25) && (imc < 30)) {
    console.log("Classificação: Sobrepeso")
} else {
    console.log("Classificação: Obesidade")
}
