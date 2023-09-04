import { Router } from "express";
import * as userCrtl from "../controllers/practica.js";

const router = Router()

router.post("/crearvehicle", userCrtl.CrearVehicle)

export default router;