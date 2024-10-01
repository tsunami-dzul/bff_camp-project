import { Router } from 'express';
import { getProductEntries, getProducts } from '../controllers/products.controller';

const router = Router();

router.get('/', getProducts);

router.get('/:sku', getProductEntries);

module.exports = router;
