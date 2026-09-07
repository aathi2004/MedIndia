import { Router } from 'express';
import { Role } from '../generated-client/index.js';
import { deletePrescription } from '../controllers/prescription.controller.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = Router();

router.delete('/:id', authenticate, authorize(Role.DOCTOR, Role.ADMIN), deletePrescription);

export default router;