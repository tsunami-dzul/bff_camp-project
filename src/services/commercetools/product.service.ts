import api from '../../api/API';

export const commerceGetProductsByCategoryService = async (categoryId: string, bearerToken: string) => {
  try {
    const data = await api.get(`product-projections/search?filter=categories.id:"${categoryId}"`, bearerToken);

    return data;
  } catch (error) {
    throw error;
  }
};
