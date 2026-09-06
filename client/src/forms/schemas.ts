import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Enter a valid email'),
  password: z.string().min(1, 'Password is required'),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

const phonePattern = /^[0-9+\-\s]{7,20}$/;

export const patientFormSchema = z
  .object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    dateOfBirth: z.string().min(1, 'Date of birth is required').refine((v) => !Number.isNaN(new Date(v).getTime()), 'Enter a valid date'),
    gender: z.enum(['MALE', 'FEMALE', 'OTHER'], { message: 'Select a gender' }),
    phone: z.string().regex(phonePattern, 'Enter a valid phone number'),
    email: z
      .string()
      .nullable()
      .optional()
      .refine((v) => !v || z.string().email().safeParse(v).success, 'Enter a valid email'),
    address: z.string().nullable().optional(),
    bloodGroup: z.enum(['A_POS', 'A_NEG', 'B_POS', 'B_NEG', 'AB_POS', 'AB_NEG', 'O_POS', 'O_NEG']).nullable().optional(),
    allergies: z.string().nullable().optional(),
    existingConditions: z.string().nullable().optional(),
    emergencyContactName: z.string().nullable().optional(),
    emergencyContactPhone: z
      .string()
      .nullable()
      .optional()
      .refine((v) => !v || phonePattern.test(v), 'Enter a valid phone number'),
  })
  .superRefine((val, ctx) => {
    if (!val.dateOfBirth) return;
    const dob = new Date(val.dateOfBirth);
    if (dob > new Date()) {
      ctx.addIssue({ code: 'custom', path: ['dateOfBirth'], message: 'Date of birth cannot be in the future' });
      return;
    }
    const age = new Date().getFullYear() - dob.getFullYear();
    if (age > 120) {
      ctx.addIssue({ code: 'custom', path: ['dateOfBirth'], message: 'That date of birth is unreasonable' });
    }
  });

export type PatientFormValues = z.infer<typeof patientFormSchema>;

export const visitFormSchema = z.object({
  visitDate: z.string().min(1, 'Visit date is required'),
  chiefComplaint: z.string().min(3, 'Briefly describe the chief complaint'),
  symptoms: z.string().nullable().optional(),
  bloodPressure: z
    .string()
    .nullable()
    .optional()
    .refine((v) => !v || /^\d{2,3}\/\d{2,3}$/.test(v), 'Format like 120/80'),
  heartRate: z
    .string()
    .nullable()
    .optional()
    .refine((v) => !v || Number(v) >= 20 && Number(v) <= 250, 'Heart rate out of range'),
  temperature: z
    .string()
    .nullable()
    .optional()
    .refine((v) => !v || !Number.isNaN(Number(v)), 'Enter a valid temperature'),
  weight: z
    .string()
    .nullable()
    .optional()
    .refine((v) => !v || !Number.isNaN(Number(v)), 'Enter a valid weight'),
  diagnosis: z.string().nullable().optional(),
  treatmentPlan: z.string().nullable().optional(),
  notes: z.string().nullable().optional(),
});

export type VisitFormValues = z.infer<typeof visitFormSchema>;

export const prescriptionFormSchema = z.object({
  visitId: z.string().min(1, 'Select a visit'),
  notes: z.string().nullable().optional(),
  items: z
    .array(
      z.object({
        medicineName: z.string().min(1, 'Medicine name is required'),
        dosage: z.string().min(1, 'Dosage is required'),
        frequency: z.string().min(1, 'Frequency is required'),
        duration: z.string().min(1, 'Duration is required'),
        instructions: z.string().nullable().optional(),
      }),
    )
    .min(1, 'Add at least one medicine'),
});

export type PrescriptionFormValues = z.infer<typeof prescriptionFormSchema>;

export const appointmentFormSchema = z.object({
  patientId: z.coerce.number().min(1, 'Select a patient'),
  doctorId: z.coerce.number().min(1, 'Select a doctor'),
  appointmentDate: z.string().min(1, 'Date is required'),
  time: z
    .string()
    .nullable()
    .optional()
    .refine((v) => !v || /^\d{2}:\d{2}$/.test(v), 'Use HH:MM format'),
  type: z.enum(['CHECKUP', 'FOLLOW_UP', 'CONSULTATION', 'EMERGENCY', 'OTHER']),
  reason: z.string().nullable().optional(),
  status: z.enum(['SCHEDULED', 'CONFIRMED', 'COMPLETED', 'CANCELLED']),
});

export type AppointmentFormValues = z.infer<typeof appointmentFormSchema>;

export const userFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Enter a valid email'),
  password: z
    .string()
    .min(8, 'At least 8 characters')
    .regex(/[A-Z]/, 'Include an uppercase letter')
    .regex(/[a-z]/, 'Include a lowercase letter')
    .regex(/[0-9]/, 'Include a number'),
  role: z.enum(['ADMIN', 'DOCTOR', 'RECEPTIONIST']),
});

export type UserFormValues = z.infer<typeof userFormSchema>;