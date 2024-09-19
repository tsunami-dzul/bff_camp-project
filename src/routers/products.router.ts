import { Router } from 'express';
import { getProductsByCategory } from '../controllers/products.controller';

const router = Router();

router.get('/', getProductsByCategory);

module.exports = router;
