import { Router } from 'express';
import { createOfferService } from '../../services/magento/offer.service';

const router = Router();

router.post('/:id/order', createOfferService);
