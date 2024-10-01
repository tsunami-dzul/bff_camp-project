import api from '../../api/API';
import { ICommerceCarts } from '../../models/cart.model';

export const commerceCreateCartService = async (bearerToken: string) => {
  try {
    const data = await api.post('carts', {}, bearerToken);

    return data;
  } catch (error) {
    throw error;
  }
};

export const commerceGetCartByIdService = async (id: string, bearerToken: string) => {
  try {
    const data = await api.get(`carts/${id}`, bearerToken);

    return data;
  } catch (error) {
    throw error;
  }
};

export const commerceCartLineItemService = async (id: string, cartPayload: ICommerceCarts, bearerToken: string) => {
  try {
    const data = await api.post<any, ICommerceCarts>(`carts/${id}`, cartPayload, bearerToken);

    return data;
  } catch (error) {
    throw error;
  }
};
