import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { DataRecord } from "../entity/DataRecord";

export const getDataRecords = async function (req: Request, res: Response) {
    const users = await AppDataSource.getRepository(DataRecord).find()
    res.json(users)
}