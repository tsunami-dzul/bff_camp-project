import api from '../../api/API';

export const commerceGetCategoriesService = async (bearerToken: string): Promise<any> => {
  try {
    const data = await api.get<any>('categories', bearerToken);

    return data;
  } catch (error) {
    throw error;
  }
};
