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
exports.getProductBySKUService = exports.getProductsByCategoryService = void 0;
const API_1 = __importDefault(require("../../api/API"));
const generateProductsByCategoryIdUrl_1 = require("../../utils/generateProductsByCategoryIdUrl");
const getProductsByCategoryService = (categoryId, offset, limit, bearerToken) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const url = (0, generateProductsByCategoryIdUrl_1.generateProductsByCategoryIdUrl)(categoryId, offset, limit);
        const data = yield API_1.default.get(url, bearerToken);
        return data;
    }
    catch (error) {
        throw error;
    }
});
exports.getProductsByCategoryService = getProductsByCategoryService;
const getProductBySKUService = (sku, bearerToken) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const url = (0, generateProductsByCategoryIdUrl_1.generateProductsBySKUUrl)(sku);
        const data = yield API_1.default.get(url, bearerToken);
        return data;
    }
    catch (error) {
        throw error;
    }
});
exports.getProductBySKUService = getProductBySKUService;
