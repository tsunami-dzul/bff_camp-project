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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderService = exports.shippingAddressService = exports.removeCartLineItemService = exports.changeCartLineItemService = exports.addCartLineItemService = exports.getCartsByIdItemsService = exports.getCartsByIdService = exports.createGuestCartService = void 0;
const API_1 = __importDefault(require("../../api/API"));
const createGuestCartService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield API_1.default.post('guest-carts');
        return data;
    }
    catch (error) {
        throw error;
    }
});
exports.createGuestCartService = createGuestCartService;
const getCartsByIdService = (cartId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield API_1.default.get(`guest-carts/${cartId}`);
        return data;
    }
    catch (error) {
        throw error;
    }
});
exports.getCartsByIdService = getCartsByIdService;
const getCartsByIdItemsService = (cartId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield API_1.default.get(`guest-carts/${cartId}/items`);
        return data;
    }
    catch (error) {
        throw error;
    }
});
exports.getCartsByIdItemsService = getCartsByIdItemsService;
const addCartLineItemService = (cartId, cartItems) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield API_1.default.post(`guest-carts/${cartId}/items`, cartItems);
        return data;
    }
    catch (error) {
        throw error;
    }
});
exports.addCartLineItemService = addCartLineItemService;
const changeCartLineItemService = (cartId, itemId, cartItems) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield API_1.default.put(`guest-carts/${cartId}/items/${itemId}`, cartItems);
        return data;
    }
    catch (error) {
        throw error;
    }
});
exports.changeCartLineItemService = changeCartLineItemService;
const removeCartLineItemService = (cartId, itemId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield API_1.default.delete(`guest-carts/${cartId}/items/${itemId}`);
        return data;
    }
    catch (error) {
        throw error;
    }
});
exports.removeCartLineItemService = removeCartLineItemService;
const shippingAddressService = (cartId, addressInformation) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield API_1.default.post(`guest-carts/${cartId}/shipping-information`, addressInformation);
        return data;
    }
    catch (error) {
        throw error;
    }
});
exports.shippingAddressService = shippingAddressService;
const createOrderService = (cartId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield API_1.default.put(`guest-carts/${cartId}/order`);
        return data;
    }
    catch (error) {
        throw error;
    }
});
exports.createOrderService = createOrderService;
