import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { prisma } from '../lib/prisma.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/APIError.js';

const userSelect = { id: true, name: true, email: true, role: true, createdAt: true } as const;

/** GET /api/users (admin) */
export const listUsers = asyncHandler(async (_req: Request, res: Response) => {
  const users = await prisma.user.findMany({ select: userSelect, orderBy: { id: 'asc' } });
  res.json({ success: true, data: users });
});

/** POST /api/users (admin) */
export const createUser = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;

  const existing = await prisma.user.findUnique({ where: { email: email.toLowerCase().trim() } });
  if (existing) throw ApiError.conflict('A user with this email already exists');

  const user = await prisma.user.create({
    data: {
      name,
      email: email.toLowerCase().trim(),
      passwordHash: bcrypt.hashSync(password, 10),
      role,
    },
    select: userSelect,
  });
  res.status(201).json({ success: true, data: user });
});

/** GET /api/users/:id (admin) */
export const getUser = asyncHandler(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const user = await prisma.user.findUnique({ where: { id }, select: userSelect });
  if (!user) throw ApiError.notFound('User not found');
  res.json({ success: true, data: user });
});

/** DELETE /api/users/:id (admin) */
export const deleteUser = asyncHandler(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) throw ApiError.notFound('User not found');
  await prisma.user.delete({ where: { id } });
  res.json({ success: true, data: { id } });
});

/** GET /api/doctors — list all doctors (for selectors). */
export const listDoctors = asyncHandler(async (_req: Request, res: Response) => {
  const doctors = await prisma.user.findMany({
    where: { role: 'DOCTOR' },
    select: userSelect,
    orderBy: { name: 'asc' },
  });
  res.json({ success: true, data: doctors });
});