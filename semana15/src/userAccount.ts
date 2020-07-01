import {ExtractItem} from "./ExtractItem";

export class Account {
  private name:string
  private birthDate: string
  private cpf: string
  private balance: number = 0
  private extract: ExtractItem[]

  constructor(newAccount: string, birthDateUser:string, cpfUser:string, balanceInit: number = 0, extractUser: []) {
    this.name = newAccount
    this.birthDate = birthDateUser
    this.cpf = cpfUser
    this.balance = balanceInit
    this.extract = extractUser
  }
  public getName(): string{
    return this.name
  }
  
  public getBirth(): string {
    return this.birthDate
  }
  
  public getCpf(): string {
    return this.cpf
  }
  
  public getBalance(): number  {
    return this.balance
  }
  
  public getExtract(): object {
    return this.extract
  }
}


