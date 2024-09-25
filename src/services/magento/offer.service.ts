import api from '../../api/API';

export const createOfferService = async (cartId: string): Promise<number> => {
  try {
    const data = await api.put<number>(`guest-carts/${cartId}/order`);

    return data;
  } catch (error) {
    throw error;
  }
};
