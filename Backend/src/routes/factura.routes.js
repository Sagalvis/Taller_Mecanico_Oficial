import { Router } from "express";
import * as userCrtl5 from "../controllers/factura.controllers.js";


const router = Router()

router.post("/infocustomer", userCrtl5.getFacturacustomers);
router.post("/infovehicle", userCrtl5.getFacturaVehicle);



export default router