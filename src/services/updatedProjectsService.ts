import AppDataSource from "../data-source";
import { Project } from "../entities/projects.entity";
import { AppError } from "../errors/AppError";
import { IProjectUpdate } from "../interfaces/projects.interface";

export const updatedProjectService = async (id:string, dataBody:IProjectUpdate)=>{
    const projectRepository = AppDataSource.getRepository(Project)

    const project = await projectRepository.findOneBy({
        id
    })

    if(!project){
        throw new AppError("Project not found", 404)
    }

    await projectRepository.update({id}, {...dataBody})

    const projectReturn = await projectRepository.findOneBy({
        id
    })

    return projectReturn

}