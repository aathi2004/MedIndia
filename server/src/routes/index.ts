import { Router } from 'express';
import authRoutes from './auth.routes.js';
import patientRoutes from './patient.routes.js';
import patientVisitRoutes from './patientVisit.routes.js';
import patientPrescriptionRoutes from './patientPrescription.routes.js';
import visitRoutes from './visit.routes.js';
import prescriptionRoutes from './prescription.routes.js';
import appointmentRoutes from './appointment.routes.js';
import dashboardRoutes from './dashboard.routes.js';
import aiRoutes from './ai.routes.js';
import userRoutes from './user.routes.js';

const router = Router();

router.get('/health', (_req, res) => {
  res.json({ success: true, data: { status: 'ok' } });
});

router.use('/auth', authRoutes);
router.use('/patients', patientRoutes);
router.use('/patients/:id/visits', patientVisitRoutes);
router.use('/patients/:id/prescriptions', patientPrescriptionRoutes);
router.use('/visits', visitRoutes);
router.use('/prescriptions', prescriptionRoutes);
router.use('/appointments', appointmentRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/ai', aiRoutes);
router.use('/users', userRoutes);

export default router;