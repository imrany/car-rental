import express from "express"
import pool from "../postgres"
const views=express.Router()

views.get('/',(req,res)=>{
    res.render('index')
})

views.get('/home',(req,res)=>{
    res.render('home')
})
views.get('/tables/:name',(req,res)=>{
    try {
        const name= parseInt(req.params.name)
        pool.query(`SELECT * FROM $1 RETURNING *`, [name],
        (error, results) => {
            if (error) {
                console.log({error:error})
                res.redirect('/admin/home')
            }else{
                res.render('tables/index',{name})
            }
        })
    } catch (error) {
        res.redirect('/admin/home')
    }
})
export default views