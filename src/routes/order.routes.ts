import { Router } from 'express';
import { commerceCreateOrder } from '../controllers/order.controller';

const router = Router();

router.post('/', commerceCreateOrder);

module.exports = router;
