import AppDataSource from "../data-source"
import { Project } from "../entities/projects.entity"
import { AppError } from "../errors/AppError"

export const deleteProjectService = async (id:string )=>{
    const projectRepository = AppDataSource.getRepository(Project)
    const project = await projectRepository.findOneBy({
        id
    })

    if(!project){
        throw new AppError("Project not found", 404)
    }

    await projectRepository.delete(id)

    
    
    return {message:"Project deleted successfully"}

}