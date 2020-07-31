import { BaseDatabase } from "./BaseDatabase";
import { createBand } from "../model/Banda";

export class BandaDatabase extends BaseDatabase {

  private static TABLE_NAME = "BANDAS_LAMA";
 

  public async createBand(
    id: string,
    name: string,
    music_gender: string,
    responsible:string,
    
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          name,
          music_gender,
          responsible,
        })
        .into(BandaDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getBandaById(Id: string): Promise<createBand> {
    const result = await this.getConnection()
      .select("*")
      .from(BandaDatabase.TABLE_NAME)
      .where({ Id });

    return createBand.toCreateBandModel(result[0]);
  }

  public async getBandaByName(name: string): Promise<createBand> {
    const result = await this.getConnection()
      .select("*")
      .from(BandaDatabase.TABLE_NAME)
      .where({ name });

    return createBand.toCreateBandModel(result[0]);
  }



}