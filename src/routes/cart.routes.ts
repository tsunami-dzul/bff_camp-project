import { Router } from 'express';
import {
  createGuestCart,
  getCartById,
  getCartByIdItems,
  cartLineItem,
  commerceCartLineItem,
} from '../controllers/cart.controller';
import { createOrder } from '../controllers/order.controller';

const router = Router();

router.get('/:id', getCartById);

router.get('/:id/items', getCartByIdItems);

router.post('/', createGuestCart);

router.post('/:id', commerceCartLineItem);

router.post('/:id/order', createOrder);

router.put('/:id', cartLineItem);

module.exports = router;
