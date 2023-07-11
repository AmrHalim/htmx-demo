import { Response } from 'express';

const REDIRECT_HEADER = 'HX-Redirect';

export const redirect = (res: Response, path: string) => {
  res.setHeader(REDIRECT_HEADER, path);
  return res.send('');
};
