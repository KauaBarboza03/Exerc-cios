//Exercício 1: Verificação de login
//Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
//nome de usuário é ;admin; e a senha é ;senha123;. Exiba uma mensagem indicando se o login
// bem-sucedido ou não.

//primeiro passo -> solicitar o nome do usuário.
let username = prompt("Digite um nome de usuário: ");

//segundo passo -> solicite ao usuário a senha.
let senha = prompt("Digite a senha: ");

//Verifique se o nome de usuário é "admim" e a senha é "senha123".
//Caso sim -> Exiba a mensagem de login bem sucedida.
//Caso náo -> Exiba a mensagem de usuário ou senha incorreta.
if (username == "admin" && senha == "senha123"){
    console.log("Login bem sucedido!")

} else {
    console.log ("Você não tem permissão para acesso!")
}
