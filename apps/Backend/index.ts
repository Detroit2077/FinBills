import express from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client'
const app = express();
dotenv.config();
const prisma = new PrismaClient()
const port = process.env.PORT || 8080;

import apiRouter from './apiRoutes';


app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`);
 
})

app.use("/api", apiRouter);


app.get("/",(req,res)=>{
    res.send("Hello Buisness !")
})
console.log("Starting")
