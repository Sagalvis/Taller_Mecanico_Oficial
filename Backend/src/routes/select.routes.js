//----------------------- Select routers ------------------------------------
import { Router } from "express";
import * as userCrtl2 from "../controllers/select.controllers.js";

const router = Router();

router.get("/selectvechicle", userCrtl2.getSelectVechicle);
router.get("/selectcombustible", userCrtl2.getSelectCombustible); 
router.get("/selectcarroceria", userCrtl2.getSelectCarroceria); 
router.get("/selectestadoingreso", userCrtl2.getSelectEstadoIngreso);


export default router