// Construir um menu que é possivel escolher entre os exercicio anteriores, para se executado , 
// faça que o menu repita a sua execução até, 
// disponibilidade as opçÔes para o usuario , 
// até que seja executado sair

function exercicioImc() {
    let peso = parseFloat(prompt("Informe a seu peso (em kg): "));

    let altura = parseFloat(prompt("informe a sua altura (em metros): "));

    let imc = peso / (altura * altura);

    console.log("Seu IMC é " + imc)

    if (imc < 18.5) {
        console.log("abaixo do peso")
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        console.log("peso normal")
    }

    else if (imc >= 25 && imc <= 29.9) {
        console.log("Sobrepeso")
    }
    else if (imc >= 30 && imc <= 34.9) {
        console.log("Obesidade grau 1")
    }
    else if (imc >= 35.0 && imc <= 39.9) {
        console.log("Obesidade grau 2")
    }
    else {
        console.log("Obesidade grau 3")
    }
}

function exercicioNotas() {
    let Nota1 = parseFloat(prompt("Digite a nota 1: "));

    let Nota2 = parseFloat(prompt("Digite a nota 2: "));

    let Nota3 = parseFloat(prompt("Digite a nota 3: "));

    let Nota4 = parseFloat(prompt("Digite a nota 4: "));

    let notaTotal = Nota1 + Nota2 + Nota3 + Nota4;
    let media = notaTotal / 4;
    alert("a media do aluno: " + media.toFixed(2));

    if (media >= 7) {
        console.log("APROVADO")

    } else if (media >= 7 && media >= 5) {
        console.log("RECUPERAÇÃO")

    } else (media > 5); {
        console.log("REPROVADO")
    }
}

function exercicioDesconto() {

    let valorTotal = parseFloat(prompt("Qual é o valor da sua compra?"));

    let desconto;

    if (valorTotal <= 100) {

        desconto = 0;
        console.log("O valor da compra foi: " + desconto)
    }

    else if (valorTotal <= 200) {

        desconto = 0.10;
        console.log("O valor da compra foi: " + (desconto * 100) + "%")
    }

    else (valorTotal >= 200); {

        desconto = 0.20;
        console.log("O valor da compra foi: " + (desconto * 100) + "%")
    }

    let valorFinal = valorTotal - (valorTotal * desconto)

    console.log("O valor final da compra com desconto: R$ " + valorFinal.toFixed(2))
}

function Diadasemana() {
    let diasemana = prompt("Diga um número de 1 a 7")

    switch (diasemana) {

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
}

function exercicioLoop1() {
    for (let num = 1; num <= 10; num++) {
        console.log(num)
    }
}

function exercicioLoop2() {
    for (let num = 1; num <= 10; num++)
        if (num % 2 == 0)
            console.log(num)
}

let opcao;

do {opcao = window.prompt("MENU\nDigite a opção desejada:\n\n1 - Exercicio Imc \n\n2 - Exercicio Notas \n\n3 - Exercicio Desconto \n\n4 - Dias da Semana \n\n5 - Loop1 \n\n6 - Loop2")


    switch (opcao) {
        case "1":
            exercicioImc()
            break;

        case "2":
            exercicioNotas()
            break;

        case "3":
            exercicioDesconto()
            break;

        case "4":
            exercicioDiadasemana()
            break;

        case "5":
            exercicioLoop1()
            break;

        case "6":
            exercicioLoop2()
            break;

        default:
            console.log("Opção Invalida")
            break;
    }
} while (opcao != "sair");