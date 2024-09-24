import { Router } from 'express';
import {
  createGuestCart,
  getCartById,
  getCartByIdItems,
  cartLineItem,
  createOffer,
} from '../controllers/cart.controller';

const router = Router();

router.get('/:id', getCartById);

router.get('/:id/items', getCartByIdItems);

router.post('/', createGuestCart);

router.post('/:id/order', createOffer);

router.put('/:id', cartLineItem);

module.exports = router;
