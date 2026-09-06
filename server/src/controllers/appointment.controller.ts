import { Request, Response } from 'express';
import { AppointmentStatus } from '@prisma/client';
import { prisma } from '../lib/prisma.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/APIError.js';

const appointmentSelect = {
  id: true,
  appointmentDate: true,
  time: true,
  type: true,
  reason: true,
  status: true,
  createdAt: true,
  patient: {
    select: { id: true, patientId: true, firstName: true, lastName: true, phone: true },
  },
  doctor: { select: { id: true, name: true } },
} as const;

const VALID_STATUSES = Object.values(AppointmentStatus);

function parseAppointmentDate(value: unknown): { start: Date; end: Date } {
  const date = new Date(String(value));
  if (Number.isNaN(date.getTime())) throw ApiError.badRequest('Invalid appointment date');
  const start = new Date(date);
  start.setHours(0, 0, 0, 0);
  const end = new Date(date);
  end.setHours(23, 59, 59, 999);
  return { start, end };
}

/**
 * Basic scheduling conflict check: a doctor cannot have two appointments on
 * the same date at the same time slot.
 */
async function detectConflict(
  doctorId: number,
  appointmentDate: Date,
  time: string | null | undefined,
  excludeId?: number,
): Promise<void> {
  const { start, end } = parseAppointmentDate(appointmentDate);
  const existing = await prisma.appointment.findFirst({
    where: {
      doctorId,
      appointmentDate: { gte: start, lte: end },
      ...(time ? { time } : {}),
      status: { in: [AppointmentStatus.SCHEDULED, AppointmentStatus.CONFIRMED] },
      ...(excludeId ? { NOT: { id: excludeId } } : {}),
    },
  });
  if (existing) {
    throw ApiError.conflict(`Doctor has a conflicting appointment at ${time || 'that time'}`);
  }
}

/** GET /api/appointments?date=&status=&doctorId= */
export const listAppointments = asyncHandler(async (req: Request, res: Response) => {
  const { status, doctorId } = req.query;
  const where: Record<string, unknown> = {};

  if (typeof status === 'string' && VALID_STATUSES.includes(status as AppointmentStatus)) {
    where.status = status;
  }
  if (doctorId && Number(doctorId)) {
    where.doctorId = Number(doctorId);
  }
  if (typeof req.query.date === 'string' && req.query.date) {
    const { start, end } = parseAppointmentDate(req.query.date);
    where.appointmentDate = { gte: start, lte: end };
  }

  const appointments = await prisma.appointment.findMany({
    where,
    select: appointmentSelect,
    orderBy: [{ appointmentDate: 'asc' }, { time: 'asc' }],
  });
  res.json({ success: true, data: appointments });
});

/** GET /api/appointments/:id */
export const getAppointment = asyncHandler(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const appointment = await prisma.appointment.findUnique({
    where: { id },
    select: appointmentSelect,
  });
  if (!appointment) throw ApiError.notFound('Appointment not found');
  res.json({ success: true, data: appointment });
});

/** POST /api/appointments */
export const createAppointment = asyncHandler(async (req: Request, res: Response) => {
  const { patientId, doctorId, appointmentDate, time, type, reason, status } = req.body;

  await Promise.all([
    prisma.patient.findUnique({ where: { id: patientId }, select: { id: true } }).then((p) => {
      if (!p) throw ApiError.badRequest('Patient not found');
    }),
    prisma.user.findUnique({ where: { id: doctorId }, select: { id: true } }).then((u) => {
      if (!u) throw ApiError.badRequest('Doctor not found');
    }),
  ]);

  await detectConflict(doctorId, new Date(appointmentDate), time);

  const appointment = await prisma.appointment.create({
    data: {
      patientId,
      doctorId,
      appointmentDate: new Date(appointmentDate),
      time: time || null,
      type,
      reason: reason || null,
      status,
    },
    select: appointmentSelect,
  });
  res.status(201).json({ success: true, data: appointment });
});

/** PUT /api/appointments/:id */
export const updateAppointment = asyncHandler(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { patientId, doctorId, appointmentDate, time, type, reason, status } = req.body;

  const existing = await prisma.appointment.findUnique({ where: { id } });
  if (!existing) throw ApiError.notFound('Appointment not found');

  const nextDoctorId = doctorId ?? existing.doctorId;
  const nextDate = appointmentDate ? new Date(appointmentDate) : existing.appointmentDate;
  const nextTime = time !== undefined ? time : existing.time;

  await detectConflict(nextDoctorId, nextDate, nextTime, id);

  const appointment = await prisma.appointment.update({
    where: { id },
    data: {
      ...(patientId ? { patientId } : {}),
      ...(doctorId ? { doctorId } : {}),
      ...(appointmentDate ? { appointmentDate: nextDate } : {}),
      ...(time !== undefined ? { time } : {}),
      ...(type ? { type } : {}),
      ...(reason !== undefined ? { reason } : {}),
      ...(status ? { status } : {}),
    },
    select: appointmentSelect,
  });
  res.json({ success: true, data: appointment });
});

/** DELETE /api/appointments/:id */
export const deleteAppointment = asyncHandler(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const existing = await prisma.appointment.findUnique({ where: { id } });
  if (!existing) throw ApiError.notFound('Appointment not found');
  await prisma.appointment.delete({ where: { id } });
  res.json({ success: true, data: { id } });
});