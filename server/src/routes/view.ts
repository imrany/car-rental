import express from "express"
import pool from "../postgres"
const views=express.Router()

views.get('/',(req,res)=>{
    res.render('index')
})

views.get('/home',(req,res)=>{
    let tables=[
        "cars",
        "mpesa_transactions",
        "reserved_cars",
        "user_contact"
    ]
    res.render('home',{tables})
})

views.get('/tables/:name',(req,res)=>{
    try {
        const {name}= req.params
        pool.query(`SELECT * FROM ${name}`,
        (error, results) => {
            if (error) {
                res.send({error:error})
                res.redirect('/admin/home')
            }else{
                res.render('tables/index',{name, results:results.rows})
                console.log(results.rows)
            }
        })
    } catch (error) {
        res.redirect('/admin/home')
    }
})
export default views