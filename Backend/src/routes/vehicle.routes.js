import { Router } from 'express';
import * as userCtr5 from '../controllers/vehicle.controllers.js';
const router = new Router();

router.get('/registervehicle', userCtr5.getVehicle );

router.post('/registervehicle/register', userCtr5.createVehicle)

router.delete('/registervehicle', userCtr5.deleteVehicle )

router.get('/registervehicle/:id', userCtr5.selectCarroceria )

router.get('registerVehicle/:property_card', userCtr5.getproperty)

export default router;