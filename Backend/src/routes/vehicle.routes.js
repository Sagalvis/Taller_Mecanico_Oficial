import { Router } from 'exprees';
import * as userCtr5 from '../controllers/vehicle.controllers.js';
const router = new Router();

router.get('/registervehicle', userCtr5.getVehicle );

router.post('/registervehicle/register', userCtr5.createVehicle)

router.delete('/registervehicle', userCtr5.deleteVehicle )




export default router;