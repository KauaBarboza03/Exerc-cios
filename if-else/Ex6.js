// Exercício 6: Verificação de idade
// Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior
// de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.

alert("Seja bem-vindo")

let anodenascimento = parseInt(prompt("Em que ano você nasceu?"));
// let anoatual = 2024
let anoatual = new Date () .getFullYear();
let idade = anoatual - anodenascimento

if(idade >= 18) {
    console.log("Você é maior de idade");
    console.log("Sua idade é " + idade);
    
}
else {
    console.log("Você é menor de idade");
    console.log("Sua idade é " + idade);
}

