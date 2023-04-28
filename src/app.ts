import express from "express";
import { Request, Response, NextFunction } from 'express';
import "express-async-errors"
import projectRouter from "./routes/projectsRoutes";
import handleError from "./errors/handleError";


const app = express();
app.use(express.json());

app.use(function(req:Request, res:Response, next:NextFunction) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PACTH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use("/project", projectRouter)

app.use(handleError)




export default app