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
    get(path, bearerToken) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${this.url}/${path}`, {
                    method: 'GET',
                    headers: {
                        Authorization: bearerToken !== null && bearerToken !== void 0 ? bearerToken : '',
                        'Content-Type': 'application/json',
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
    post(path, payload, bearerToken) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${this.url}/${path}`, {
                    method: 'POST',
                    headers: {
                        Authorization: bearerToken !== null && bearerToken !== void 0 ? bearerToken : '',
                        'Content-Type': 'application/json; charset=utf-8',
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
    put(path, payload, bearerToken) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${this.url}/${path}`, {
                    method: 'PUT',
                    headers: {
                        Authorization: bearerToken !== null && bearerToken !== void 0 ? bearerToken : '',
                        'Content-Type': 'application/json',
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
    delete(path, bearerToken) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${this.url}/${path}`, {
                    method: 'DELETE',
                    headers: {
                        Authorization: bearerToken !== null && bearerToken !== void 0 ? bearerToken : '',
                        'Content-Type': 'application/json',
                    },
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
