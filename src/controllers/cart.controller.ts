import { Request, Response } from 'express';
import {
  createGuestCartService,
  getCartsByIdService,
  getCartsByIdItemsService,
  addCartLineItemService,
  changeCartLineItemService,
  removeCartLineItemService,
} from '../services/cart.service';
import { ICartItem } from '../models/cart.model';

export const createGuestCart = async (req: Request, res: Response) => {
  try {
    const data = await createGuestCartService();

    if (!data.message) {
      res.json(data);
    } else {
      console.error(data.message);

      res.json({
        message: 'There was an unexpected error',
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

export const getCartById = async (req: Request, res: Response) => {
  try {
    const cartId = req.params.id;

    const data = await getCartsByIdService(cartId);

    if (!data.message) {
      res.json(data);
    } else {
      console.error(data.message);

      res.json({
        message: 'There was an unexpected error',
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

export const getCartByIdItems = async (req: Request, res: Response) => {
  try {
    const cartId = req.params.id;

    const data = await getCartsByIdItemsService(cartId);

    if (!data.message) {
      res.json(data);
    } else {
      console.error(data.message);

      res.json({
        message: 'There was an unexpected error',
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

export const addCartLineItem = async (req: Request, res: Response) => {
  try {
    const cartId = req.params.id;
    const cartItems: ICartItem = {
      item_id: req.body.cartItem.item_id,
      sku: req.body.cartItem.sku,
      qty: req.body.cartItem.qty,
      name: req.body.cartItem.name,
      price: req.body.cartItem.price,
      product_type: req.body.cartItem.product_type,
      quote_id: req.body.cartItem.quote_id,
      product_option: req.body.cartItem.product_option,
      extension_attributes: req.body.cartItem.extension_attributes,
    };

    const data = await addCartLineItemService(cartId, cartItems);

    if (!data.message) {
      res.json(data);
    } else {
      console.error(data.message);

      res.json({
        message: 'There was an unexpected error',
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

export const changeCartLineItem = async (req: Request, res: Response) => {
  try {
    const cartId = req.params.id;
    const itemId = req.params.itemId;
    const cartItems: ICartItem = {
      item_id: req.body.item_id,
      sku: req.body.sku,
      qty: req.body.qty,
      name: req.body.name,
      price: req.body.price,
      product_type: req.body.product_type,
      quote_id: req.body.product_id,
      product_option: req.body.product_option,
      extension_attributes: req.body.extension_attributes,
    };

    const data = await changeCartLineItemService(cartId, itemId, cartItems);

    if (!data.message) {
      res.json(data);
    } else {
      console.error(data.message);

      res.json({
        message: 'There was an unexpected error',
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

export const removeCartLineItem = async (req: Request, res: Response) => {
  try {
    const cartId = req.params.id;
    const itemId = req.params.itemId;

    const data = await removeCartLineItemService(cartId, itemId);

    if (!data.message) {
      res.json(data);
    } else {
      console.error(data.message);

      res.json({
        message: 'There was an unexpected error',
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
