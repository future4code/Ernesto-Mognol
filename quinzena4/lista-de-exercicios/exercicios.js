//Exercício 1

function inverteArray(array) {
  array = [0, 8, 23, 16, 10, 15, 41, 12, 13]
  return array.reverse()
}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   array = [1, 2, 3, 4, 5, 6]
   let arrElevado = []
   for(let x of array){
      if(x % 2 == 0)
         arrElevado.push(x*x) 
   }
   return arrElevado
}

//Exercício 3

function retornaNumerosPares (array) {
   array = [1, 2, 3, 4, 5, 6]
   let arrPares = []
   for(let x of array){
      if(x % 2 === 0){
         arrPares.push(x)
      }
   }
   return arrPares
}

//Exercício 4

function retornaMaiorNumero(array) {
   array = [10, 18, 7, 56, 39]
   let maiorNum = 0
   for(let x of array){
      if(x > maiorNum){
         maiorNum = x
      }
   }
   return maiorNum
}

//Exercício 5

function retornaQuantidadeElementos (array) {
   array = [1, 2, 3, 4, 5, 6]
   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
   // const booleano1 = true
   // const booleano2 = false
   // const booleano3 = !booleano2 - true 
   // const booleano4 = !booleano3 - false
   const respostas = [false, false, true, true, true]
   return respostas
}

//Exercício 7

function retornaNNumerosPares(n) {
   const arrNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8]
   let arrNumPares = []
   for(let x of arrNumeros)
      if(x % 2 === 0){
         arrNumPares.push(x)
      }
   n = 5
   arrNumPares.length = n
   return arrNumPares
}

// Exercício 8

function checaTriangulo(a, b, c) {
   let tests = [false, false, false]
   if(a === b && b === c){
      // console.log('Triângulo equilátero.')
      tests[0] = true // equilátero
   }
   else if((a === b || a === c) && (b != a || b != c)){
      // console.log('Triângulo isóceles.')
      tests[1] = true // isóceles
   }
   else if(a != b && b != c && a != c){
      // console.log('Triângulo escaleno.')
      tests[2] = true // escaleno
   }
   return tests
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   num1 = 15
   num2 = 30
   let maiorNumeroC = 0
   let menorNumeroC = 0
      if(num1 > num2){
         maiorNumeroC = num1
         menorNumeroC = num2
      }
      else{
         maiorNumeroC = num2
         menorNumeroC = num1
      }
   let maiorDivisivelporMenorC = false
      if(maiorNumeroC % menorNumeroC === 0){
         maiorDivisivelporMenorC = true
      }
   let diferencaC = num2 - num1
      if(diferencaC < 0)
         diferencaC = diferencaC * -1
   const comparacao = {
      maiorNumero: maiorNumeroC,
      maiorDivisivelporMenor: maiorDivisivelporMenorC,
      diferenca: diferencaC
   }
   return comparacao
}

// Exercício 10

function segundoMaiorEMenor(array) {
   array = [50, 46, 102, 34, 26, -1, 2, 15]
   array.sort(compararNumero = (a,b) => {
      return a-b
   })
   let arrMaiorEMenor = [array[(array.length-2)], array[1]]
   return arrMaiorEMenor
}

//Exercício 11

function ordenaArray(array) {
   array = [20, 13, -1, 2, 5, 49, -40, 10, 70, 5]
   let arrOrdenado = array.sort(compararNumero = (a,b) => {
      return a-b
   })
   return arrOrdenado
}

// Exercício 12

function filmeFavorito() {
   const filme = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }
   return filme
}

// Exercício 13

function imprimeChamada() {
   const filme = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }
   const string = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
   return string
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   lado1 = 10
   lado2 = 20
   const retangulo = {
      largura: lado1,
      altura: lado2,
      perimetro: (2*(lado1 + lado2)),
      area: lado1*lado2
   }
   return retangulo
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   const pessoaAnonima = {
      nome: "ANÔNIMO",
      idade: 25,
      email: "astrodev@future4.com.br",
      endereco: "Rua do Futuro, 4"
    }
    return pessoaAnonima
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   arrayMaioridade = []
   arrayDePessoas.forEach(pessoa => {
      if(pessoa.idade > 18){
         arrayMaioridade.push(pessoa)
      }
   })
   return arrayMaioridade
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   arrayMenoridade = []
   arrayDePessoas.forEach(pessoa => {
      if(pessoa.idade < 18){
         arrayMenoridade.push(pessoa)
      }
   })
   return arrayMenoridade
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   array = [1, 2, 3, 4, 5, 6]
   const arrayx2 = []
   for(let x of array){
      x = x *2
      arrayx2.push(x)
   }
   return arrayx2
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   array = [1, 2, 3, 4, 5, 6]
   const arrayx2s = []
   for(let x of array){
      x = x*2
      x = String(x)
      arrayx2s.push(x)
   }
   return arrayx2s
}

// Exercício 17, letra C

function verificaParidade(array) {
   array = [1, 2, 3, 4, 5, 6]
   const arraystrings = []
   for(let x of array){
      if(x % 2 === 0){
         arraystrings.push(`${x} é par`)
      }
      else {
         arraystrings.push(`${x} é ímpar`)
      }
   }
   return arraystrings
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   const pessoasAutorizadas = []
   pessoas.forEach(pessoa => {
      if(pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura > 1.5){
         pessoasAutorizadas.push(pessoa)
      }
   })
   return pessoasAutorizadas
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   const pessoasNaoAutorizadas = []
   pessoas.forEach(pessoa => {
      if(pessoa.idade < 14 || pessoa.idade > 60 || pessoa.altura < 1.5){
         pessoasNaoAutorizadas.push(pessoa)
      }
   })
   return pessoasNaoAutorizadas
}

//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 //Exercício 19, letra A
 
 function ordenaPorNome() {
  
 }
 
 // Exercício 19, letra B
 
 const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 function ordenaPorData() {
 
 }

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
}