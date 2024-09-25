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

    if (categoryId) {
      await getProductsByCategory(req, res);
    } else if (sku) {
      await getProductBySku(req, res);
    } else {
      res.json({
        message: 'Request does not match any route.',
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

const getProductsByCategory = async (req: Request, res: Response) => {
  try {
    const categoryId = req.query.categoryId ?? '';
    const page = req.query.page ?? 10;
    const offset = req.query.offset ?? 0;
    let data: any = null;

    const bearerToken = getToken(req);

    if (bffTool === config.commercetools) {
      data = await commerceGetProductsByCategoryService(categoryId.toString());
    } else {
      data = await getProductsByCategoryService(categoryId.toString(), +offset, +page, bearerToken);
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
