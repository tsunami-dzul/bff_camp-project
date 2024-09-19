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
const service_categories_1 = require("../services/service.categories");
const getToken_1 = require("../utils/getToken");
const getCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bearerToken = (0, getToken_1.getToken)(req);
        const headers = { Authorization: bearerToken };
        const data = yield (0, service_categories_1.getCategoriesService)(headers);
        if (data) {
            res.json({
                ok: true,
                data,
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            message: 'There was an unexpected error',
        });
    }
});
exports.getCategories = getCategories;
