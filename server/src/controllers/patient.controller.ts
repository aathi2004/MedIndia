import { Request, Response } from 'express';
import { Prisma } from '../generated-client/index.js';
import { prisma } from '../lib/prisma.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/APIError.js';
import { generatePatientId } from '../services/patientId.service.js';

const GENDERS = ['MALE', 'FEMALE', 'OTHER'];

const patientSelect = {
  id: true,
  patientId: true,
  firstName: true,
  lastName: true,
  dateOfBirth: true,
  gender: true,
  phone: true,
  email: true,
  address: true,
  bloodGroup: true,
  allergies: true,
  existingConditions: true,
  emergencyContactName: true,
  emergencyContactPhone: true,
  createdAt: true,
  updatedAt: true,
} as const;

/** GET /api/patients?search=&gender=&page=&pageSize= */
export const listPatients = asyncHandler(async (req: Request, res: Response) => {
  const { search, gender } = req.query;
  const page = Math.max(1, Number(req.query.page) || 1);
  const pageSize = Math.min(100, Math.max(1, Number(req.query.pageSize) || 10));

  const where: Prisma.PatientWhereInput = {};

  if (typeof search === 'string' && search.trim()) {
    const q = search.trim();
    where.OR = [
      { firstName: { contains: q, mode: 'insensitive' } },
      { lastName: { contains: q, mode: 'insensitive' } },
      { patientId: { contains: q, mode: 'insensitive' } },
      { phone: { contains: q } },
      { email: { contains: q, mode: 'insensitive' } },
    ];
  }

  if (typeof gender === 'string' && GENDERS.includes(gender)) {
    where.gender = gender as Prisma.PatientWhereInput['gender'];
  }

  const [total, patients] = await Promise.all([
    prisma.patient.count({ where }),
    prisma.patient.findMany({
      where,
      select: patientSelect,
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * pageSize,
      take: pageSize,
    }),
  ]);

  // Efficiently attach the most recent visit date for the page's patients.
  const ids = patients.map((p) => p.id);
  const lastVisits = ids.length
    ? await prisma.medicalVisit.groupBy({
        by: ['patientId'],
        where: { patientId: { in: ids } },
        _max: { visitDate: true },
      })
    : [];
  const lastVisitByPatient = new Map(
    lastVisits.map((row) => [row.patientId, row._max.visitDate]),
  );
  const patientsWithLastVisit = patients.map((p) => ({
    ...p,
    lastVisitAt: lastVisitByPatient.get(p.id) ?? null,
  }));

  res.json({
    success: true,
    data: {
      patients: patientsWithLastVisit,
      pagination: { page, pageSize, total, totalPages: Math.ceil(total / pageSize) },
    },
  });
});

/** GET /api/patients/:id */
export const getPatient = asyncHandler(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const patient = await prisma.patient.findUnique({
    where: { id },
    select: patientSelect,
  });
  if (!patient) throw ApiError.notFound('Patient not found');
  res.json({ success: true, data: patient });
});

/** POST /api/patients */
export const createPatient = asyncHandler(async (req: Request, res: Response) => {
  const patientId = await generatePatientId();
  const { dateOfBirth, ...rest } = req.body;
  const patient = await prisma.patient.create({
    data: { ...rest, patientId, dateOfBirth: new Date(dateOfBirth), email: rest.email || null },
    select: patientSelect,
  });
  res.status(201).json({ success: true, data: patient });
});

/** PUT /api/patients/:id */
export const updatePatient = asyncHandler(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { dateOfBirth, ...rest } = req.body;

  const existing = await prisma.patient.findUnique({ where: { id } });
  if (!existing) throw ApiError.notFound('Patient not found');

  const patient = await prisma.patient.update({
    where: { id },
    data: {
      ...rest,
      ...(dateOfBirth ? { dateOfBirth: new Date(dateOfBirth) } : {}),
      email: rest.email === undefined ? undefined : rest.email || null,
    },
    select: patientSelect,
  });
  res.json({ success: true, data: patient });
});

/** DELETE /api/patients/:id */
export const deletePatient = asyncHandler(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const existing = await prisma.patient.findUnique({ where: { id } });
  if (!existing) throw ApiError.notFound('Patient not found');
  await prisma.patient.delete({ where: { id } });
  res.json({ success: true, data: { id } });
});