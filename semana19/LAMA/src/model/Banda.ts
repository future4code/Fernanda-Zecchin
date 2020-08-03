export class createBand{
  
  constructor(
  private id: string,
  private name: string,
  private music_gender: string,
  private responsible:string,
  
  ){}

  getId(){
      return this.id;
  }

  getName(){
      return this.name
  }

  getMusicGender(){
      return this.music_gender;
  }

  getResponsible(){
      return this.responsible;
  }

  
  

  static toCreateBandModel(createBand: any): createBand {
      return new createBand(createBand.id,createBand.name, createBand.music_gender, createBand.responsible, createBand.stringToBandaResposible(createBand.role));
    }


}

export interface BandaInputDTO{
  
  name: string;
  music_gender: string;
  responsible: string;
}

export enum Responsible{
  NORMAL = "NORMAL",
  ADMIN = "ADMIN"
}