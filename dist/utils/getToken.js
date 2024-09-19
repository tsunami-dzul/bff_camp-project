"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToken = void 0;
const getToken = (req) => {
    if (req.headers.authorization) {
        const bearer = req.headers.authorization.split(' ')[0];
        if (bearer === 'Bearer') {
            return req.headers.authorization;
        }
    }
    return '';
};
exports.getToken = getToken;
