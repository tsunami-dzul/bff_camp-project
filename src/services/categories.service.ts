import api from '../api/API';
import { IHeader } from '../models/header.model';

export const getCategoriesService = async (headers: IHeader) => {
  try {
    const data = await api.get('categories', headers);

    return data;
  } catch (error) {
    throw error;
  }
};
