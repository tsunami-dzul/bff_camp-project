import { Request, Response } from 'express';
import { config } from '../config/config';
import { commerceCreateOffer } from '../services/commercetools/offer.service';
import { createOfferService } from '../services/magento/offer.service';

const bffTool = process.env.BFF_TOOL;

export const createOffer = async (req: Request, res: Response) => {
  try {
    const cartId = req.params.id;
    let data: any = null;

    if (bffTool === config.commercetools) {
      const offer = req.body;

      data = await commerceCreateOffer(offer);
    } else {
      data = await createOfferService(cartId);
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
