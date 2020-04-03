// O que o código abaixo está fazendo? Qual o resultado impresso no console?
// O resultado impresso no console é 105. 
// O valor inicial do sum é de 0, a cada looping ele vai somando com os 
// outros loopings feitos. Assim até o  14° looping que dá 105. 
/*

let sum = 0
for(let i = 0; i < 15; i++) {
  sum += i
}
console.log(sum)

*/


/*
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
const novaLista = []
const numero = 4
for(const item of lista){
  if(item%numero === 0) {
    novaLista.push(item)
  }
}
console.log(novaLista)
*/


//Exer 2

//Letra A
//O comando push serve para adicionar itens a um array

//Letra B

// Array(4)
// 0: 10
// 1: 15
// 2: 25
// 3: 30
// length: 4

//Letra C

// Com o número  3
// (6) [12, 15, 18, 21, 27, 30]
// 0: 12
// 1: 15
// 2: 18
// 3: 21
// 4: 27
// 5: 30
// length: 6

//Com número 4
// Array(1)
// 0: 12
// length: 1

//Exer. 3

//Letra A
/*

const numeros = [20,22,54,68,99,105,57,12,52];
let maior = numeros[0];
let menor = numeros[0];
for (const num of numeros) {
  if(num > maior){
    maior = num;
    
  } else if(num < menor){
    menor = num;

  }
}
console.log("O número maior é " ,maior,  "e o número menor é" , menor)
*/
/*
const numeros = [20, 22, 54, 68, 99, 105, 57, 12, 52];
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}
*/
/*
//Letra B
const array = [20, 22, 54, 68, 99, 105, 57, 12, 52];
let novaArray = []
    for(let numero of array){
        novaArray.push(numero/10);
    }
    console.log(novaArray);
 
  */

//Letra C

const numeros = [20, 22, 54, 68, 99, 105, 57, 12, 52];
for (const iterator of object) {
  
}

/*
for (let i = 0; i < numeros; i++) {
   if(i %2 ===0 ){
     console.log("é par ", i)
   }  

}
*/




