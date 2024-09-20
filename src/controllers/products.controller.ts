import { Request, Response } from 'express';
import { getProductBySKUService, getProductsByCategoryService } from '../services/product.service';
import { getToken } from '../utils/getToken';

export const getProducts = async (req: Request, res: Response) => {
  try {
    const categoryId = req.query.categoryId ?? '';
    const sku = req.query.sku ?? '';

    if (categoryId) {
      getProductsByCategory(req, res);
    } else if (sku) {
      getProductBySku(req, res);
    } else {
      res.json({
        message: 'There is no match for the provided path',
      });
    }
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error,
    });
  }
};

const getProductsByCategory = async (req: Request, res: Response) => {
  try {
    const categoryId = req.query.categoryId ?? '';
    const page = req.query.page ?? 10;
    const offset = req.query.offset ?? 0;

    const bearerToken = getToken(req);

    if (!categoryId) {
      return res.status(400).json({
        ok: false,
        message: 'The categoryId query value must be provided',
      });
    }

    const data = await getProductsByCategoryService(categoryId.toString(), +offset, +page, bearerToken);

    if (!data.message) {
      res.json({ ...data });
    } else {
      console.error(data.message);

      res.json({
        ok: true,
        message: 'There was an unexpected error',
      });
    }
  } catch (error) {
    res.status(500).json({
      ok: false,
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
        ok: false,
        message: 'The categoryId query value must be provided',
      });
    }

    const data = await getProductBySKUService(sku.toString(), bearerToken);

    if (!data.message) {
      res.json({ ...data });
    } else {
      console.error(data.message);

      res.json({
        ok: true,
        message: 'There was an unexpected error',
      });
    }
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error,
    });
  }
};
