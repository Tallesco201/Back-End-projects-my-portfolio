import {Request, Response} from "express"
import { IProjectRequest, IProjectUpdate } from "../interfaces/projects.interface"
import { ceatedProjectsServices } from "../services/cretedProjectsService"
import { listAllOrijectsService } from "../services/listProjectsService"
import { updatedProjectService } from "../services/updatedProjectsService"
import { deleteProjectService } from "../services/deletedProjectsService"

export const createProjectsControllers = async(req:Request, res:Response)=>{
    const dataBody:IProjectRequest = req.body
    const createdProject = await ceatedProjectsServices(dataBody)
    return res.status(201).json(createdProject)

}

export const listAllProjectsController = async(req:Request, res:Response)=>{
    const listAll = await listAllOrijectsService()
    return res.status(200).json(listAll)
}

export const updateProjectController = async(req:Request, res:Response)=>{
    const dataBody : IProjectUpdate = req.body
    const id = req.params.id
    const updatedProject = await updatedProjectService(id, dataBody)
    return res.status(200).json(updatedProject)
}

export const deleteProjectController = async(req:Request, res:Response)=>{
    const id:string = req.params.id
    const deleteProject = deleteProjectService(id)
    return res.status(204).json(deleteProject)
}