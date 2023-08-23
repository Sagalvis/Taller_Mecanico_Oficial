//----------------------- inventory routers ------------------------------------
import { Router } from "express";
import * as userCrtl2 from "../controllers/inventory.controllers.js";
const router = Router();

router.get('/inventory', userCrtl2.getInventory);
router.post('/inventory', userCrtl2.postInventory);
router.patch('/inventory/:id_product', userCrtl2.updateInventory);
router.delete('/inventory/:id_product', userCrtl2.deleteInventory);

export default router;