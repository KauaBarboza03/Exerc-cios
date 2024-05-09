// Exercício 4: Notas escolares
// Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das
// notas e a mensagem de APROVADO para média superior ou igual a 7,0 RECUPERAÇÃO para
// notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.

alert ("Seja bem-vindo ao avaliador de notas")

let Nota1 = parseFloat(prompt("Digite a nota do aluno 1: "));

let Nota2 = parseFloat(prompt("Digite a nota do aluno 2: "));

let Nota3 = parseFloat(prompt("Digite a nota do aluno 3: "));

let Nota4 = parseFloat(prompt("Digite a nota do aluno 4: "));

let notaTotal = Nota1 + Nota2 + Nota3 + Nota4;
let media = notaTotal/4;
alert(media);

if(media>7){
    
    alert("Aprovados , Parabéns")
}else {
    alert("Desaprovados , Não desistam")
}
    
