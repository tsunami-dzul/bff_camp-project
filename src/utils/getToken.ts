import { Request } from 'express';

export const getToken = (req: Request): string => {
  if (req.headers.authorization) {
    const bearer = req.headers.authorization.split(' ')[0];

    if (bearer === 'Bearer') {
      return req.headers.authorization;
    }
  }

  return '';
};
