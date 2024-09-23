import { Request, Response } from 'express';
import {
  createGuestCartService,
  getCartsByIdService,
  getCartsByIdItemsService,
  addCartLineItemService,
  changeCartLineItemService,
  removeCartLineItemService,
} from '../services/cart.service';
import { CartItemActions, ICart, ICartItem } from '../models/cart.model';

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

export const cartLineItem = async (req: Request, res: Response) => {
  try {
    const cartId = req.params.id;
    const action = req.body.action;
    let response: ICart | null = null;

    if (action === CartItemActions.AddLineItem) {
      const { variantId, quantity } = req.body.AddLineItem;

      const data = addCartLineItem(cartId, variantId, quantity);

      response = await data;
    } else if (action === CartItemActions.ChangeLineItemQuantity) {
      const { lineItemId, quantity } = req.body.ChangeLineItemQuantity;

      const data = changeCartLineItem(cartId, lineItemId, quantity);

      response = await data;
    } else if (action === CartItemActions.RemoveLineItem) {
      const { lineItemId } = req.body.RemoveLineItem;

      const data = removeCartLineItem(cartId, lineItemId);

      response = await data;
    } else {
      return res.status(404).json({
        message: 'The operation provided is not recognized',
      });
    }

    if (response && !response.message) {
      res.json(response);
    } else {
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

const addCartLineItem = async (cartId: string, variantId: string, quantity: number) => {
  try {
    const cartItems: ICartItem = {
      cartItem: {
        sku: variantId,
        qty: quantity,
      },
    };

    return await addCartLineItemService(cartId, cartItems);
  } catch (error) {
    throw error;
  }
};

const changeCartLineItem = async (cartId: string, lineItemId: number, quantity: number) => {
  try {
    const cartItems: ICartItem = {
      cartItem: {
        item_id: lineItemId,
        qty: quantity,
      },
    };

    return await changeCartLineItemService(cartId, lineItemId, cartItems);
  } catch (error) {
    throw error;
  }
};

const removeCartLineItem = async (cartId: string, lineItemId: number) => {
  try {
    return await removeCartLineItemService(cartId, lineItemId);
  } catch (error) {
    throw error;
  }
};
