import { Request, Response } from "express";
import { BandaInputDTO } from "../model/Banda";
import { BandaBusiness } from "../business/BandaBusiness";
import { Authenticator } from "../services/Authenticator";
import { UserRole } from "../model/User";
import { BaseDatabase } from "../data/BaseDatabase";

export class BandaController {
    async create(req: Request, res: Response) {
        try {

            const authenticator = new Authenticator()
            const tokenData = authenticator.getData(req.headers.authorization as string)

            if (tokenData.role !== UserRole.ADMIN) {
                throw new Error("Only admin can create bands")
            }

            if (!req.body.name || !req.body.music_genre || !req.body.responsible) {
                throw new Error("Empty field(s)")
            }

            const input: BandaInputDTO = {
                name: req.body.name,
                music_gender: req.body.music_gender,
                responsible: req.body.responsible
            }

            const bandaBusiness = new BandaBusiness()
            await bandaBusiness.createBand(input)

            res.status(200).send({ message: "Banda cadastrada" })
        } catch (err) {
            res.status(400).send({ error: err.message })
        }

        await BaseDatabase.destroyConnection()
    }

    async details(req: Request, res: Response) {
        try {

            const authenticator = new Authenticator()
            authenticator.getData(req.headers.authorization as string)

            if (!req.body.id && !req.body.name) {
                throw new Error("Empty field(s)")
            }

            const bandaBusiness = new BandaBusiness()
            let banda

            req.body.id ?
                banda = await bandaBusiness.getBandaById(req.body.id) :
                banda = await bandaBusiness.getBandaByName(req.body.name)

            res.status(200).send({ banda })
        } catch (err) {
            res.status(400).send({ error: err.message })
        }

        await BaseDatabase.destroyConnection()
    }
}