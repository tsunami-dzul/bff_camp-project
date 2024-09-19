import { Request, Response } from 'express';
import { getProductsByCategoryService } from '../services/product.service';
import { getToken } from '../utils/getToken';
import { IHeader } from '../models/header.model';

export const getProductsByCategory = async (req: Request, res: Response) => {
  try {
    const categoryId = req.query.categoryId ?? '';
    const page = req.query.page ?? 10;
    const offset = req.query.offset ?? 0;

    const bearerToken = getToken(req);
    const headers: IHeader = { Authorization: bearerToken };

    if (!categoryId) {
      return res.status(400).json({
        ok: false,
        message: 'The categoryId query value must be provided',
      });
    }

    const data = await getProductsByCategoryService(categoryId.toString(), +offset, +page, headers);

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
