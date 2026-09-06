import { http } from '../lib/api';
import type { Patient, MedicalVisit, Prescription } from '../types';

export interface PatientListResult {
  patients: Patient[];
  pagination: { page: number; pageSize: number; total: number; totalPages: number };
}

export interface PatientInput {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: Patient['gender'];
  phone: string;
  email?: string | null;
  address?: string | null;
  bloodGroup?: Patient['bloodGroup'];
  allergies?: string | null;
  existingConditions?: string | null;
  emergencyContactName?: string | null;
  emergencyContactPhone?: string | null;
}

export const patientService = {
  list: (params: { search?: string; gender?: string; page?: number; pageSize?: number }) => {
    const qs = new URLSearchParams();
    if (params.search) qs.set('search', params.search);
    if (params.gender) qs.set('gender', params.gender);
    qs.set('page', String(params.page ?? 1));
    qs.set('pageSize', String(params.pageSize ?? 10));
    return http.get<PatientListResult>(`/patients?${qs.toString()}`);
  },
  get: (id: number) => http.get<Patient>(`/patients/${id}`),
  create: (payload: PatientInput) => http.post<Patient>('/patients', payload),
  update: (id: number, payload: PatientInput) => http.put<Patient>(`/patients/${id}`, payload),
  remove: (id: number) => http.delete<{ id: number }>(`/patients/${id}`),
  listVisits: (id: number) => http.get<MedicalVisit[]>(`/patients/${id}/visits`),
  createVisit: (
    id: number,
    payload: {
      visitDate: string;
      chiefComplaint: string;
      symptoms?: string | null;
      bloodPressure?: string | null;
      heartRate?: number | string | null;
      temperature?: string | null;
      weight?: string | null;
      diagnosis?: string | null;
      treatmentPlan?: string | null;
      notes?: string | null;
    },
  ) => http.post<MedicalVisit>(`/patients/${id}/visits`, payload),
  listPrescriptions: (id: number) => http.get<Prescription[]>(`/patients/${id}/prescriptions`),
  createPrescription: (
    id: number,
    payload: {
      visitId: number;
      notes?: string | null;
      items: Array<{ medicineName: string; dosage: string; frequency: string; duration: string; instructions?: string | null }>;
    },
  ) => http.post<Prescription>(`/patients/${id}/prescriptions`, payload),
};