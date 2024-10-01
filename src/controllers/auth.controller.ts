import { Request, Response } from 'express';
import { authService } from '../services/magento/auth.service';
import { IAuth } from '../models/auth.model';
import { config } from '../config/config';
import { commerceAuthService } from '../services/commercetools/auth.service';

const bffTool = process.env.BFF_TOOL;

export const auth = async (req: Request, res: Response) => {
  try {
    const { username, password }: IAuth = req.body;
    let data: any = null;

    if (bffTool === config.commercetools) {
      data = await commerceAuthService();
    } else {
      data = await authService(username, password);
    }

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
