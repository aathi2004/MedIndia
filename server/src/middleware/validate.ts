import { NextFunction, Request, Response } from 'express';
import { ZodError, ZodSchema } from 'zod';
import { ApiError } from '../utils/APIError.js';

export const validate =
  (schema: ZodSchema) => (req: Request, _res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      const errors = (result.error as ZodError).issues.reduce<Record<string, string[]>>(
        (acc, issue) => {
          const key = issue.path.join('.') || 'body';
          acc[key] ??= [];
          acc[key].push(issue.message);
          return acc;
        },
        {},
      );
      return next(ApiError.badRequest('Validation failed', errors));
    }
    req.body = result.data;
    next();
  };