import { Router } from 'express';
import { Role } from '../generated-client/index.js';
import { getVisit, updateVisit, listAllVisits } from '../controllers/visit.controller.js';
import { authenticate, authorize } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import { updateVisitSchema } from '../validators/schemas.js';

const router = Router();

// Visits & medical records are readable by doctors and admins only.
router.get('/', authenticate, authorize(Role.DOCTOR, Role.ADMIN), listAllVisits);
router.get('/:id', authenticate, authorize(Role.DOCTOR, Role.ADMIN), getVisit);
router.put('/:id', authenticate, authorize(Role.DOCTOR, Role.ADMIN), validate(updateVisitSchema), updateVisit);

export default router;