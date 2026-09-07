import { NextFunction, Request, Response } from 'express';
import { Prisma } from '../generated-client/index.js';
import { ApiError } from '../utils/APIError.js';

/**
 * Central error handler. Every error from controllers passes through here so
 * responses are consistent and client-safe (no stack traces / internals leaked).
 */
export function errorHandler(err: unknown, _req: Request, res: Response, _next: NextFunction) {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      ...(err.errors ? { errors: err.errors } : {}),
    });
  }

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === 'P2002') {
      return res.status(409).json({
        success: false,
        message: 'A record with that value already exists (unique constraint)',
      });
    }
    if (err.code === 'P2003') {
      return res.status(409).json({
        success: false,
        message: 'Record is referenced by other data and cannot be deleted',
      });
    }
    if (err.code === 'P2025') {
      return res.status(404).json({ success: false, message: 'Record not found' });
    }
  }

  // Body parsing / JSON errors from Express
  if (err instanceof SyntaxError && 'status' in err) {
    return res.status(400).json({ success: false, message: 'Invalid JSON payload' });
  }

  console.error('Unhandled error:', err);
  return res.status(500).json({
    success: false,
    message: 'Internal server error',
  });
}

export function notFoundHandler(_req: Request, res: Response) {
  res.status(404).json({ success: false, message: 'Route not found' });
}