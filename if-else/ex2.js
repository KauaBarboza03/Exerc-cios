// Exercício 2: Verificação de dia da semana
// Escreva um programa que solicita ao usuário um número de 1 a 7 representando um dia da
// semana e exibe o nome correspondente a esse dia. Considere que 1 representa segunda-feira,
// 2 representa terça-feira e assim por diante.

alert ("Bem vindo")
let diasemana = prompt ("Diga um número de 1 a 7")

switch (diasemana)
{
    
    case "1":
        console.log("Segunda-feira")
        break;
    
    case "2":
        console.log("Terça-feira")
         break;
  
    case "3":
        console.log("Quarta-feira")
        break;
    
    case "4":
        console.log("Quinta-feira")
        break;
    
    case "5":
        console.log("Sexta-feira")
        break;
    
    case "6":
        console.log("Sabadão")
        break;
    
    case "7":
        console.log("Domingão")
        break;

        default:
            console.log("O número informado não é valido")
            break;
}