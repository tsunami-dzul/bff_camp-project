import { Request, Response } from 'express';
import { getCategoriesService } from '../services/categories.service';
import { getToken } from '../utils/getToken';

export const getCategories = async (req: Request, res: Response) => {
  try {
    const bearerToken = getToken(req);

    const data = await getCategoriesService(bearerToken);

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
