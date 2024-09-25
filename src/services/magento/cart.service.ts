import api from '../../api/API';
import { ICart, ICartItem, IShippingPayload } from '../../models/cart.model';

export const createGuestCartService = async (): Promise<ICart> => {
  try {
    const data = await api.post<ICart>('guest-carts');

    return data;
  } catch (error) {
    throw error;
  }
};

export const getCartsByIdService = async (cartId: string): Promise<ICart> => {
  try {
    const data = await api.get<ICart>(`guest-carts/${cartId}`);

    return data;
  } catch (error) {
    throw error;
  }
};

export const getCartsByIdItemsService = async (cartId: string): Promise<ICart> => {
  try {
    const data = await api.get<ICart>(`guest-carts/${cartId}/items`);

    return data;
  } catch (error) {
    throw error;
  }
};

export const addCartLineItemService = async (cartId: string, cartItems: ICartItem): Promise<ICart> => {
  try {
    const data = await api.post<ICart>(`guest-carts/${cartId}/items`, cartItems);

    return data;
  } catch (error) {
    throw error;
  }
};

export const changeCartLineItemService = async (
  cartId: string,
  itemId: number,
  cartItems: ICartItem
): Promise<ICart> => {
  try {
    const data = await api.put<ICart>(`guest-carts/${cartId}/items/${itemId}`, cartItems);

    return data;
  } catch (error) {
    throw error;
  }
};

export const removeCartLineItemService = async (cartId: string, itemId: number): Promise<ICart> => {
  try {
    const data = await api.delete<ICart>(`guest-carts/${cartId}/items/${itemId}`);

    return data;
  } catch (error) {
    throw error;
  }
};

export const shippingAddressService = async (cartId: string, addressInformation: IShippingPayload) => {
  try {
    const data = await api.post(`guest-carts/${cartId}/shipping-information`, addressInformation);

    return data;
  } catch (error) {
    throw error;
  }
};
