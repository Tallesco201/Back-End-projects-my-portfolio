import AppDataSource from "../data-source"
import { Project } from "../entities/projects.entity"

export const listAllOrijectsService = async ()=>{
    const projectRepository = AppDataSource.getRepository(Project)

    const projectsAll = await projectRepository.find()

    return projectsAll
}