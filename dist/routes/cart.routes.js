"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cart_controller_1 = require("../controllers/cart.controller");
const order_controller_1 = require("../controllers/order.controller");
const router = (0, express_1.Router)();
router.get('/:id', cart_controller_1.getCartById);
router.get('/:id/items', cart_controller_1.getCartByIdItems);
router.post('/', cart_controller_1.createGuestCart);
router.post('/:id', cart_controller_1.commerceCartLineItem);
router.post('/:id/order', order_controller_1.createOrder);
router.put('/:id', cart_controller_1.cartLineItem);
module.exports = router;
