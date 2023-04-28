"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const projectsRoutes_1 = __importDefault(require("./routes/projectsRoutes"));
const handleError_1 = __importDefault(require("./errors/handleError"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PACTH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use("/project", projectsRoutes_1.default);
app.use(handleError_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map