import "reflect-metadata"
import { DataSource } from "typeorm"
import { DataRecord } from "./entity/DataRecord"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Vesper501!Inger",
    database: "school_project",
    synchronize: true,
    logging: false,
    entities: [DataRecord],
    migrations: [],
    subscribers: [],
})
