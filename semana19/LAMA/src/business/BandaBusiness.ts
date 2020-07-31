import { BandaInputDTO } from "../model/Banda";
import { IdGenerator } from "../services/IdGenerator";
import { BandaDatabase } from "../data/BandaDatabase";

export class BandaBusiness {

    async createBand(band: BandaInputDTO) {

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const bandaDatabase = new BandaDatabase()
        await bandaDatabase.createBand(id, band.name, band.music_gender, band.responsible)
    }

    async getBandaById(id: string) {

        const bandaDatabase = new BandaDatabase()
        return await bandaDatabase.getBandaById(id)
    }

    async getBandaByName(name: string) {

        const bandaDatabase = new BandaDatabase()
        return await bandaDatabase.getBandaByName(name)
    }
}