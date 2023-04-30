import express from "express"
import { 
    reserve,
    contact
} from "../controller/reserve"
import{
    token,
    stkPush,
    // callBack,
    // getTransaction
} from '../controller/mpesa'
const router=express.Router()

router.post("/reserve_car",reserve)
router.post('/contact', contact)

router.post('/stkpush',token,stkPush);
// router.post('/callback',callBack);
// router.get("/transaction", getTransaction)

export default router