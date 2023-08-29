import { Router } from "express";
import * as userCrtl5 from "../controllers/hojaVida.controllers.js";
const router = Router();

router.get('/datos', userCrtl5.postHojavida);

export default router;