// EXERCICIO 1
// O CÓDIGO ESTÁ ADICIONANDO O VALOR DE I À VARIÁVEL VALOR.
// RESULTADO FINAL SERÁ 10.

// EXERCICIO 2
// a.) VAI IMPRIMIR TODOS OS NÚMEROS MAIORES QUE 18 DO ARRAY LISTA.
// b.) SIM, É POSSÍVEL SE UTILIZAR O MÉTODO .indexOf. ADICIONANDO UMA LINHA DENTRO DA ESTRUTURA FOR.. OF console.log(lista.indexOf(numero))

// EXERCICIO 3

let arrayOriginal = [10, 15, 14, 85, 80, 60, 18, 42, 71, 99]
console.log("a)")
for (let i = 0; i < arrayOriginal.length; i++)
{
    console.log(arrayOriginal[i])
}

console.log("b)")
for (let i = 0; i < arrayOriginal.length; i++)
{
    console.log(arrayOriginal[i] / 10)
}

console.log("c)")
for (let i = 0; i < arrayOriginal.length; i++)
{
    if(arrayOriginal[i] % 2 == 0)
    {
        console.log(arrayOriginal[i])
    }
}

console.log("d)")
const arrayStrings = []
for (let i = 0; i < arrayOriginal.length; i++)
{
    const frase = `O elemento do índice ${i} é: ${arrayOriginal[i]}`
    arrayStrings.push(frase)
}
console.log(arrayStrings)

console.log("e)")
let maiorValor = 0
let menorValor = 100
for (let i = 0; i < arrayOriginal.length; i++){
    if(arrayOriginal[i] > maiorValor){
        maiorValor = arrayOriginal[i]
    }
}
for (let i = 0; i < arrayOriginal.length; i++){
    if(arrayOriginal[i] < menorValor){
        menorValor = arrayOriginal[i]
    }
}
console.log("O maior número é " + maiorValor + " e o menor é " + menorValor)