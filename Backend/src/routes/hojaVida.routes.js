import { Router } from "express";
import * as userCrtl5 from "../controllers/hojaVida.controllers.js";
const router = Router();

router.post('/datos', userCrtl5.getHojavida);

export default router;