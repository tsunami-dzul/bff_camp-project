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
exports.commerceAuthService = void 0;
const API_1 = __importDefault(require("../../api/API"));
const commerceAuthService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clientId = process.env.CTP_CLIENT_ID;
        const clientSecret = process.env.CTP_CLIENT_SECRET;
        const scope = process.env.CTP_SCOPES;
        const region = process.env.CTP_REGION;
        const data = yield API_1.default.post(`https://${clientId}:${clientSecret}@auth.${region}.aws.commercetools.com/oauth/token?grant_type=client_credentials&scope=${scope}`);
        return data;
    }
    catch (error) {
        throw error;
    }
});
exports.commerceAuthService = commerceAuthService;
