import { Router } from "express";
import * as userCrtl2 from "../controllers/select.controllers.js";

const router = Router();

// RUTAS PARA OBTENER INFORMACION EN LA TABLA [ORDEN DE REPARACIÓN]
router.get("/getstatus", userCrtl2.getStatus);