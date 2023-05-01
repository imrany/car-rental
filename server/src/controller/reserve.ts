import { contactItems } from "../types";
import pool from "../postgres";

export const reserve=async(req:any,res:any,next:any)=>{
    try {
        const {
            car_id,
            firstName,
            lastName,
            email,
            phoneNumber,
            numberOfDays,
            numberOfLuggage,
            numberOfPerson,
            drive,
            fromAddress,
            toAddress,
            journeyTime,
            journeyDate,
            reason,
            amount,
            transactionOption
        }=req.data
        pool.query('INSERT INTO reserved_cars (car_id, firstName, lastName, email, phoneNumber, numberOfDays, numberOfLuggage, numberOfPerson, drive, fromAddress, toAddress, journeyTime, journeyDate, reason, amount, transactionOption) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) RETURNING *',
        [car_id, firstName, lastName, email, phoneNumber, numberOfDays, numberOfLuggage, numberOfPerson, drive, fromAddress, toAddress, journeyTime, journeyDate, reason, amount, transactionOption], 
        (error, results) => {
            if (error) {
            res.send({error:error})
            }else{
                res.status(201).send({msg:`Car reserved with ID: ${results.rows[0].car_id}`})
            }
        })
    } catch (error:any) {
        res.status(500).send({error:error.message})
    }
}

export const checkReserve=async(req:any,res:any)=>{
    try {
        const car_id = parseInt(req.params.car_id)
        pool.query('SELECT * FROM reserved_cars WHERE car_id = $1', [car_id],
        (error, results) => {
            if (error) {
               res.send({error:error})
            }else if(!results.rows[0]){
                res.status(404).send({not_reserved:"Available"})
            }else{
                res.status(200).send({reserved:"Reserved",results:results.rows[0]})
            }
        })
    } catch (error:any) {
        res.status(500).send({error:error.message})
    }
}

export const contact=async(req:contactItems,res:any)=>{
    try {
        const {name,email,message}=req.body;
        res.send({msg:"contact api"})
    } catch (error:any) {
        res.status(500).send({error:error.message})
        console.log(error.message)
    }
}