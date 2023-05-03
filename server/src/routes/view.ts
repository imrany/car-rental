import express from "express"
const views=express.Router()

views.get('/',(req,res)=>{
    res.render('index')
})

views.get('/home',(req,res)=>{
    res.render('home')
})
export default views