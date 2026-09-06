import { NextFunction, Request, Response } from 'express';
import { Role } from '@prisma/client';
import { verifyToken } from '../lib/jwt.js';
import { prisma } from '../lib/prisma.js';
import { ApiError } from '../utils/APIError.js';

/**
 * Authentication middleware.
 * Reads the `Authorization: Bearer <token>` header, verifies the JWT and
 * loads the authenticated user onto `req.user`.
 */
export async function authenticate(req: Request, _res: Response, next: NextFunction) {
  try {
    const header = req.headers.authorization;
    if (!header?.startsWith('Bearer ')) {
      throw ApiError.unauthorized('Missing or malformed Authorization header');
    }
    const token = header.slice('Bearer '.length);
    const payload = verifyToken(token);

    const user = await prisma.user.findUnique({
      where: { id: payload.sub },
      select: { id: true, name: true, email: true, role: true },
    });
    if (!user) throw ApiError.unauthorized('User no longer exists');

    req.user = user;
    next();
  } catch (err) {
    if (err instanceof ApiError) return next(err);
    return next(ApiError.unauthorized('Invalid or expired token'));
  }
}

/**
 * Role-based authorization. Must be used after `authenticate`.
 * Usage: authorize(Role.ADMIN) or authorize(Role.DOCTOR, Role.ADMIN)
 */
export function authorize(...roles: Role[]) {
  return (req: Request, _res: Response, next: NextFunction) => {
    if (!req.user) return next(ApiError.unauthorized());
    if (!roles.includes(req.user.role)) {
      return next(ApiError.forbidden('You do not have permission to perform this action'));
    }
    next();
  };
}