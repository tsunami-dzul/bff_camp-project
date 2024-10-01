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
exports.commerceCreateOrder = exports.createOrder = void 0;
const getToken_1 = require("../utils/getToken");
const cart_service_1 = require("../services/magento/cart.service");
const order_service_1 = require("../services/commercetools/order.service");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cartId = req.params.id;
        const data = yield (0, cart_service_1.createOrderService)(cartId);
        res.json(data);
    }
    catch (error) {
        res.status(500).json({
            message: error,
        });
    }
});
exports.createOrder = createOrder;
const commerceCreateOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bearerToken = (0, getToken_1.getToken)(req);
        const orderPayload = req.body;
        const data = yield (0, order_service_1.commerceCreateOrderService)(orderPayload, bearerToken);
        res.json(data);
    }
    catch (error) {
        res.status(500).json({
            message: error,
        });
    }
});
exports.commerceCreateOrder = commerceCreateOrder;
