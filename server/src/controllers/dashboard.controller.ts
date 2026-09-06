import { Request, Response } from 'express';
import { prisma } from '../lib/prisma.js';
import { asyncHandler } from '../utils/asyncHandler.js';

/** GET /api/dashboard/stats */
export const dashboardStats = asyncHandler(async (_req: Request, res: Response) => {
  const now = new Date();
  const dayStart = new Date(now);
  dayStart.setHours(0, 0, 0, 0);
  const dayEnd = new Date(now);
  dayEnd.setHours(23, 59, 59, 999);

  const [totalPatients, todayAppointments, upcomingAppointments, totalVisits, doctors, recentPatients, upcomingList, recentVisits] =
    await Promise.all([
      prisma.patient.count(),
      prisma.appointment.count({ where: { appointmentDate: { gte: dayStart, lte: dayEnd } } }),
      prisma.appointment.count({
        where: { appointmentDate: { gte: dayStart }, status: { in: ['SCHEDULED', 'CONFIRMED'] } },
      }),
      prisma.medicalVisit.count(),
      prisma.user.count({ where: { role: 'DOCTOR' } }),
      prisma.patient.findMany({ orderBy: { createdAt: 'desc' }, take: 5 }),
      prisma.appointment.findMany({
        where: { appointmentDate: { gte: dayStart }, status: { in: ['SCHEDULED', 'CONFIRMED'] } },
        include: {
          patient: { select: { id: true, firstName: true, lastName: true, patientId: true } },
          doctor: { select: { name: true } },
        },
        orderBy: { appointmentDate: 'asc' },
        take: 6,
      }),
      prisma.medicalVisit.findMany({
        include: {
          patient: { select: { id: true, firstName: true, lastName: true, patientId: true, gender: true } },
          doctor: { select: { name: true } },
        },
        orderBy: { visitDate: 'desc' },
        take: 6,
      }),
    ]);

  res.json({
    success: true,
    data: {
      counts: {
        patients: totalPatients,
        todayAppointments,
        upcomingAppointments,
        totalVisits,
        doctors,
      },
      recentPatients,
      upcomingAppointmentsList: upcomingList,
      recentVisits,
    },
  });
});