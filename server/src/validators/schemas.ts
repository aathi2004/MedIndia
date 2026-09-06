import { z } from 'zod';
import { AppointmentStatus, AppointmentType, BloodGroup, Gender, Role } from '@prisma/client';

const password = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .regex(/[A-Z]/, 'Password must contain an uppercase letter')
  .regex(/[a-z]/, 'Password must contain a lowercase letter')
  .regex(/[0-9]/, 'Password must contain a digit');

export const loginSchema = z.object({
  email: z.string().email('A valid email is required'),
  password: z.string().min(1, 'Password is required'),
});

const phonePattern = /^[0-9+\-\s]{7,20}$/;

export const patientFields = {
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  dateOfBirth: z.coerce.date({ message: 'Date of birth is required' }),
  gender: z.nativeEnum(Gender, { message: 'Gender is required' }),
  phone: z.string().regex(phonePattern, 'Phone must be 7-20 digits'),
  email: z.string().email('A valid email is required').optional().or(z.literal('')).nullable(),
  address: z.string().optional().nullable(),
  bloodGroup: z.nativeEnum(BloodGroup).optional().nullable(),
  allergies: z.string().optional().nullable(),
  existingConditions: z.string().optional().nullable(),
  emergencyContactName: z.string().optional().nullable(),
  emergencyContactPhone: z
    .string()
    .regex(phonePattern, 'Emergency contact phone must be valid')
    .optional()
    .nullable(),
};

const patientShape = z.object(patientFields);

function validateDateOfBirth(
  value: { dateOfBirth?: Date },
  ctx: z.RefinementCtx,
): void {
  if (!value.dateOfBirth) return;
  if (value.dateOfBirth > new Date()) {
    ctx.addIssue({ code: 'custom', path: ['dateOfBirth'], message: 'Date of birth cannot be in the future' });
  }
  const age = new Date().getFullYear() - value.dateOfBirth.getFullYear();
  if (age > 120) {
    ctx.addIssue({ code: 'custom', path: ['dateOfBirth'], message: 'Date of birth is unreasonable' });
  }
}

export const createPatientSchema = patientShape.superRefine(validateDateOfBirth);
export const updatePatientSchema = z.object(patientFields).partial().superRefine(validateDateOfBirth);

const numericString = z.string().optional().nullable();

export const createVisitSchema = z.object({
  visitDate: z.coerce.date({ message: 'A valid visit date is required' }),
  chiefComplaint: z.string().min(3, 'Chief complaint must be at least 3 characters'),
  symptoms: z.string().optional().nullable(),
  bloodPressure: z.string().optional().nullable(),
  heartRate: z.coerce.number().int().min(20, 'Heart rate must be valid').max(250).optional().nullable(),
  temperature: numericString,
  weight: numericString,
  diagnosis: z.string().optional().nullable(),
  treatmentPlan: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
});

export const updateVisitSchema = createVisitSchema.partial();

export const prescriptionItemSchema = z.object({
  medicineName: z.string().min(1, 'Medicine name is required'),
  dosage: z.string().min(1, 'Dosage is required'),
  frequency: z.string().min(1, 'Frequency is required'),
  duration: z.string().min(1, 'Duration is required'),
  instructions: z.string().optional().nullable(),
});

export const createPrescriptionSchema = z.object({
  visitId: z.number().int().positive(),
  notes: z.string().optional().nullable(),
  items: z.array(prescriptionItemSchema).min(1, 'At least one medicine is required'),
});

export const createAppointmentSchema = z.object({
  patientId: z.number().int().positive(),
  doctorId: z.number().int().positive(),
  appointmentDate: z.coerce.date({ message: 'A valid date is required' }),
  time: z.string().optional().nullable(),
  type: z.nativeEnum(AppointmentType).default(AppointmentType.CHECKUP),
  reason: z.string().optional().nullable(),
  status: z.nativeEnum(AppointmentStatus).default(AppointmentStatus.SCHEDULED),
});

export const updateAppointmentSchema = createAppointmentSchema.partial();

export const createUserSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('A valid email is required'),
  password,
  role: z.nativeEnum(Role),
});

export const clinicalNoteSchema = z.object({
  note: z.string().min(10, 'The clinical note is too short to summarise'),
});