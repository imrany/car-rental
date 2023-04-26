import { contactItems } from "../types";

export const test=async(req:any,res:any)=>{
    try {
        res.send("hello")
        console.log("hey")
    } catch (error:any) {
        res.status(500).send({error:error.message})
    }
}
export const contact=async(req:contactItems,res:any)=>{
    try {
        const {name,email,message}=req.body;
        res.send("contact api")
    } catch (error:any) {
        res.status(500).send({error:error.message})
        console.log(error.message)
    }
}