import { Router } from "express";
import * as userCrtl from "../controllers/users.controllers.js";
import * as userCrtl2 from "../controllers/inventory.controllers.js"

const router = Router()

router.get('/profile', userCrtl.getUsers)

router.post('/profile', userCrtl.postUsers )

router.post('/login', userCrtl.Login )

router.patch('/profile', userCrtl.updateUsers)

router.delete('/profile', userCrtl.deleteUsers)

//----------------------- inventory routers ------------------------------------

router.get('/inventory', userCrtl2.getInventory)
router.post('/inventory', userCrtl2.postInventory)
router.patch('/inventory/:id', userCrtl2.updateInventory)
router.delete('/inventory/:id', userCrtl2.deleteInventory)

export default router;