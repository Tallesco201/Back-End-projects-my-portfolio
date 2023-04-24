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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ceatedProjectsServices = void 0;
const data_source_1 = __importDefault(require("../data-source"));
const projects_entity_1 = require("../entities/projects.entity");
const AppError_1 = require("../errors/AppError");
const ceatedProjectsServices = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const projectRepository = data_source_1.default.getRepository(projects_entity_1.Project);
    const projectExists = yield projectRepository.findOneBy({
        name: data.name,
        link_page: data.link_page,
        link_repo: data.link_repo
    });
    if (projectExists) {
        throw new AppError_1.AppError("Project already exists", 409);
    }
    const createdProject = projectRepository.create(data);
    yield projectRepository.save(createdProject);
    return createdProject;
});
exports.ceatedProjectsServices = ceatedProjectsServices;
//# sourceMappingURL=cretedProjectsService.js.map