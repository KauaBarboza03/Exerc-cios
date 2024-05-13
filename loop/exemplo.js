// For - loo contato
// for(let num = 0; num <= 10; num++){
// console.log(num);
// }

// Contagem regressiva
// for(let cont = 10; cont >= 0; cont--){
// console;log(cont)
// }

// while - condicional
// let salario = 1000 ;
// while(salario < 5000){
// salario += 100;
// console.log("O salário ainda é R$ " + salario)
// }

// do while - loop condicional
// let saldo = 1000;
// do{
// console.log("Esse é o saldo " + saldo);
// saldo += 100;
// }while (saldo < 5000);

// array

let fruta = ["Banana", "Laranja", "Maçã", "Pitaya", "Melancia"]

// console.log(frutas[3])

// forEach => percorre a lista
// frutas.forEach0(frutas => {
//  console.log("A fruta é: " + fruta)
// });

// Percorrendo uma lista com for
// for(let indice = 0; indice < 5; indice++){
//     console.log(frutas[indice]);
// }

// Percorrendo uma lista com for
//  .length => quantidade de elementos dentro de um array
for(let indice = 0; indice < frutas.length; indice ++){
    console.log(frutas[indice]);
    if(frutas[indice] == "Pitaya"){
        console.log("Eu gosto de " + frutas[indice]);
    }
}



