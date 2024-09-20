"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateProductsBySKUUrl = exports.generateProductsByCategoryIdUrl = void 0;
const getCurrentPage_1 = require("./getCurrentPage");
const generateProductsByCategoryIdUrl = (categoryId, offset, limit) => {
    const queryParams = new URLSearchParams();
    queryParams.set('searchCriteria[filter_groups][0][filters][0][field]', 'category_id');
    queryParams.set('searchCriteria[filter_groups][0][filters][0][value]', `${categoryId}`);
    queryParams.set('searchCriteria[filter_groups][0][filters][0][condition_type]', 'eq');
    if (offset) {
        queryParams.set('searchCriteria[currentPage]', (0, getCurrentPage_1.getCurrentPage)(offset, limit).toString());
    }
    if (limit) {
        queryParams.set('searchCriteria[pageSize]', limit.toString());
    }
    return `products?${queryParams.toString()}`;
};
exports.generateProductsByCategoryIdUrl = generateProductsByCategoryIdUrl;
const generateProductsBySKUUrl = (sku) => {
    const queryParams = new URLSearchParams();
    queryParams.set('searchCriteria[filter_groups][0][filters][0][field]', 'sku');
    queryParams.set('searchCriteria[filter_groups][0][filters][0][value]', `${sku}`);
    queryParams.set('searchCriteria[filter_groups][0][filters][0][condition_type]', 'eq');
    return `products?${queryParams.toString()}`;
};
exports.generateProductsBySKUUrl = generateProductsBySKUUrl;
