import express from "express"
const views=express.Router()

views.get('/',(req,res)=>{
    res.render('index')
})

export default views