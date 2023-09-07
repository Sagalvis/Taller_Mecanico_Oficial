import { Router } from 'express';
import * as userCtrl8 from '../controllers/orderservices.controllers.js';
const router = Router();

router.post('/products', userCtrl8.sendProducts)
router.delete('/products', userCtrl8.deleteProducts)
router.patch('/products/:identification/:matricula', userCtrl8.updateReason)
router.post('/products/inventory', userCtrl8.createProduct)

export default router;