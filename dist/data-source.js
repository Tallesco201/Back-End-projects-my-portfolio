"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const path_1 = __importDefault(require("path"));
require("dotenv/config");
const nodeEnv = process.env.NODE_ENV;
const entitiesPath = path_1.default.join(__dirname, "./entities/**.{js,ts}");
const migrationsPath = path_1.default.join(__dirname, "./migrations/**.{js,ts}");
/* if (nodeEnv==="production"){
    return{
        type:"postgres",
        url: process.env.DATABASE_URL,
        entities: [entitiesPath],
        migrations: [migrationsPath],
    }

} */
const AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.PGHOST,
    port: parseInt(process.env.PGPORT),
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    logging: true,
    synchronize: false,
    entities: [entitiesPath],
    migrations: [migrationsPath]
});
exports.default = AppDataSource;
//# sourceMappingURL=data-source.js.map