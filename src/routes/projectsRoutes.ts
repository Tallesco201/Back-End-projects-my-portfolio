import { Router } from "express";
import { createProjectsControllers, deleteProjectController, listAllProjectsController, updateProjectController } from "../controllers/projectsControllers";

const projectRouter = Router()

//Criação do projeto 
projectRouter.post("", createProjectsControllers)

//Leitura de todos os projetos
projectRouter.get("", listAllProjectsController)

//Atualização do projeto
projectRouter.patch("/:id",updateProjectController)

//Deleção do projeto 
projectRouter.delete("/:id", deleteProjectController)
export default projectRouter