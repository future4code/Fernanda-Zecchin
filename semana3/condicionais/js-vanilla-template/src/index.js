//Exer. 1

/*
const respostaDoUsuario = prompt("Digite o número que você quer testar?")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
*/
//Explique o que o código faz. Qual o teste que ele realiza? Para que tipos de números ele 
//imprime no console "Passou no teste"? Para que tipos, a mensagem é "Não passou no teste"? 

// Esse código testa se o número é par ou ímpar. Usamos o resto da divisão % e em seguida o atributo de === igualdade restrita partindo do numero 0. Se passou no teste o número é par, senão ele é ímpar.



//Exer. 2

/*
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM d.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
*/
// a. Para que serve o código acima?
// Switch é usado para simplificar o código e deixa-lo mais limpo, o programa executa as
// instruções associadas. Ele vai procurando os casos , caso nenhum seja satisfeito, ele vai para o default.

// b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//O preço da fruta  Maçã  é  R$  2.25

// c. Considere que você vá ao mercado com o objetivo de comprar 2 laranjas, 1 maçã, 3 bananas e 1 uva. Qual seria o preço que você pagaria?
//O preço da fruta  2 Laranja  é  R$  5
//O preço da fruta  1 Maçã  é  R$  5
//O preço da fruta  3 Bananas  é  R$  5
//O preço da fruta  1 Uva  é  R$  5


// d. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `deafult` (o `break` indicado pelo comentário "BREAK PARA O ITEM d.")?
//O preço da fruta  Pêra  é  R$  5


//Exer. 3

// Considere um usuário que digita os números 3 e 4 respectivamente. Qual será a mensagem do terminal? Haverá algum erro? Justifique usando os conceitos de bloco ou escopo.
//  mensagem não foi definida.  Está fora do escopo, se estive dentro, satisfaria as condições
//  E se fosse declarado com var, iria satisfazer, pois var é aceito fora do escopo.

/*
const numero1 = prompt("Digite o primeiro número.")
const numero2 = prompt("Digite o próximo número?")

if(numero1 > 0 && numero2 > 0) {
  let mensagem
  if(numero1 > numero2) {
    mensagem = "Número 1 é maior que o 2!"
  } else {
    mensagem = "Número 1 é menor ou igual ao 2!"
    console.log(mensagem)
  }
}

//console.log(mensagem)
*/

//Exer. 4

// a. Crie um programa que receba dois números do usuário através do prompt e imprima-os na ordem decrescente. O que acontece com o seu programa se os 2 números forem iguais? (é só testar e colocar um comentário descrevendo o que aconteceu)

/*
const numero1 = Number(prompt("Digite o primeiro número."));
const numero2 = Number(prompt("Digite o próximo número?"));

if (numero1 > numero2) {
  console.log("Os números na ordem descrecente é ", numero1, "e", numero2);
} else if (numero1 < numero2) {
  console.log("Os número na ordem decrescente é ", numero2, "e", numero1);
} else {
  console.log("Número são iguais");
}
*/

// Adapte o programa para que o usuário digite 3 números. Ainda os imprima na ordem decrescente. O que acontece como seu programa se os 3 números forem iguais? (é só testar e colocar um comentário descrevendo o que aconteceu)

/*
const numero1 = Number(prompt("Digite o primeiro número."));
const numero2 = Number(prompt("Digite o próximo número?"));
const numero3 = Number(prompt("Digite o próximo número?"));

if(numero1 > numero2 && numero2>numero3){
  console.log("Ordem decrescente ", numero1, numero2, numero3 );
} else if (numero1 < numero2 && numero2<numero3){
  console.log("Ordem decrescente ", numero3, numero2, numero1);
}else if (numero1 > numero3){
  console.log("Ordem decrescente ", numero1, numero3);
} else if (numero1 < numero3){
  console.log("Ordem decrescente ", numero3, numero1);
}else {
  console.log("números são iguais")
}
*/

/*
const numero1 = Number(prompt("Digite o primeiro número."));
const numero2 = Number(prompt("Digite o próximo número?"));
const numero3 = Number(prompt("Digite o próximo número?"));

if(numero1 === numero2 && numero1 === numero3 && numero2 === numero3){
  console.log("insira numeros diferentes")
}else {
  console.log("OK");
}

*/
