import api from '../../api/API';

export const commerceCreateOffer = async (orderPayload: any) => {
  try {
    const data = await api.post('orders', orderPayload);

    return data;
  } catch (error) {
    throw error;
  }
};
