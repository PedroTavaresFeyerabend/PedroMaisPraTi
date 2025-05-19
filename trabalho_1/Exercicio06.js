const prompt = require('prompt-sync')();
let A = parseFloat(prompt("Digite o valor do lado A:"));
let B = parseFloat(prompt("Digite o valor do lado B:"));
let C = parseFloat(prompt("Digite o valor do lado C:"));

if (A + B > C && A + C > B && B + C > A) {
  console.log("Os valores formam um triângulo.");

  if (A === B && B === C) {
    console.log("Tipo: Triângulo Equilátero (todos os lados iguais)");
  } else if (A === B || A === C || B === C) {
    console.log("Tipo: Triângulo Isósceles (dois lados iguais)");
  } else if ((valorA !== valorB) && (valorB !== valorC) && (valorA !== valorC)){
    console.log("Tipo: Triângulo Escaleno (todos os lados diferentes)");
  }
} else {
  console.log("Os valores informados NÃO formam um triângulo.");
}
