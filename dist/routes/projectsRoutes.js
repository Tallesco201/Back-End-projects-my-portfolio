"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const projectsControllers_1 = require("../controllers/projectsControllers");
const projectRouter = (0, express_1.Router)();
//Criação do projeto 
projectRouter.post("", projectsControllers_1.createProjectsControllers);
//Leitura de todos os projetos
projectRouter.get("", projectsControllers_1.listAllProjectsController);
//Atualização do projeto
projectRouter.patch("/:id", projectsControllers_1.updateProjectController);
//Deleção do projeto 
projectRouter.delete("/:id", projectsControllers_1.deleteProjectController);
exports.default = projectRouter;
//# sourceMappingURL=projectsRoutes.js.map