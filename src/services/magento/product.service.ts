import api from '../../api/API';
import { ProductsResponse } from '../../models/product.model';
import { generateProductsByCategoryIdUrl, generateProductsBySKUUrl } from '../../utils/generateProductsByCategoryIdUrl';

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

export const getProductBySKUService = async (sku: string, bearerToken: string): Promise<ProductsResponse> => {
  try {
    const url = generateProductsBySKUUrl(sku);

    const data = await api.get<ProductsResponse>(url, bearerToken);

    return data;
  } catch (error) {
    throw error;
  }
};
