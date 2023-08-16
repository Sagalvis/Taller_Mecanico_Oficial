import { Router } from "express";
import * as userCrtl from "../controllers/users.controllers.js";
import * as userCrtl1 from "../controllers/employees.controllers.js";


const router = Router()

//rutas de clientes
router.get('/customer/:identification', userCrtl.getCustomer);

router.post('/customer' , userCrtl.createCustomer);

router.post('/customer/login' , userCrtl.LoginUsers);

router.patch('/customer/:identification', userCrtl.updateCustomer);

router.delete('/customer/:identification', userCrtl.deleteCustomer);



//rutas de empleados

router.post('/employee', userCrtl1.CreateEmployes );

router.post('/employee/login', userCrtl1.LoginEmployes );

router.patch('/employee/:num_employed',userCrtl1.UpdateEmployes);

router.delete('/employee/:num_employed', userCrtl1.DeleteEmployes);

export default router;


