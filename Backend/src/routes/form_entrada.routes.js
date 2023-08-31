import { Router } from "express";
import * as userCrtl5 from "../controllers/form_entrada.controllers.js";
const router = Router();

router.post('/datos', userCrtl5.getformEntrada);
router.post('/send', userCrtl5.postformEntrada)
export default router;