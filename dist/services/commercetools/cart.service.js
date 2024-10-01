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
exports.commerceCartLineItemService = exports.commerceGetCartByIdService = exports.commerceCreateCartService = void 0;
const API_1 = __importDefault(require("../../api/API"));
const commerceCreateCartService = (bearerToken) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield API_1.default.post('carts', {}, bearerToken);
        return data;
    }
    catch (error) {
        throw error;
    }
});
exports.commerceCreateCartService = commerceCreateCartService;
const commerceGetCartByIdService = (id, bearerToken) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield API_1.default.get(`carts/${id}`, bearerToken);
        return data;
    }
    catch (error) {
        throw error;
    }
});
exports.commerceGetCartByIdService = commerceGetCartByIdService;
const commerceCartLineItemService = (id, cartPayload, bearerToken) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield API_1.default.post(`carts/${id}`, cartPayload, bearerToken);
        return data;
    }
    catch (error) {
        throw error;
    }
});
exports.commerceCartLineItemService = commerceCartLineItemService;
