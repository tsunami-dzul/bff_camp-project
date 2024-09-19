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
class API {
    constructor() {
        this.url = process.env.MAGENTO_API;
    }
    get(path, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                const response = yield fetch(`${this.url}/${path}`, {
                    method: 'GET',
                    headers: {
                        Authorization: (_a = headers === null || headers === void 0 ? void 0 : headers.Authorization) !== null && _a !== void 0 ? _a : '',
                        'Content-Type': (_b = headers === null || headers === void 0 ? void 0 : headers.ContentType) !== null && _b !== void 0 ? _b : 'application/json',
                    },
                });
                const data = yield response.json();
                return data;
            }
            catch (error) {
                throw new Error('There were an unexpcted error');
            }
        });
    }
    post(path, payload, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                const response = yield fetch(`${this.url}/${path}`, {
                    method: 'POST',
                    headers: {
                        Authorization: (_a = headers === null || headers === void 0 ? void 0 : headers.Authorization) !== null && _a !== void 0 ? _a : '',
                        'Content-Type': (_b = headers === null || headers === void 0 ? void 0 : headers.ContentType) !== null && _b !== void 0 ? _b : 'application/json',
                    },
                    body: JSON.stringify(payload),
                });
                const data = yield response.json();
                return data;
            }
            catch (error) {
                console.error(error);
                throw new Error('There were an unexpcted error');
            }
        });
    }
}
const api = new API();
exports.default = api;
