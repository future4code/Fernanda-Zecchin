//a) Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?
//Da erro , pois não é uma string.
const minhaString: String = 14
 
//b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. Como podemos fazer com que essa variável aceite letras?

const meuNumero: any = 'Roberta' 


//c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

const pessoa: {nome: string , idade: number , corFavorita: string}  = {
  nome:"Joana",
  idade: 25,
  corFavorita: "azul"
}

//d) Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.

type Pessoa = {hobby: string, possuiFaculdade: boolean, dataNascimento: number}

//e) Modifique o tipo de objeto para que possamos apenas escolher entre as cores do arco-íris. Use um enum para isso

enum ArcoIris {
  VERMELHO = "VERMELHO",
  LARANJA = "LARANJA",
  AMARELO = "AMARELO",
  VERDE = "VERDE",
  AZUL = "AZUL",
  ANIL = "ANIL",
  VIOLETA = "VIOLETA"
}