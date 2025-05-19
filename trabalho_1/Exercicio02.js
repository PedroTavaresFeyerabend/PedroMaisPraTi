const prompt = require('prompt-sync')();
let idade = 0

idade = Number(prompt("Digite a idade:"));

if (idade >= 0 && idade <= 12) {
  console.log("Categoria: Criança");
} else if (idade >= 13 && idade <= 17) {
  console.log("Categoria: Adolescente");
} else if (idade >= 18 && idade <= 59) {
  console.log("Categoria: Adulto");
} else if (idade >= 60) {
  console.log("Categoria: Idoso");
} else {
  console.log("Idade inválida.");
}
