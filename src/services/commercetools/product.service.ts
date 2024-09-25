import api from '../../api/API';

export const commerceGetProductsByCategoryService = async (categoryId: string) => {
  try {
    const data = await api.get(`product-projections/search?filter=categories.id:"${categoryId}"`);

    return data;
  } catch (error) {
    throw error;
  }
};
