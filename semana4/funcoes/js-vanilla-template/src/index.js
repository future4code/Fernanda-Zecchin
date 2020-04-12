// const minhaFuncao = (quantidade) => {
// 	const array = []
// 	for(let i = 0; i < quantidade; i+=2) {
// 			for(let j = 0; j < i; j++) {
// 				array.push(j)
// 			}
// 	}
// 	return array
// }
//Exerc. 1
// A- []
// B - [0, 1, 0, 1, 2, 3]
// C - [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]

//Exer. 2

// let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

// const funcao = (lista, nome) => {
//   for (let i = 0; i < lista.length; i++) {
//     if (lista[i] === nome) {
//       return i;
//     }
//   }
// };

// console.log(funcao(arrayDeNomes, "Darvas"));
// console.log(funcao(arrayDeNomes, "João"));
// console.log(funcao(arrayDeNomes, "Paula"));

//a. Explicite quais são as saídas impressas no console
//0,2,undefined.




//b. O código funcionaria se a lista fosse um array de números (ao invés de um array de string)  e o nome fosse um número, ao se chamar a função? Justifique sua resposta.
//Funcionaria, Ele procura se existe o numero dentro do array, de acordo com o parametro especificado.


//Exerc.3
// Colem a função no arquivo .js e criem dois arrays quaisquer, sendo um com alguns números e outro vazio. Em seguida, chamem a função no array vazio, passando o array de números como parâmetro. Printem a array que inicialmente estava vazia e vejam o comportamento. 
// const array = [1,2,3,4]
// let array1=[]
//  function metodo(array) {
//    let resultadoA = 0;
//    let resultadoB = 1;
//    let arrayFinal = [];

//    for (let x of array) {
//      resultadoA += x;
//      resultadoB *= x;
//    }

//   (arrayFinal.push(resultadoA));
//   (arrayFinal.push(resultadoB));
//    return arrayFinal;
//  }
//  array1 = metodo(array)
 //

//Exerc.4

// function cachorro(idade){
//   return idade*7
// }
// console.log(cachorro(4));
// nome = "Fernanda"
// idade = 34
// endereco = "SP"
// eEstudante = "sou estudante"
// function dados(nome, idade, endereco, eEstudante){
//  if(eEstudante === true){
//    console.log("sou estudante")
//  }else {
//    console.log("não sou estudante")
  
//  }
//  return `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e ${eEstudante} `

// }
// console.log(dados(nome,idade,endereco,eEstudante))

//Exer.6
//Letra -A-  const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// function arraysNumeros(quantidadeArrays){
//   for (let i = 0; i < quantidadeArrays.length; i++) {
//     	    if (quantidadeArrays[i] === arraysNumeros) {
//      	      return i;
// }
//   }
// }

//Letra- B
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function ePar(array){
  
  if (array%2 ===0) {
    console.log("É par")
  } else {
    console.log("É impar")    
  }
}
(ePar(array);