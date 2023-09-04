import { Router } from "express";
import * as userCrtl5 from "../controllers/form_entrada.controllers.js";
const router = Router();

router.post('/datos', userCrtl5.getformEntry);
router.post('/send', userCrtl5.postformEntry)
export default router;