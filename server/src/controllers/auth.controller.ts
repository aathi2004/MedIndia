import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import { prisma } from '../lib/prisma.js';
import { signToken } from '../lib/jwt.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/APIError.js';

export const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body as { email: string; password: string };

  const user = await prisma.user.findUnique({
    where: { email: email.toLowerCase().trim() },
    select: { id: true, name: true, email: true, role: true, passwordHash: true },
  });

  if (!user || !bcrypt.compareSync(password, user.passwordHash)) {
    throw ApiError.unauthorized('Invalid email or password');
  }

  const safeUser = { id: user.id, name: user.name, email: user.email, role: user.role };
  const token = signToken(safeUser);

  res.json({ success: true, data: { user: safeUser, token } });
});

export const me = asyncHandler(async (req: Request, res: Response) => {
  res.json({ success: true, data: req.user });
});