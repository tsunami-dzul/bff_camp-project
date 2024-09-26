import { Request, Response } from 'express';
import { getProductBySKUService, getProductsByCategoryService } from '../services/magento/product.service';
import { getToken } from '../utils/getToken';
import { config } from '../config/config';
import { commerceGetProductsByCategoryService } from '../services/commercetools/product.service';

const bffTool = process.env.BFF_TOOL;

export const getProducts = async (req: Request, res: Response) => {
  try {
    const categoryId = req.query.categoryId ?? '';
    const sku = req.query.sku ?? '';
    const page = req.query.page ?? 10;
    const offset = req.query.offset ?? 0;
    const bearerToken = getToken(req);
    let data: any = null;

    if (categoryId) {
      data = await getProductsByCategory(categoryId.toString(), +page, +offset, bearerToken);
    } else if (sku) {
      data = await getProductBySku(req, res);
    } else {
      res.json({
        message: 'Request does not match any route.',
      });
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

const getProductsByCategory = async (categoryId: string, page: number, offset: number, bearerToken: string) => {
  try {
    if (bffTool === config.commercetools) {
      return await commerceGetProductsByCategoryService(categoryId, bearerToken);
    } else {
      return await getProductsByCategoryService(categoryId.toString(), offset, page, bearerToken);
    }
  } catch (error) {
    throw error;
  }
};

const getProductBySku = async (req: Request, res: Response) => {
  try {
    const sku = req.query.sku ?? '';
    const bearerToken = getToken(req);

    if (!sku) {
      return res.status(400).json({
        message: 'The categoryId query value must be provided',
      });
    }

    const data = await getProductBySKUService(sku.toString(), bearerToken);

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
