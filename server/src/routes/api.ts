import express from "express"
import { 
    test,
    contact
} from "../controller/user"
import{
    token,
    stkPush,
    // callBack,
    // getTransaction
} from '../controller/mpesa'
const router=express.Router()

router.get("/",test)
router.post('/contact', contact)

router.post('/stkpush',token,stkPush);
// router.post('/callback',callBack);
// router.get("/transaction", getTransaction)

export default router