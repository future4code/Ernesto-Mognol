// EXERCICIO DE INTERPRETAÇÃO

// EXERCÍCIO 1

//Código testa se o número inserido é par ou ímpar. Para números pares retorna "Passou no teste". Para números ímpares retorna "Não passou no teste."

// EXERCÍCIO 2

// a. Para facilitar o trabalho do operador de caixa, de uma forma que este não precise consultar tabelas de preço manualmente para determinar preço por quilo.
// b. Retorna "O preço da fruta maçã é R$2.25"
// c. O programa nunca irá passar para o próximo bloco e nunca irá imprimir a mensagem com o preço da fruta para o operador.

// EXERCÍCIO 3
// a. A primeira linha está declarando uma variável numérica que terá seu valor definido por uma entrada do usuário.
// b. Se dar uma entrada de 10, o console retornará "Esse número passou no teste". Com -10, o console retornará nada.
// c. Haverá uma mensagem de erro pois há uma variável que foi declarada dentro de um bloco e utilizada fora do seu escopo.

// EXERCÍCIO DE ESCRITA DE CÓDIGO
// EXERCÍCIO 4

// let idade = Number(prompt("Qual a sua idade?"))
// if(idade>=18)
// {
//     console.log("Você pode dirigir!")
// }
// else 
// {
//     console.log("Você não pode dirigir!")
// }

// EXERCÍCIO 5

// let turno = prompt("Qual o seu turno de estudo? (M para Matutino, V para Vespertino e N para Noturno)")

// if(turno == "M")
// {
//     console.log("Bom dia!")
// }
// else if (turno == "V")
// {
//     console.log("Boa tarde!")
// }
// else if (turno == "N")
// {
//     console.log("Boa noite!")
// }
// else
// {
//     console.log("Insira M, V ou N!")
// }

// EXERCÍCIO 6

// let turno = prompt("Qual o seu turno de estudo? (M para Matutino, V para Vespertino e N para Noturno)")

// switch(turno)
// {
//     case "M":
//         console.log("Bom dia!")
//         break
//     case "V":
//         console.log("Boa tarde!")
//         break
//     case "N":
//         console.log("Boa noite!")
//         break
// }

// EXERCÍCIO 7

let filme = prompt("Qual o tipo de filme irão assistir?")
let preco = Number(prompt("Qual o preço do ingresso?"))

if(filme == "fantasia")
{
    if(preco < 15)
    {
        console.log("Bom filme!")
    }
    else
    {
        console.log("Escolha outro filme :(")
    }
}
else
{
    console.log("Escolha outro filme :(")
}