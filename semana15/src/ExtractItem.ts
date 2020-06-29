export class ExtractItem {
  description: string
  value: number = 0
  date: string

  constructor(descriptionUser: string, valueUser: number, dateShop: string) {
    this.description = descriptionUser
    this.value = valueUser
    this.date = dateShop
  }
}