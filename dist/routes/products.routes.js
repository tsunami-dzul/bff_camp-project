"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_controller_1 = require("../controllers/products.controller");
const router = (0, express_1.Router)();
router.get('/', products_controller_1.getProducts);
router.get('/:sku', products_controller_1.getProductEntries);
module.exports = router;
