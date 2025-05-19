const prompt = require('prompt-sync')();
let quantidade = Number(prompt("Digite a quantidade de maçãs compradas:"));

let preco;

if (quantidade < 12) {
  preco = 0.30;
} else {
  preco = 0.25;
}

let total = quantidade * preco;

console.log("Quantidade de maçãs: " + quantidade);
console.log("Preço por maçã: R$ " + preco.toFixed(2));
console.log("Valor total da compra: R$ " + total.toFixed(2));
