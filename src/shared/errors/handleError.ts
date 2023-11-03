import { NextFunction, Request, Response } from 'express';

export const handleError = (
  error: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
) => {
  return res.status(error.statusCode || 500).json({
    error: {
      message: error.message,
    },
  });
};
