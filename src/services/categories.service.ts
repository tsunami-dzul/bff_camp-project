import api from '../api/API';
import { CategoryResponse } from '../models/category.model';
import { IHeader } from '../models/header.model';

export const getCategoriesService = async (headers: IHeader): Promise<CategoryResponse> => {
  try {
    const data = await api.get<CategoryResponse>('categories', headers);

    return data;
  } catch (error) {
    throw error;
  }
};
