// Exercício 5: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// não.

alert("Seja bem-vindo ao calculador de ordem crescente e decrescente")

let número1 = parseFloat(prompt("Digite um primeiro número: "));

let número2 = parseFloat(prompt("Digite um segundo número: "));

let número3 = parseFloat(prompt("Digite um terceiro número: "));

if(número1<número2 && número2 < número3){
    alert("Seus Números estão em ordem decrescente")
}else {
    alert("Seus números estão em ordem crescente")
}

//  Desafio
// Escreva se os números informados estão de ordem crescente / descrescente / não ordenado