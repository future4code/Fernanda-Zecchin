import {Client} from "./Client";
import {Place} from "./Place"



const client : Client = {
  name: "Joana",
  registrationNumber: 1,
  consumedEnergy: 100,

  calculateBill: () => {
    return 2;
  }
}

console.log(client)

//1.Não é possível apenas imprimir o retorno de calculateBill 


//2.const cep: Place = new Place("123123123")
//A- o erro que aparece é que não se pode criar uma instância em classes abstratas.
//B- Teríamos que criar uma classe filha 

//3.
//2.Por que ela pode se estender a outra classe
//3.Pq não faz sentido criar uma instância para ela.

