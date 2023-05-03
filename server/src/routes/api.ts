import express from "express"
import { 
    reserve,
    contact,
    checkReserve
} from "../controller/reserve"
import{
    token,
    stkPush,
    callBack,
    getTransaction
} from '../controller/mpesa'
import { 
    adminLogin 
} from "../controller/admin"
const router=express.Router()

router.post("/reserve_car",token,stkPush,reserve)
router.get("/reserve_car/:car_id",checkReserve)
router.post('/contact', contact)

router.post('/stkpush',token,stkPush);
router.post('/callback',callBack);
router.get("/transaction", getTransaction)

//admin api routes
router.post('/admin/login',adminLogin)

export default router