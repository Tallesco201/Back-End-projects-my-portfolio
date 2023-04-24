import { DataSource } from "typeorm"
import path from "path"
import "dotenv/config"
import { Project } from "./entities/projects.entity"
import { CreateTables1682109780965 } from "./migrations/1682109780965-createTables"
import { UpdateTableProject1682110508552 } from "./migrations/1682110508552-updateTableProject"



const AppDataSource =  new DataSource({
    type:"postgres",
    host:process.env.PGHOST,
    port: parseInt(process.env.PGPORT!),
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    logging: true,
    synchronize: false,
    entities: [Project],
    migrations: [UpdateTableProject1682110508552]
})

export default AppDataSource
