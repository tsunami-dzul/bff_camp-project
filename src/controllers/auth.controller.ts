import { Request, Response } from 'express';
import { authService } from '../services/magento/auth.service';
import { IAuth } from '../models/auth.model';

export const auth = async (req: Request, res: Response) => {
  try {
    const { username, password }: IAuth = req.body;

    const data = await authService(username, password);

    res.json({
      ok: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error,
    });
  }
};
