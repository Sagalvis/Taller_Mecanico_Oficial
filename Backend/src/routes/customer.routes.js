import { Router } from "express";
import * as userCrtl from "../controllers/customer.controllers.js";

const router = Router()

router.get('/customer', userCrtl.getUsers)


router.post('/advisor', userCrtl.CreatingAdvisor)

router.post('/login', userCrtl.Login )

router.patch('/customer', userCrtl.updateUsers)

router.delete('/customer', userCrtl.deleteUsers)


export default router;