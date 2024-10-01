"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const undici_1 = require("undici");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const agent = new undici_1.Agent({
    connect: {
        rejectUnauthorized: false,
    },
});
(0, undici_1.setGlobalDispatcher)(agent);
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/auth', require('./routes/auth.routes'));
app.use('/carts', require('./routes/cart.routes'));
app.use('/orders', require('./routes/order.routes'));
app.use('/products', require('./routes/products.routes'));
app.use('/categories', require('./routes/categories.routes'));
app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
