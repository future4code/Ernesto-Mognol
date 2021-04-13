// INTERPRETAÇÃO DE CÓDIGO
// EXERCÍCIO 1

//a.) Vai ser impresso 10 e 50, pois a função retorna 5 vezes o valor determinado.
//b.) Não apareceria nada, pois a função sozinha não imprime nada no console.

// EXERCÍCIO 2
// a.) Será impresso no console: Darvas e Caio.
// b.) Será impresso Amanda e Caio.

// EXERCÍCIO 3

// A função método irá receber um array e vai verificar se existem valores pares dentro dele. Caso exista, cada número par será elevado ao quadrado e adicionado ao arrayFinal.

// ESCRITA DE CÓDIGO
// EXERCÍCIO 4

// a

// function fraseApresentacao(){
//     console.log("Eu sou Ernesto, tenho 23 anos, moro em Porto Alegre e não sou estudante.")
// }
// fraseApresentacao()


// b

// function fraseApresentacao(){
//     const nome = prompt("Qual o seu nome?")
//     const idade = Number(prompt("Qual a sua idade?"))
//     const cidade = prompt("Mora em qual cidade?")
//     let estudante = " "
//     if (confirm("Você é estudante?")){
//         estudante = "sou estudante!"
//     }
//     else{
//         estudante = "não sou estudante!"
//     }
//     console.log("Eu sou " + nome + " tenho " + idade + " anos, moro em/na/no " + cidade + " e " + estudante)
// }

// fraseApresentacao()

// EXERCÍCIO 5

// a

// function somar(um, dois){
//     um = Number(prompt("Insira um número: "))
//     dois = Number(prompt("Insira outro número"))
//     somaFinal = um + dois
//     console.log("Soma: " + somaFinal)
//     return somaFinal
// }

// somar()

// b

// function comparar(um, dois){
//     um = Number(prompt("Insira um número: "))
//     dois = Number(prompt("Insira outro número"))
//     if(um >= dois){
//         console.log(true)
//     }
//     else{
//         console.log(false)
//     }
// }

// comparar()

// c com array

// function repetirString(frase){
//     frase = prompt("Insira uma frase qualquer: ")
//     let arrayString = []
//     for(let i = 0; i < 10; i++){
//         arrayString.push(frase)
//     }
//     console.log(arrayString)
// }

// repetirString()

// // c sem array

// function repetirString(frase){
//     frase = prompt("Insira uma frase qualquer: ")
//     for(let i = 0; i < 10; i++){
//         console.log(frase)
//     }
// }

// repetirString()

// EXERCÍCIO 6
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// a

// function contarElementosArray(){
//     let contagem = 0
//     for(let i = 0; i < array.length; i++){
//         contagem = contagem + 1
//     }
//     console.log(contagem)
// }

// contarElementosArray()

// b

// function compararNumeros(numero){
//     numero = Number(prompt("Insira um número. Se for par retornará true, se for ímpar retornará false."))
//     if(numero % 2 == 0){
//         console.log(true)
//     }
//     else{
//         console.log(false)
//     }
// }

// compararNumeros()

// c

// function compararContarNumeros(){
//     let contagemPares = 0
//     const matriz = array
//     for(let x of matriz){
//         if(x % 2 == 0)
//             contagemPares ++
//     }
//     console.log(contagemPares)
// }

// compararContarNumeros(array)

// d

// function criarArrayPares(){
//     let arrayBooleano = []
//     const matriz = array
//     for(let x of matriz)
//         if(x % 2 == 0){
//             arrayBooleano.push(true)
//         }
//         else{
//             arrayBooleano.push(false)
//         }
//     console.log(arrayBooleano)
// }

// criarArrayPares()