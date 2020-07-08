import {Client} from "./Client";
import {Place} from "./Place";
import {Residence} from "./Residence";
import {Commerce} from "./Commerce";
import {Industry} from "./Industry";
import {ResidentialClient} from "./ResidentialClient";
import { CommercialClient } from "./CommercialClient";
import {IndustrialClient} from "./IndustrialClient";


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

//5
///a. Tudo, tirando que uma é com o calculo diferente e contém um cnpj
//b.Mesma resposta que a anterior, são todas iguais tirando os atributos de calculo, cnpj e um é residencial e o outro é comercial .

//6
//a. Da industry, pois é aonde está o atributo dela (machinesQuantity).
//b. Pois ela precisa das propriedades dela.


const newResidence: Residence = new Residence(2, "02022-055")
const newCommerce: Commerce = new Commerce(3, "04785-123")
const newIndustry: Industry = new Industry(8, "06358-666")
const newClient: ResidentialClient = new ResidentialClient ("Marcos", 1, 5,  "1247.124.855-88", 2, "02011-522")
const newCommercialClient: CommercialClient = new CommercialClient ("Rumple Com.", 6, 87, "73.213.404/0001-37", 5, "02011-874")
const newIndustryClient: IndustrialClient = new IndustrialClient ("Indústria Rumple", 12, 40, 6, 10, "14755-987")
console.log("Quantidade de máquinas ", newIndustryClient.getmachinesQuantity(), "Consumo de energia ", newIndustryClient.calculateBill())
console.log("Energia residencial ", newClient.calculateBill())
console.log(newCommerce)
console.log(newIndustry)
console.log(newResidence)
console.log(newClient)
console.log(newCommercialClient)
