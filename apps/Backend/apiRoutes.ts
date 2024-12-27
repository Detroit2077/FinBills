import { Router } from "express";
import express from "express";
import buisnessRouter from "./routes/buisness";
const app = express()


const apiRouter = Router();



app.use('/buisness' , buisnessRouter);



export default apiRouter;