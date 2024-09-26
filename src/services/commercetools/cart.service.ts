import api from '../../api/API';

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

export const commerceCartLineItemService = async (id: string, cartPayload: any, bearerToken: string) => {
  try {
    const data = await api.post<any>(`carts/${id}`, cartPayload, bearerToken);

    return data;
  } catch (error) {
    throw error;
  }
};
