import { Router } from 'express';
import { Role } from '@prisma/client';
import { listPatientPrescriptions, createPrescription } from '../controllers/prescription.controller.js';
import { authenticate, authorize } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import { createPrescriptionSchema } from '../validators/schemas.js';

const router = Router({ mergeParams: true });

router.get('/', authenticate, authorize(Role.DOCTOR, Role.ADMIN), listPatientPrescriptions);
router.post('/', authenticate, authorize(Role.DOCTOR), validate(createPrescriptionSchema), createPrescription);

export default router;