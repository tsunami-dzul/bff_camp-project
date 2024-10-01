import api from '../../api/API';
import { IContentstackProduct } from '../../models/product.model';

export const IContentStackProductService = async (): Promise<IContentstackProduct> => {
  const contentType = process.env.CS_TYPE_UID;

  try {
    const data = await api.get<IContentstackProduct>(`${contentType}/entries`);

    return data;
  } catch (error) {
    throw error;
  }
};
