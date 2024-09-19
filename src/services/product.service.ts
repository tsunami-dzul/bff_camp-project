import { generateProductsByCategoryIdUrl } from '../utils/generateProductsByCategoryIdUrl';
import api from '../api/API';
import { IHeader } from '../models/header.model';
import { ProductsResponse } from '../models/product.model';

export const getProductsByCategoryService = async (
  categoryId: string,
  offset: number,
  limit: number,
  headers: IHeader
): Promise<ProductsResponse> => {
  try {
    const url = generateProductsByCategoryIdUrl(categoryId, offset, limit);

    const data = await api.get<ProductsResponse>(url, headers);

    return data;
  } catch (error) {
    throw error;
  }
};
