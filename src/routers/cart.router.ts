import { Router } from 'express';
import {
  createGuestCart,
  getCartById,
  getCartByIdItems,
  addCartLineItem,
  changeCartLineItem,
  removeCartLineItem,
} from '../controllers/cart.controller';

const router = Router();

router.get('/:id', getCartById);

router.get('/:id/items', getCartByIdItems);

router.post('/', createGuestCart);

router.post('/:id/items', addCartLineItem);

router.put('/:id/items/:itemId', changeCartLineItem);

router.delete('/:id/items/:itemId', removeCartLineItem);

module.exports = router;
