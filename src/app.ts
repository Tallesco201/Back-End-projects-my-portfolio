import express from "express";
import "express-async-errors"
import projectRouter from "./routes/projectsRoutes";
import handleError from "./errors/handleError";


const app = express();
app.use(express.json());

app.use("/project", projectRouter)

app.use(handleError)




export default app