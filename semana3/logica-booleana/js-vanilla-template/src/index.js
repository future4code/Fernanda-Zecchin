/*
const bool1 = true;
const bool2 = false;
const bool3 = !bool2;

let resultado = (bool1 && bool2 && bool3);
console.log("a. ", resultado); //false

resultado = (bool2 || bool1) && !bool3;
console.log("b. ", resultado);//false

resultado = !resultado && (bool1 || bool1);
console.log("c. ", resultado); //true

resultado = (resultado &&(!bool1 || bool2)) && !bool3;
console.log("d. ", resultado);//false

console.log("e. ", typeof resultado);//boolean
*/


/*
let array
console.log('I. ', array)// undefined

array = null
console.log('II. ', array) // null


array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length)//11

let i = 0
console.log('IV. ', array[i], " e ", array[i+1])// 3 e 4

array[i+1] = 19 
const valor = array[i+6]
console.log('V. ', array[i+1], " e ", valor) // 19 e 9

i+=1
array[i] = array[i-1]
console.log('VI. ', array[i])//3

i = array.length - 1
array[i] = array[i-3]
const resultadoC = array[i]%array[1]
console.log('VII. ', resultadoC)//1
*/



/*
a. O que é array e como se declara em JS?
Quando precisamos trabalhar com uma grande quantidade de dados, utilizamos um array, que são listas. Declaramos um array com []

b. Qual o index inicial de um array?
[0]

c. Como se determinar o tamanho do array?
[.length]

d. Indique todas as mensagens impressas no console.
I.  undefined
 II.  null
 III.  11
 IV.  3  e  4
 V.  19  e  9
 VI.  3
 VII.  1
 */


//(KELVIN) = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15
//a. Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.

/*

let GRAUS_FAHRENHEIT = 77
let KELVIN =Number((GRAUS_FAHRENHEIT - 32)*5/9 + 273.15);
let resultado = KELVIN;
console.log(resultado);
*/


/*
let graus = 77;
let grausKelvin = Number((graus - 32)*5/9 + 273.15);
let resultado = grausKelvin; // 298.15
console.log(resultado);
*/

//b. Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também.


/*
let grausCelsius = 80;
let grausFah = Number((grausCelsius)*9/5 + 32);
let conversao = grausFah; // 176
console.log(conversao);
*/

//c. Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.

/*
let grausCelsius = 30;
let grauFah = Number((grausCelsius)*9/5 +32);
let resultado = grauFah 
console.log(resultado);// 86
*/

/*
let grausCelsius = 30;
let grausKelvin = Number((grausCelsius-32)*5/9 + 273.15);
console.log(grausKelvin); //272.0388888888889
*/


//d. Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter.

/*
let grausCelsius = Number(prompt("Insira o valor"));
let grausKelvin = Number((grausCelsius-32)*5/9 + 273.15);
console.log(grausKelvin); //272.0388888888889
*/

//Faça um programa que faça 5 perguntas para o usuário (pode ser criativo nesta parte). Imprima-as com as respostas no console da seguinte forma:

/*
let nome = prompt("Digite seu nome; ");
let resposta = nome;
console.log(resposta);

let numero = Number(prompt("Digite um número: "));
let numeroEscolhido = numero;
console.log(numeroEscolhido);

let anoNasc = prompt("Digite o ano do seu nascimento: ");
let ano = anoNasc;;
console.log(anoNasc);

let email = prompt("Digite seu email ");
let emailDigitado = email;
console.log(emailDigitado);

let anoAtual = prompt("Em qual ano estamos ");
let resposta = anoAtual;
console.log(anoAtual);
*/

//Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências. Sabe-se que o quilowatt-hora de energia custa R$0.05. Faça um programa que receba a quantidade de quilowatts consumida por uma residência.
/*
let kw = 0.05;
let consumo = 280
let valorConsumo = consumo * kw;
console.log(valorConsumo);
*/

/*
let kw = 0.05;
let consumo = 280;
let valorConsumo = consumo * kw;
let desconto = Number(valorConsumo * (15/100));
let valorDesconto = desconto;
console.log(valorDesconto);
*/









