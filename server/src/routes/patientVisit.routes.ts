import { Router } from 'express';
import { Role } from '@prisma/client';
import { listPatientVisits, createVisit } from '../controllers/visit.controller.js';
import { authenticate, authorize } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import { createVisitSchema } from '../validators/schemas.js';

const router = Router({ mergeParams: true });

router.get('/', authenticate, authorize(Role.DOCTOR, Role.ADMIN), listPatientVisits);
router.post('/', authenticate, authorize(Role.DOCTOR), validate(createVisitSchema), createVisit);

export default router;