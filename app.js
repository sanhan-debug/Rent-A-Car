import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
//  mongodb+srv://sanhan:sanhan2006@products.d6qca.mongodb.net/?retryWrites=true&w=majority&appName=products

dotenv.config()
const app = express()
const PORT = 3000 
const URI = process.env.URI  

app.use(express.json())
app.use(cors())
app.use("/products",productRouter)

app.listen(PORT,()=>{
    console.log(`server is active on ${PORT}`)

    connect(URI).then(()=>console.log("connected to the mongoDB"))
})