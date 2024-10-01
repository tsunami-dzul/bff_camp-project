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
exports.createOffer = void 0;
const config_1 = require("../config/config");
const offer_service_1 = require("../services/commercetools/offer.service");
const cart_service_1 = require("../services/magento/cart.service");
const bffTool = process.env.BFF_TOOL;
const createOffer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cartId = req.params.id;
        let data = null;
        if (bffTool === config_1.config.commercetools) {
            const offer = req.body;
            data = yield (0, offer_service_1.commerceCreateOffer)(offer);
        }
        else {
            data = yield (0, cart_service_1.createOfferService)(cartId);
        }
        res.json(data);
    }
    catch (error) {
        res.status(500).json({
            message: error,
        });
    }
});
exports.createOffer = createOffer;
