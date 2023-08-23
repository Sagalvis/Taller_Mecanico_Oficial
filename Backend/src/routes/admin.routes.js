import { Router } from "express";
import * as userCrtl from "../controllers/admin.controllers";

const router = Router()




router.get('/customer/count', userCrtl.CountUser)