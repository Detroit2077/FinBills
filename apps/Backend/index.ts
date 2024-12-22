import express from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client'
const app = express();
dotenv.config();
const prisma = new PrismaClient()
const port = process.env.PORT || 8080;




app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`);
 
})


async function test() {
  try {
    const customers = await prisma.customer.findMany()
    console.log(customers)
  } catch (error) {
    console.error("Error connecting to the database:", error)
  } finally {
    await prisma.$disconnect()
  }
}

test()


app.get("/",(req,res)=>{
    res.send("Hello Buisness !")
})
console.log("Starting")
