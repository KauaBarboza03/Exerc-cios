// Exercício 7: Cálculo de desconto progressivo
// Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele
// pague. Faça um programa para loja, que solicite o valor total da compra ao usuário e assim,
// aplique um desconto de acordo com o valor total da compra. Siga a tabela:
// Valor total da compra até R$ 100,00: sem desconto.
// Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
// Valor total da compra acima de R$ 200,00: desconto de 20%.
// Exiba o valor final da compra com o desconto aplicado.

alert("Seja bem-vindo")

let valordacompra = prompt("Qual é o valor da sua compra?")

if (valordacompra<100) {
    alert("Você não recebeu nenhum desconto");

    alert(valordacompra)
}

if (valordacompra>100 && valordacompra<200) {
    alert("Você recebeu um desconto de 10%")

    let percentual = 0.10; 
    let desconto = valordacompra * percentual % 100;
    let valortotal = valordacompra - desconto
    alert(valortotal)
}

if (valordacompra>=200) {
    alert("Você recebeu um desconto de 20%")

    let percentual = 0.20; 
    let desconto = valordacompra * percentual % 100;
    let valortotal = valordacompra - desconto
    alert(valortotal)
}



    

