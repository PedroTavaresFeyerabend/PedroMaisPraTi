const prompt = require('prompt-sync')();
let nota = 0.0

nota = Number(prompt("Digite a nota (de 0 a 10):"));

if (nota < 0 || nota > 10) {
  console.log("Nota inválida. Digite um valor entre 0 e 10.");
} else if (nota >= 7) {
  console.log("Classificação: Aprovado");
} else if ((nota >= 5) && (nota <= 6)) {
  console.log("Classificação: Recuperação");
} else {
  console.log("Classificação: Reprovado");
}
