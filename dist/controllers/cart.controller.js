"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeCartLineItem = exports.changeCartLineItem = exports.addCartLineItem = exports.getCartByIdItems = exports.getCartById = exports.createGuestCart = void 0;
const cart_service_1 = require("../services/cart.service");
const createGuestCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, cart_service_1.createGuestCartService)();
        if (!data.message) {
            res.json(data);
        }
        else {
            console.error(data.message);
            res.json({
                message: 'There was an unexpected error',
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: error,
        });
    }
});
exports.createGuestCart = createGuestCart;
const getCartById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cartId = req.params.id;
        const data = yield (0, cart_service_1.getCartsByIdService)(cartId);
        if (!data.message) {
            res.json(data);
        }
        else {
            console.error(data.message);
            res.json({
                message: 'There was an unexpected error',
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: error,
        });
    }
});
exports.getCartById = getCartById;
const getCartByIdItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cartId = req.params.id;
        const data = yield (0, cart_service_1.getCartsByIdItemsService)(cartId);
        if (!data.message) {
            res.json(data);
        }
        else {
            console.error(data.message);
            res.json({
                message: 'There was an unexpected error',
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: error,
        });
    }
});
exports.getCartByIdItems = getCartByIdItems;
const addCartLineItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cartId = req.params.id;
        const cartItems = {
            item_id: req.body.cartItem.item_id,
            sku: req.body.cartItem.sku,
            qty: req.body.cartItem.qty,
            name: req.body.cartItem.name,
            price: req.body.cartItem.price,
            product_type: req.body.cartItem.product_type,
            quote_id: req.body.cartItem.quote_id,
            product_option: req.body.cartItem.product_option,
            extension_attributes: req.body.cartItem.extension_attributes,
        };
        const data = yield (0, cart_service_1.addCartLineItemService)(cartId, cartItems);
        if (!data.message) {
            res.json(data);
        }
        else {
            console.error(data.message);
            res.json({
                message: 'There was an unexpected error',
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: error,
        });
    }
});
exports.addCartLineItem = addCartLineItem;
const changeCartLineItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cartId = req.params.id;
        const itemId = req.params.itemId;
        const cartItems = {
            item_id: req.body.item_id,
            sku: req.body.sku,
            qty: req.body.qty,
            name: req.body.name,
            price: req.body.price,
            product_type: req.body.product_type,
            quote_id: req.body.product_id,
            product_option: req.body.product_option,
            extension_attributes: req.body.extension_attributes,
        };
        const data = yield (0, cart_service_1.changeCartLineItemService)(cartId, itemId, cartItems);
        if (!data.message) {
            res.json(data);
        }
        else {
            console.error(data.message);
            res.json({
                message: 'There was an unexpected error',
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: error,
        });
    }
});
exports.changeCartLineItem = changeCartLineItem;
const removeCartLineItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cartId = req.params.id;
        const itemId = req.params.itemId;
        const data = yield (0, cart_service_1.removeCartLineItemService)(cartId, itemId);
        if (!data.message) {
            res.json(data);
        }
        else {
            console.error(data.message);
            res.json({
                message: 'There was an unexpected error',
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: error,
        });
    }
});
exports.removeCartLineItem = removeCartLineItem;
