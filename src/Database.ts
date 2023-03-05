import { DataSource } from "typeorm";
import { ServerData } from "./ServerData";
import 'dotenv/config';

export const AppDataSource = new DataSource({
    type: process.env.DB_TYPE ||"mysql",
    host: process.env.DB_HOST || "localhost",
    port: 3306,
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "root",
    database: process.env.DB_DB || "server",
    synchronize: true,
    logging: false,
    entities: [ServerData],
    migrations: [],
    subscribers: [],
})