import { Request, Response } from 'express';
import { getToken } from '../utils/getToken';
import { createOrderService } from '../services/magento/cart.service';
import { commerceCreateOrderService } from '../services/commercetools/order.service';

export const createOrder = async (req: Request, res: Response) => {
  try {
    const cartId = req.params.id;

    const data = await createOrderService(cartId);

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

export const commerceCreateOrder = async (req: Request, res: Response) => {
  try {
    const bearerToken = getToken(req);
    const orderPayload = req.body;

    const data = await commerceCreateOrderService(orderPayload, bearerToken);

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
