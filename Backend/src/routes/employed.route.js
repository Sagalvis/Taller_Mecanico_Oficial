//------------------rutas de empleados---------------------------------------------------
import { Router } from "express";
import * as userCrtl3 from "../controllers/employees.controllers.js";
const router = Router();

router.get('/employed', userCrtl3.getEmployes)
router.post('/employed', userCrtl3.CreateEmployes );
router.post('/employed/login', userCrtl3.LoginEmployes );
router.patch('/employed/:num_employed',userCrtl3.UpdateEmployes);
router.delete('/employed/:num_employed', userCrtl3.DeleteEmployes);

export default router;