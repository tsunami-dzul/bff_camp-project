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
exports.getCategories = void 0;
const categories_service_1 = require("../services/categories.service");
const getToken_1 = require("../utils/getToken");
const getCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bearerToken = (0, getToken_1.getToken)(req);
        const data = yield (0, categories_service_1.getCategoriesService)(bearerToken);
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
exports.getCategories = getCategories;
