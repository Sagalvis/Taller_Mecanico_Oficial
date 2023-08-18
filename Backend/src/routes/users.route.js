import { Router } from "express";
import * as userCrtl from "../controllers/users.controllers.js";

import * as userCrtl3 from "../controllers/Services.controllers.js";


const router = Router()


//rutas clientes
router.get('/profile', userCrtl.getUsers)

router.post('/profile', userCrtl.postUsers )

router.post('/login', userCrtl.Login )

router.patch('/profile', userCrtl.updateUsers)


router.delete('/profile', userCrtl.deleteUsers)

//------------------------Service------------------------//

router.post('/service', userCrtl3.createServices)

router.patch('/service/:id_service', userCrtl3.updateService)

router.delete('/eliminar/:id',userCrtl3.deleteService)

router.get('/traer/:id', userCrtl3.getservices);

router.get('/traer/', userCrtl3.getTodosservices);

export default router;