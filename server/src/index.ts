import express from "express"
import cors from "cors"
import * as dotenv from "dotenv"
import router from "./routes/api"
import views from "./routes/view"
dotenv.config()

// const options={
//     origin:"http://localhost:3000"
// }
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs');
app.use(cors({}))
app.use("/api",router)
app.use('/admin',views)

const port=process.env.PORT||8000
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})