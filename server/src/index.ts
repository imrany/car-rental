import express from "express"
import cors from "cors"
import * as dotenv from "dotenv"
import router from "./routes/api"
dotenv.config()

const options={
    origin:"http://localhost:3000"
}
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors(options))
app.use("/api",router)

const port=process.env.PORT||8000
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})