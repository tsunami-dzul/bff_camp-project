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
exports.auth = void 0;
const auth_service_1 = require("../services/magento/auth.service");
const config_1 = require("../config/config");
const auth_service_2 = require("../services/commercetools/auth.service");
const bffTool = process.env.BFF_TOOL;
const auth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        let data = null;
        if (bffTool === config_1.config.commercetools) {
            data = yield (0, auth_service_2.commerceAuthService)();
        }
        else {
            data = yield (0, auth_service_1.authService)(username, password);
        }
        res.json({
            ok: true,
            data,
        });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            message: error,
        });
    }
});
exports.auth = auth;
