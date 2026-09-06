import { Request, Response } from 'express';
import { prisma } from '../lib/prisma.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/APIError.js';

const prescriptionInclude = {
  doctor: { select: { id: true, name: true } },
  visit: { select: { id: true, visitDate: true, diagnosis: true } },
  items: true,
} as const;

/** GET /api/patients/:id/prescriptions */
export const listPatientPrescriptions = asyncHandler(async (req: Request, res: Response) => {
  const patientId = Number(req.params.id);
  const patient = await prisma.patient.findUnique({ where: { id: patientId }, select: { id: true } });
  if (!patient) throw ApiError.notFound('Patient not found');

  const prescriptions = await prisma.prescription.findMany({
    where: { patientId },
    include: prescriptionInclude,
    orderBy: { prescribedDate: 'desc' },
  });
  res.json({ success: true, data: prescriptions });
});

/** POST /api/patients/:id/prescriptions */
export const createPrescription = asyncHandler(async (req: Request, res: Response) => {
  const patientId = Number(req.params.id);
  const patient = await prisma.patient.findUnique({ where: { id: patientId }, select: { id: true } });
  if (!patient) throw ApiError.notFound('Patient not found');

  const { visitId, notes, items } = req.body;

  // A prescription must reference a visit that actually belongs to this patient.
  const visit = await prisma.medicalVisit.findFirst({
    where: { id: visitId, patientId },
    select: { id: true, prescription: { select: { id: true } } },
  });
  if (!visit) throw ApiError.badRequest('Visit not found for this patient');
  if (visit.prescription) throw ApiError.conflict('This visit already has a prescription');

  const prescription = await prisma.prescription.create({
    data: {
      patientId,
      doctorId: req.user!.id,
      visitId,
      notes: notes || null,
      items: { create: items },
    },
    include: prescriptionInclude,
  });
  res.status(201).json({ success: true, data: prescription });
});

/** DELETE /api/prescriptions/:id — admin/doctor only, removes entire prescription. */
export const deletePrescription = asyncHandler(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const existing = await prisma.prescription.findUnique({ where: { id } });
  if (!existing) throw ApiError.notFound('Prescription not found');
  await prisma.prescription.delete({ where: { id } });
  res.json({ success: true, data: { id } });
});