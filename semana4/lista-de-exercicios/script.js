// exer. funções 

//  1. Escreva uma função que receba um `array` de números e imprima na tela o segundo maior e o segundo menor número. Em seguida, invoque essa função.
//  

//2. Escreva uma **função não nomeada** que faça um `alert("Hello Future4");`. Em seguida, invoque essa função.

//  function oi(){
//    alert("Hello Future4")
//  }
//  oi();

//Exer. Objetos

//1. Explique com as suas palavras o que são e quando podemos/devemos utilizar arrays e objetos.

//Array é para armazenar várias valores em uma única variável e acessam números para acessar seus elementos.
//Objetos são estruturas que permitem dados mais complexos e usam nomes para acessar os valores. Possuem 
//propriedades e métodos.
// O Objeto é usado quando você quer que os nomes sejam strings, e usa arrrays quando vc quer apenas números.

//2. Crie uma função chamada `criaRetangulo` que recebe como parâmetros dois lados (`lado1` e `lado2`) e retorna um objeto com 4 informações: largura (`lado1`), altura (`lado2`), perímetro (`2 * (lado1 + lado2)`) e área (`lado1 * lado2`).

// const retangulo ={
//   lados:4,
//  area: function criaRetangulo(lado1, lado2){
//    return lado1*lado2
//   },
//   perimetro: function(lado1,lado2){
//   return 2 * (lado1 +lado2)
//   },
//   altura: function(lado2){
//     return lado2
//   },
//   largura: function(lado1){
//     return lado1
//   }
// }


//3. Crie um objeto para representar seu filme favorito. Ele deve ter as seguintes propriedades: título, ano, diretor e atores/atrizes (lista com pelo menos 2 atores/atrizes). Imprima na tela a seguinte string, baseada nos valores do objeto:
//`Venha assistir ao filme NOME DO FILME, de ANO, dirigido por DIRETOR e estrelado por ATOR 1, ATRIZ 2, ATOR n`. A lista de atores/atrizes deve ser impressa inteira, independente do tamanho da lista.

// const filmeFavorito = {
//   titulo: "Her",
//   ano: 2013,
//   diretor:"Spike Jonze",
//   elenco: ["Joaquin Phoenix", "Amy Adams"]
// }

// console.log(`Venha assistir ao filme ${filmeFavorito.titulo}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.elenco[0]} ${filmeFavorito.elenco[1]}`)

//4. Crie um objeto que represente uma pessoa qualquer, com as propriedades de `nome`, `idade`, `email` e `endereco`. Crie uma função chamada `anonimizarPessoa`, que deverá retornar um **novo** objeto com as mesmas propriedades, mas com a string `ANÔNIMO` no lugar do nome. O objeto original deve ser mantido com o nome da pessoa.

// const pessoaQualquer = {
//   nome: "Francisca",
//   idade: 20,
//   email: "francisca@gmail.com",
//   endereco: "Rua Passos, 25 - SP"
// }
// const anonimizarPessoa = { // desestruturação para copiar um objeto e alterar valores que quiser.
//  ...pessoaQualquer,
//  nome: "ANÔNIMO"
// }
// console.log(pessoaQualquer)
// console.log(anonimizarPessoa)


//Exercicios de Funções de Array

//1. Cite 3 maneiras de se percorrer/iterar um array, que você conheceu antes das funções de array. Faça um programa para exemplificar.

//Podemos percorrer um array com o uso de for, forEach, for of

// const numeros = [50,40,90];
// for(const valores of numeros){
//   console.log(valores);
// }

// let numeros = []
// for(let i = 0;  i < 9; i++){
//   numeros = numeros + i;
// }
// console.log(numeros)

// const nomes = ["Joana", "Patrícia", "Rebeca"];
// nomes.forEach(function(item, index,array){
//   console.log(item, index, array)
// })

//Exer 2
//a) Faça uma função que retorne um novo array só com os adultos (pessoas com idade igual ou superior a 20)
// const pessoas =
// [
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]

// const novaLista = pessoas.filter((adultos, index , array) => adultos.idade >= 20);
// console.log(novaLista)

// //b) Faça uma função que retorne um **novo array** só com as crianças/adolescentes (pessoas com idade inferior a 20)

// const listaMenores = pessoas.filter((menores, index,array) => menores.idade <20);
// console.log(listaMenores)

// Exer. 3

//a) Escreva uma função que **retorne** um array com as entradas multiplicadas por 2. Isto é `[2, 4, 6, 8, 10, 12]`.

// const numeros = [2, 4, 6, 8, 10, 12].map(numero => numero * 2)
// console.log(numeros)

//b) Escreva uma função que **retorne** um array com as entradas multiplicadas por 3 e como strings. Isto é: `["3", "6", "9", "15", "18"]`

// let multiplicar = ["3", "6", "9", "15", "18"]
// let nx3 = multiplicar.map(numeros => numeros * 3)
// console.log(nx3)
 

 //Exerc 4

//  const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]

// const novaLista = pessoas.filter((adultos, index , array) => adultos.idade >= 14 && adultos.idade < 60 
// && adultos.altura >=1.5);
// console.log(novaLista)

// const novaLista = pessoas.filter((adultos, index , array) => adultos.idade < 14 && adultos.altura < 1.5);
// console.log(novaLista)

const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

const consultasCanceladas = consultas.find((cancel , index, array) => cancel.cancelada === true )
console.log(`Olá, ${consultasCanceladas.nome.genero} ${ consultasCanceladas.nome}. Estamos enviando esta mensagem para ${} da sua consulta no dia ${ consultasCanceladas.dataDaConsulta }. Por favor, acuseo recebimento deste e-mail.`)

 