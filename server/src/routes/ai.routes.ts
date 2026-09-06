import { Router } from 'express';
import { Role } from '@prisma/client';
import { summarizeClinicalNote } from '../controllers/ai.controller.js';
import { authenticate, authorize } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import { clinicalNoteSchema } from '../validators/schemas.js';

const router = Router();

router.post(
  '/summarize-note',
  authenticate,
  authorize(Role.DOCTOR, Role.ADMIN),
  validate(clinicalNoteSchema),
  summarizeClinicalNote,
);

export default router;