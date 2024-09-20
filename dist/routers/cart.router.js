"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cart_controller_1 = require("../controllers/cart.controller");
const router = (0, express_1.Router)();
router.post('/', cart_controller_1.createGuestCart);
router.get('/:id', cart_controller_1.getCartById);
router.get('/:id/items', cart_controller_1.getCartByIdItems);
module.exports = router;
