// Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.

let numero = parseInt(prompt("Digite um número para ver a tabuada:"));

if (isNaN(numero)) {
    console.log("Por favor, insira um número válido.");
} else {
    console.log("Tabuada de " + numero + ":");
    for (let num = 1; num <= 10; num++) {
        console.log(numero + " x " + num + " = " + (numero * num));
    }
}

