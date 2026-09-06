import { Request, Response } from 'express';
import { prisma } from '../lib/prisma.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/APIError.js';

const visitInclude = {
  doctor: { select: { id: true, name: true, role: true } },
  prescription: {
    include: { items: true },
  },
} as const;

/** GET /api/patients/:id/visits */
export const listPatientVisits = asyncHandler(async (req: Request, res: Response) => {
  const patientId = Number(req.params.id);
  const patient = await prisma.patient.findUnique({ where: { id: patientId }, select: { id: true } });
  if (!patient) throw ApiError.notFound('Patient not found');

  const visits = await prisma.medicalVisit.findMany({
    where: { patientId },
    include: visitInclude,
    orderBy: { visitDate: 'desc' },
  });
  res.json({ success: true, data: visits });
});

/** POST /api/patients/:id/visits */
export const createVisit = asyncHandler(async (req: Request, res: Response) => {
  const patientId = Number(req.params.id);
  const patient = await prisma.patient.findUnique({ where: { id: patientId }, select: { id: true } });
  if (!patient) throw ApiError.notFound('Patient not found');

  const { visitDate, temperature, weight, ...rest } = req.body;
  const visit = await prisma.medicalVisit.create({
    data: {
      patientId,
      doctorId: req.user!.id,
      visitDate: new Date(visitDate),
      temperature: temperature ? String(temperature) : null,
      weight: weight ? String(weight) : null,
      ...rest,
    },
    include: visitInclude,
  });
  res.status(201).json({ success: true, data: visit });
});

/** GET /api/visits/:id */
export const getVisit = asyncHandler(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const visit = await prisma.medicalVisit.findUnique({
    where: { id },
    include: visitInclude,
  });
  if (!visit) throw ApiError.notFound('Visit not found');
  res.json({ success: true, data: visit });
});

/** PUT /api/visits/:id */
export const updateVisit = asyncHandler(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const existing = await prisma.medicalVisit.findUnique({ where: { id } });
  if (!existing) throw ApiError.notFound('Visit not found');

  const { visitDate, temperature, weight, ...rest } = req.body;
  const visit = await prisma.medicalVisit.update({
    where: { id },
    data: {
      ...(visitDate ? { visitDate: new Date(visitDate) } : {}),
      ...(temperature !== undefined ? { temperature: temperature ? String(temperature) : null } : {}),
      ...(weight !== undefined ? { weight: weight ? String(weight) : null } : {}),
      ...rest,
    },
    include: visitInclude,
  });
  res.json({ success: true, data: visit });
});

/** GET /api/visits — list all visits (optionally filtered). */
export const listAllVisits = asyncHandler(async (req: Request, res: Response) => {
  const { doctorId, search, from, to } = req.query;

  const visits = await prisma.medicalVisit.findMany({
    where: {
      ...(doctorId && Number(doctorId) ? { doctorId: Number(doctorId) } : {}),
      ...(typeof search === 'string' && search.trim()
        ? {
            patient: {
              OR: [
                { firstName: { contains: search.trim(), mode: 'insensitive' } },
                { lastName: { contains: search.trim(), mode: 'insensitive' } },
              ],
            },
          }
        : {}),
      ...(typeof from === 'string' && from ? { visitDate: { gte: new Date(from) } } : {}),
      ...(typeof to === 'string' && to ? { visitDate: { lte: new Date(to) } } : {}),
    },
    include: { patient: { select: { id: true, firstName: true, lastName: true, patientId: true } }, ...visitInclude },
    orderBy: { visitDate: 'desc' },
    take: 100,
  });

  res.json({ success: true, data: visits });
});