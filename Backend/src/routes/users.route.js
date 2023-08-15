import { Router } from "express";
import * as userCrtl from "../controllers/users.controllers.js";
import * as userCrtl1 from "../controllers/employees.controllers.js";


const router = Router()

//rutas de clientes
router.get('/profile', userCrtl.getCustomer);

router.post('/profile' , userCrtl.createCustomer);

router.patch('/profile', userCrtl.updateCustomer);

router.delete('/profile', userCrtl.deleteCustomer);



//rutas de empleados

router.post('/employee', userCrtl1.CreateEmployes );

router.post('/employee/login', userCrtl1.LoginEmployes );

router.patch('/employee',userCrtl1.UpdateEmployes);

router.delete('/employee', userCrtl1.DeleteEmployes);

export default router;