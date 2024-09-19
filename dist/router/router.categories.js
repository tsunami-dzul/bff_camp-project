"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_categories_1 = require("../controllers/controller.categories");
const router = (0, express_1.Router)();
router.get('/categories', controller_categories_1.getCategories);
