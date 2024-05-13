// Exercício 7: Cálculo de desconto progressivo
// Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele
// pague. Faça um programa para loja, que solicite o valor total da compra ao usuário e assim,
// aplique um desconto de acordo com o valor total da compra. Siga a tabela:
// Valor total da compra até R$ 100,00: sem desconto.
// Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
// Valor total da compra acima de R$ 200,00: desconto de 20%.
// Exiba o valor final da compra com o desconto aplicado.

alert("Seja bem-vindo")

let valordacompra = parseFloat(prompt("Qual é o valor da sua compra?"));

let desconto;

if(valorTotal <= 100){

    desconto = 0;
    console.log("O valor da compra foi: " + desconto)
}
    
    else if(valorTotal <= 200){

        desconto = 0.10;
        console.log("O valor da compra foi: " + (desconto*100) + "%")
    }

    else(valorTotal >= 200); {

        desconto = 0.20;
        console.log("O valor da compra foi: " + (desconto*100) + "%")
    }

    let valorFinal = valorTotal - (valorTotal*desconto)

    console.log("O valor final da compra com desconto: R$ +" + valorFinal.toFixed(2))