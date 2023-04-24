"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
require("dotenv/config");
const projects_entity_1 = require("./entities/projects.entity");
const _1682110508552_updateTableProject_1 = require("./migrations/1682110508552-updateTableProject");
const AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.PGHOST,
    port: parseInt(process.env.PGPORT),
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    logging: true,
    synchronize: false,
    entities: [projects_entity_1.Project],
    migrations: [_1682110508552_updateTableProject_1.UpdateTableProject1682110508552]
});
exports.default = AppDataSource;
//# sourceMappingURL=data-source.js.map