import { Router } from "express";
import * as userCrtl from "../controllers/admin.controllers.js";

const router = Router()




router.get('/customer/count', userCrtl.CountUser)

router.get('/employed/count', userCrtl.CountEmployed)

router.get('/product/count', userCrtl.CountProduct)

router.get('/vehicle/count', userCrtl.CountVehicle)

export default router
