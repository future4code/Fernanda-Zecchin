import {Client} from "./Client";
class ClientManager {
  private client: Client[] = []
   
  
  public registerClient(client:Client): void {
    this.client.push(client)
  }
  public getClientQuantity(): number {
    return this.client.length
  }
  public calculateBillOfClient(registrationNumber: number): number {

    const foundClient = this.client.find((client) => {
      return client.registrationNumber === registrationNumber
    })

    if(foundClient){
      return foundClient.calculateBill()
    }
    return 0;
  }

  public calculateTotalIncome(): number {
    let total: number = 0;
    this.client.forEach((client) => {
      total += client.calculateBill();
    });
    return total
  }
  
  public deleteUser(registrationNumber:number): void {
    let registrationIndex = undefined;

    for(let i = 0; i < this.client.length; i++){
      if(this.client[i].registrationNumber === registrationNumber) {
        registrationIndex = i;
      }
    }
    if(registrationIndex !== undefined) {
      this.client.splice(registrationIndex, 1);
      
    }
  }
  
}

