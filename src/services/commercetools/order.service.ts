import api from '../../api/API';

export const commerceCreateOrderService = async (orderPayload: any, bearerToken: string) => {
  try {
    const data = await api.post('orders', orderPayload, bearerToken);

    return data;
  } catch (error) {
    throw error;
  }
};
