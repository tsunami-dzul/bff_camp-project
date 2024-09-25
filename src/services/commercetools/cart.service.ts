import api from '../../api/API';

export const commerceCreateCartService = async () => {
  try {
    const data = await api.post('carts');

    return data;
  } catch (error) {
    throw error;
  }
};

export const commerceGetCartByIdService = async (id: string) => {
  try {
    const data = await api.get(`carts/${id}`);

    return data;
  } catch (error) {
    throw error;
  }
};

export const commerceCartLineItemService = async (id: string, cartPayload: any) => {
  try {
    const data = await api.post(`carts/${id}`, cartPayload);

    return data;
  } catch (error) {
    throw error;
  }
};
