import { Router } from 'express';
import { createGuestCart, getCartById, getCartByIdItems, cartLineItem } from '../controllers/cart.controller';

const router = Router();

router.get('/:id', getCartById);

router.get('/:id/items', getCartByIdItems);

router.post('/', createGuestCart);

router.put('/:id', cartLineItem);

module.exports = router;
