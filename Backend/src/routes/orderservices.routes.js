import { router } from 'express';
import * as userCtrl7 from '../controllers/orderservices.controllers';


const router = Router();

router.post('/products', userCtrl7.sendProducts)
router.delete('/products', userCtrl7.deleteProducts)


export default router;