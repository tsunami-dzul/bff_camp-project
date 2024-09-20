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
exports.getProductsByCategory = void 0;
const product_service_1 = require("../services/product.service");
const getToken_1 = require("../utils/getToken");
const getProductsByCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    try {
        const categoryId = (_a = req.query.categoryId) !== null && _a !== void 0 ? _a : '';
        const page = (_b = req.query.page) !== null && _b !== void 0 ? _b : 10;
        const offset = (_c = req.query.offset) !== null && _c !== void 0 ? _c : 0;
        const bearerToken = (0, getToken_1.getToken)(req);
        if (!categoryId) {
            return res.status(400).json({
                ok: false,
                message: 'The categoryId query value must be provided',
            });
        }
        const data = yield (0, product_service_1.getProductsByCategoryService)(categoryId.toString(), +offset, +page, bearerToken);
        if (!data.message) {
            res.json(Object.assign({}, data));
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
exports.getProductsByCategory = getProductsByCategory;
