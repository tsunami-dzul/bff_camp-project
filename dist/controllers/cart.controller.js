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
exports.createOffer = exports.cartLineItem = exports.getCartByIdItems = exports.getCartById = exports.createGuestCart = void 0;
const cart_service_1 = require("../services/cart.service");
const cart_model_1 = require("../models/cart.model");
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
const cartLineItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cartId = req.params.id;
        const action = req.body.action;
        let response = null;
        if (action === cart_model_1.CartItemActions.AddLineItem) {
            const { variantId, quantity } = req.body.AddLineItem;
            const data = addCartLineItem(cartId, variantId, quantity);
            response = yield data;
        }
        else if (action === cart_model_1.CartItemActions.ChangeLineItemQuantity) {
            const { lineItemId, quantity } = req.body.ChangeLineItemQuantity;
            const data = changeCartLineItem(cartId, lineItemId, quantity);
            response = yield data;
        }
        else if (action === cart_model_1.CartItemActions.RemoveLineItem) {
            const { lineItemId } = req.body.RemoveLineItem;
            const data = removeCartLineItem(cartId, lineItemId);
            response = yield data;
        }
        else if (action === cart_model_1.CartItemActions.SetShippingAddress) {
            const shippingData = {
                addressInformation: {
                    shipping_address: {
                        country_id: req.body.SetShippingAddress.country,
                        firstname: req.body.SetShippingAddress.firstName,
                        lastname: req.body.SetShippingAddress.lastName,
                        street: [req.body.SetShippingAddress.streetName, req.body.SetShippingAddress.streetNumber],
                        postcode: req.body.SetShippingAddress.postalCode,
                        city: req.body.SetShippingAddress.city,
                        region: req.body.SetShippingAddress.region,
                        email: req.body.SetShippingAddress.email,
                    },
                    billing_address: {
                        country_id: req.body.SetShippingAddress.country,
                        firstname: req.body.SetShippingAddress.firstName,
                        lastname: req.body.SetShippingAddress.lastName,
                        street: [req.body.SetShippingAddress.streetName, req.body.SetShippingAddress.streetNumber],
                        postcode: req.body.SetShippingAddress.postalCode,
                        city: req.body.SetShippingAddress.city,
                        region: req.body.SetShippingAddress.region,
                        email: req.body.SetShippingAddress.email,
                        telephone: '0',
                    },
                    shipping_method_code: 'flatrate',
                    shipping_carrier_code: 'flatrate',
                },
            };
            const data = yield (0, cart_service_1.shippingAddressService)(cartId, shippingData);
            return res.json(data);
        }
        else {
            return res.status(404).json({
                message: 'The operation provided is not recognized',
            });
        }
        if (response && !response.message) {
            res.json(response);
        }
        else {
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
exports.cartLineItem = cartLineItem;
const createOffer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cartId = req.params.id;
        const data = yield (0, cart_service_1.createOfferService)(cartId);
        res.json(data);
    }
    catch (error) {
        res.status(500).json({
            message: error,
        });
    }
});
exports.createOffer = createOffer;
const addCartLineItem = (cartId, variantId, quantity) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cartItems = {
            cartItem: {
                sku: variantId,
                qty: quantity,
            },
        };
        return yield (0, cart_service_1.addCartLineItemService)(cartId, cartItems);
    }
    catch (error) {
        throw error;
    }
});
const changeCartLineItem = (cartId, lineItemId, quantity) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cartItems = {
            cartItem: {
                item_id: lineItemId,
                qty: quantity,
            },
        };
        return yield (0, cart_service_1.changeCartLineItemService)(cartId, lineItemId, cartItems);
    }
    catch (error) {
        throw error;
    }
});
const removeCartLineItem = (cartId, lineItemId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield (0, cart_service_1.removeCartLineItemService)(cartId, lineItemId);
    }
    catch (error) {
        throw error;
    }
});
