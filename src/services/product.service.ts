import { generateProductsByCategoryIdUrl } from '../utils/generateProductsByCategoryIdUrl';
import api from '../api/API';
import { ProductsResponse } from '../models/product.model';

export const getProductsByCategoryService = async (
  categoryId: string,
  offset: number,
  limit: number,
  bearerToken: string
): Promise<ProductsResponse> => {
  try {
    const url = generateProductsByCategoryIdUrl(categoryId, offset, limit);

    const data = await api.get<ProductsResponse>(url, bearerToken);

    return data;
  } catch (error) {
    throw error;
  }
};
