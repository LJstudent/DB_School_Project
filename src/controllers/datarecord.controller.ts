import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { DataRecord } from "../entity/DataRecord";

export const getDataRecords = async function (req: Request, res: Response) {
    const dataRecords = await AppDataSource.getRepository(DataRecord).find()
    res.json(dataRecords)
}

export const putApproved = async function (req: Request, res: Response) {
    const dataRecord = await AppDataSource.getRepository(DataRecord).findOneBy({
        id: Number(req.params.id),
    })
    AppDataSource.getRepository(DataRecord).merge(dataRecord, req.body)
    const results = await AppDataSource.getRepository(DataRecord).save(dataRecord)
    return res.send(results)
}