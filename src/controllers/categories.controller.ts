import { Request, Response } from 'express';
import { getCategoriesService } from '../services/magento/categories.service';
import { commerceGetCategoriesService } from '../services/commercetools/categorie.service';
import { getToken } from '../utils/getToken';
import { config } from '../config/config';

const bffTool = process.env.BFF_TOOL;

export const getCategories = async (req: Request, res: Response) => {
  try {
    const bearerToken = getToken(req);
    let data: any = null;

    if (bffTool === config.commercetools) {
      data = await commerceGetCategoriesService(bearerToken);
    } else {
      data = await getCategoriesService(bearerToken);
    }

    if (!data.message) {
      res.json({ ...data });
    } else {
      console.error(data.message);

      res.json({
        message: 'There was an unexpected error',
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
