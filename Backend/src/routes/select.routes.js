//----------------------- Select routers ------------------------------------
import { Router } from "express";
import * as userCrtl2 from "../controllers/select.controllers.js";

const router = Router();

router.get("/selectvechicle", userCrtl2.getSelectVechicle);
router.get("/selectcombustible", userCrtl2.getSelectCombustible); 
router.get("/selectcarroceria", userCrtl2.getSelectCarroceria); 
router.get("/selectestadoingreso", userCrtl2.getSelectEstadoIngreso);
router.get("/selectstatus", userCrtl2.getSelectStatus);
router.get("/selectcheckbike", userCrtl2.getSelectCheckBike);
router.get("/selectcheckcar", userCrtl2.getSelectCheckCar);
router.get("./getcliente",userCrtl2.getClienteFactura );



export default router