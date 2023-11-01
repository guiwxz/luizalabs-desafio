import { Request, Response, NextFunction } from 'express';
import { AnyZodObject, ZodError } from 'zod';

export const validateReq =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await schema.parseAsync({
        body: req.body,
        file: req.file,
        query: req.query,
        params: req.params,
      });

      req.body = result.body;
      req.file = result.file;
      req.query = result.query;
      req.params = result.params;

      return next();
    } catch (error) {
      const firstError = (error as ZodError).issues[0];
      return res.status(400).json({
        error: {
          message: firstError.message,
          path: firstError.path,
        },
      });
    }
  };
