import { Router } from 'express';
import { Role } from '@prisma/client';
import {
  listAppointments,
  getAppointment,
  createAppointment,
  updateAppointment,
  deleteAppointment,
} from '../controllers/appointment.controller.js';
import { authenticate, authorize } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import { createAppointmentSchema, updateAppointmentSchema } from '../validators/schemas.js';

const router = Router();

// Appointments are visible to all authenticated staff.
router.get('/', authenticate, listAppointments);
router.get('/:id', authenticate, getAppointment);

// Creating/updating appointments is allowed for receptionist, doctor and admin.
router.post('/', authenticate, authorize(Role.ADMIN, Role.DOCTOR, Role.RECEPTIONIST), validate(createAppointmentSchema), createAppointment);
router.put('/:id', authenticate, authorize(Role.ADMIN, Role.DOCTOR, Role.RECEPTIONIST), validate(updateAppointmentSchema), updateAppointment);

// Deleting an appointment is limited to admins.
router.delete('/:id', authenticate, authorize(Role.ADMIN), deleteAppointment);

export default router;