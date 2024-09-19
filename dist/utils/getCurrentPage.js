"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentPage = void 0;
const getCurrentPage = (offset, pageSize) => {
    return Math.floor(offset / pageSize) + 1;
};
exports.getCurrentPage = getCurrentPage;
