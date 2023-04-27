import express from "express"
import { 
    test,
    contact
} from "../controller/user"
const router=express.Router()

router.get("/",test)
router.post('/contact', contact)

export default router