import { router } from 'express';
import * as userCtrl7 from '../controllers/products.controllers';


const router = Router();

router.post('/products', userCtrl7.sendProducts)

export default router;