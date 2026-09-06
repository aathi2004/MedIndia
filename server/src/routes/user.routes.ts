import { Router } from 'express';
import { Role } from '@prisma/client';
import { listUsers, createUser, getUser, deleteUser } from '../controllers/user.controller.js';
import { authenticate, authorize } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import { createUserSchema } from '../validators/schemas.js';

const router = Router();

router.get('/', authenticate, authorize(Role.ADMIN), listUsers);
router.post('/', authenticate, authorize(Role.ADMIN), validate(createUserSchema), createUser);
router.get('/:id', authenticate, authorize(Role.ADMIN), getUser);
router.delete('/:id', authenticate, authorize(Role.ADMIN), deleteUser);

export default router;