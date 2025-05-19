const prompt = require('prompt-sync')();


// Exibe o menu
console.log("===== MENU INTERATIVO =====");
console.log("1 - verifica se é par ou ímpar");
console.log("2 - Mostrar a data atual");
console.log("3 - saudação");

opcao = prompt("Escolha uma opção (1, 2 ou 3): ");
  switch (opcao) {
    case '1':
        let numero = 0

        numero = Number(prompt("Digite um número inteiro:"));
        
        if (numero % 2 === 0) {
          console.log("O número ${numero} é par.");
        } else {
          console.log("O número ${numero} é ímpar.");
        }
      break;
    case '2':
      console.log("Data atual: " + new Date().toLocaleString());
      break;
    case '3':
        const nome = prompt('Digite seu nome: ');
        console.log(`Olá, ${nome}! Bem-vindo(a)!`);
      break;
    default:
      console.log("Opção inválida. Por favor, escolha 1, 2 ou 3.");
  }

