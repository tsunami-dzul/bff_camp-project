import api from '../../api/API';
import { CategoryResponse } from '../../models/category.model';

export const getCategoriesService = async (bearerToken: string): Promise<CategoryResponse> => {
  try {
    const data = await api.get<CategoryResponse>('categories', bearerToken);

    return data;
  } catch (error) {
    throw error;
  }
};
