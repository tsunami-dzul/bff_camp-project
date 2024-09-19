"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_auth_1 = require("../controllers/controller.auth");
const router = (0, express_1.Router)();
router.post('/auth', controller_auth_1.auth);
