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
exports.getCartByIdItems = exports.getCartById = exports.createGuestCart = void 0;
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
                ok: true,
                message: 'There was an unexpected error',
            });
        }
    }
    catch (error) {
        res.status(500).json({
            ok: false,
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
                ok: true,
                message: 'There was an unexpected error',
            });
        }
    }
    catch (error) {
        res.status(500).json({
            ok: false,
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
                ok: true,
                message: 'There was an unexpected error',
            });
        }
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            message: error,
        });
    }
});
exports.getCartByIdItems = getCartByIdItems;
