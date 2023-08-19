import { Router } from "express";
import * as userCrtl from "../controllers/users.controllers.js";
import * as userCrtl2 from "../controllers/inventory.controllers.js"

import * as userCrtl3 from "../controllers/employees.controllers.js"

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

//------------------rutas de empleados---------------------------------------------------
router.get('/employee', userCrtl3.getEmployes)
router.post('/employee', userCrtl3.CreateEmployes );
router.post('/employee/login', userCrtl3.LoginEmployes );
router.patch('/employee/:num_employed',userCrtl3.UpdateEmployes);
router.delete('/employee/:num_employed', userCrtl3.DeleteEmployes);

export default router;