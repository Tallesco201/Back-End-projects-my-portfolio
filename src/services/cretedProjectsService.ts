import AppDataSource from "../data-source";
import { Project } from "../entities/projects.entity";
import { AppError } from "../errors/AppError";
import { IProjectRequest } from "../interfaces/projects.interface";

export const ceatedProjectsServices = async (data:IProjectRequest) =>{
    const projectRepository = AppDataSource.getRepository(Project)

    const projectExists = await projectRepository.findOneBy({
        name:data.name,
        link_page:data.link_page,
        link_repo:data.link_repo
    })

    if(projectExists){
        throw new AppError("Project already exists", 409)
    }

    const createdProject = projectRepository.create(data)
    await projectRepository.save(createdProject)

    return createdProject

    
}