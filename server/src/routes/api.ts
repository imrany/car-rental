import express from "express"
import { 
    getUserById,
    getUsers,
    createUser,
    updateUser,
    deleteUser, 
} from "../controller/rent.js"
const router=express.Router()

router.get('/users', getUsers)
router.get('/users/:id', getUserById)
router.post('/users', createUser)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)

export default router