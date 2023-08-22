import { Router } from "express";
import * as userCrtl from "../controllers/users.controllers.js";
import * as userCrtl2 from "../controllers/inventory.controllers.js"

import * as userCrtl3 from "../controllers/employees.controllers.js"

const router = Router()

//---------------------user routes------------------------------//
router.get('/profile', userCrtl.getUsers)
router.post('/profile', userCrtl.postUsers )
router.post('/login', userCrtl.Login )
router.patch('/profile', userCrtl.updateUsers)
router.delete('/profile', userCrtl.deleteUsers)

//----------------------- inventory routers ------------------------------------//

router.get('/inventory', userCrtl2.getInventory)
router.post('/inventory', userCrtl2.postInventory)
router.patch('/inventory/:id', userCrtl2.updateInventory)
router.delete('/inventory/:id', userCrtl2.deleteInventory)

//------------------rutas de empleados---------------------------------------------------
router.get('/traeremployed', userCrtl3.getEmployes)
router.post('/employed', userCrtl3.CreateEmployes );
router.post('/employed/login', userCrtl3.LoginEmployes );
router.patch('/employed/:num_employed',userCrtl3.UpdateEmployes);
router.delete('/employed/:num_employed', userCrtl3.DeleteEmployes);

export default router;