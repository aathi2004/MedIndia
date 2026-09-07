import { Router } from 'express';
import { Role } from '../generated-client/index.js';
import {
  listPatients,
  getPatient,
  createPatient,
  updatePatient,
  deletePatient,
} from '../controllers/patient.controller.js';
import { listDoctors } from '../controllers/user.controller.js';
import { authenticate, authorize } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import { createPatientSchema, updatePatientSchema } from '../validators/schemas.js';

const router = Router();

// Everyone with an account can view patients.
router.get('/', authenticate, listPatients);
router.get('/doctors', authenticate, listDoctors);
router.get('/:id', authenticate, getPatient);

// Registering/editing patients is restricted to staff-level roles.
router.post('/', authenticate, authorize(Role.ADMIN, Role.DOCTOR, Role.RECEPTIONIST), validate(createPatientSchema), createPatient);
router.put('/:id', authenticate, authorize(Role.ADMIN, Role.DOCTOR, Role.RECEPTIONIST), validate(updatePatientSchema), updatePatient);
router.delete('/:id', authenticate, authorize(Role.ADMIN), deletePatient);

export default router;