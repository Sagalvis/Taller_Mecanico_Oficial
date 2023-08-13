import { Router } from "express";
import * as userCrtl from "../controllers/users.controllers.js";


const router = Router()

router.get('/profile', userCrtl.getUsers)

router.post('/profile', userCrtl.postUsers )

router.post('login/*', userCrtl.Login )

router.patch('/profile', userCrtl.updateUsers)


router.delete('/profile', userCrtl.deleteUsers)

export default router;