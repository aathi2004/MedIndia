export type UserRole = 'ADMIN' | 'DOCTOR' | 'RECEPTIONIST';
export type Gender = 'MALE' | 'FEMALE' | 'OTHER';
export type BloodGroup = 'A_POS' | 'A_NEG' | 'B_POS' | 'B_NEG' | 'AB_POS' | 'AB_NEG' | 'O_POS' | 'O_NEG';
export type AppointmentStatus = 'SCHEDULED' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED';
export type AppointmentType = 'CHECKUP' | 'FOLLOW_UP' | 'CONSULTATION' | 'EMERGENCY' | 'OTHER';

export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  createdAt: string;
}

export interface AuthUser {
  id: number;
  name: string;
  email: string;
  role: UserRole;
}

export interface Patient {
  id: number;
  patientId: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: Gender;
  phone: string;
  email: string | null;
  address: string | null;
  bloodGroup: BloodGroup | null;
  allergies: string | null;
  existingConditions: string | null;
  emergencyContactName: string | null;
  emergencyContactPhone: string | null;
  createdAt: string;
  updatedAt: string;
  lastVisitAt?: string | null;
}

export interface PrescriptionItem {
  id: number;
  medicineName: string;
  dosage: string;
  frequency: string;
  duration: string;
  instructions: string | null;
}

export interface Prescription {
  id: number;
  patientId: number;
  doctorId: number;
  visitId: number;
  prescribedDate: string;
  notes: string | null;
  doctor: { id: number; name: string };
  visit: { id: number; visitDate: string; diagnosis: string | null };
  items: PrescriptionItem[];
}

export interface MedicalVisit {
  id: number;
  patientId: number;
  doctorId: number;
  visitDate: string;
  chiefComplaint: string;
  symptoms: string | null;
  bloodPressure: string | null;
  heartRate: number | null;
  temperature: string | null;
  weight: string | null;
  diagnosis: string | null;
  treatmentPlan: string | null;
  notes: string | null;
  createdAt: string;
  doctor: { id: number; name: string; role: UserRole };
  patient?: { id: number; patientId: string; firstName: string; lastName: string };
  prescription: Prescription | null;
}

export interface Appointment {
  id: number;
  appointmentDate: string;
  time: string | null;
  type: AppointmentType;
  reason: string | null;
  status: AppointmentStatus;
  createdAt: string;
  patient: { id: number; patientId: string; firstName: string; lastName: string; phone: string | null };
  doctor: { id: number; name: string };
}

export interface DashboardStats {
  counts: {
    patients: number;
    todayAppointments: number;
    upcomingAppointments: number;
    totalVisits: number;
    doctors: number;
  };
  recentPatients: Patient[];
  upcomingAppointmentsList: Appointment[];
  recentVisits: MedicalVisit[];
}

export interface ClinicalSummary {
  symptoms: string;
  diagnosis: string;
  treatment: string;
  followUp: string;
  disclaimer: string;
  source: 'ai' | 'rule-based';
}

export interface Paginated<T> {
  data: T;
}

export const ROLE_LABELS: Record<UserRole, string> = {
  ADMIN: 'Administrator',
  DOCTOR: 'Doctor',
  RECEPTIONIST: 'Receptionist',
};

export const GENDER_LABELS: Record<Gender, string> = {
  MALE: 'Male',
  FEMALE: 'Female',
  OTHER: 'Other',
};

export const BLOOD_GROUP_LABELS: Record<BloodGroup, string> = {
  A_POS: 'A+',
  A_NEG: 'A-',
  B_POS: 'B+',
  B_NEG: 'B-',
  AB_POS: 'AB+',
  AB_NEG: 'AB-',
  O_POS: 'O+',
  O_NEG: 'O-',
};

export const APPOINTMENT_STATUS_LABELS: Record<AppointmentStatus, string> = {
  SCHEDULED: 'Scheduled',
  CONFIRMED: 'Confirmed',
  COMPLETED: 'Completed',
  CANCELLED: 'Cancelled',
};

export const APPOINTMENT_TYPE_LABELS: Record<AppointmentType, string> = {
  CHECKUP: 'Check-up',
  FOLLOW_UP: 'Follow-up',
  CONSULTATION: 'Consultation',
  EMERGENCY: 'Emergency',
  OTHER: 'Other',
};