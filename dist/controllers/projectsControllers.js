"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProjectController = exports.updateProjectController = exports.listAllProjectsController = exports.createProjectsControllers = void 0;
const cretedProjectsService_1 = require("../services/cretedProjectsService");
const listProjectsService_1 = require("../services/listProjectsService");
const updatedProjectsService_1 = require("../services/updatedProjectsService");
const deletedProjectsService_1 = require("../services/deletedProjectsService");
const createProjectsControllers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dataBody = req.body;
    const createdProject = yield (0, cretedProjectsService_1.ceatedProjectsServices)(dataBody);
    return res.status(201).json(createdProject);
});
exports.createProjectsControllers = createProjectsControllers;
const listAllProjectsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listAll = yield (0, listProjectsService_1.listAllOrijectsService)();
    return res.status(200).json(listAll);
});
exports.listAllProjectsController = listAllProjectsController;
const updateProjectController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dataBody = req.body;
    const id = req.params.id;
    const updatedProject = yield (0, updatedProjectsService_1.updatedProjectService)(id, dataBody);
    return res.status(200).json(updatedProject);
});
exports.updateProjectController = updateProjectController;
const deleteProjectController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const deleteProject = (0, deletedProjectsService_1.deleteProjectService)(id);
    return res.status(204).json(deleteProject);
});
exports.deleteProjectController = deleteProjectController;
//# sourceMappingURL=projectsControllers.js.map