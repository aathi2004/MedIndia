import { http } from '../lib/api';
import type { DashboardStats, MedicalVisit, User } from '../types';

export const dashboardService = {
  stats: () => http.get<DashboardStats>('/dashboard/stats'),
  listVisits: (params: { search?: string; doctorId?: number; from?: string; to?: string } = {}) => {
    const qs = new URLSearchParams();
    if (params.search) qs.set('search', params.search);
    if (params.doctorId) qs.set('doctorId', String(params.doctorId));
    if (params.from) qs.set('from', params.from);
    if (params.to) qs.set('to', params.to);
    const suffix = qs.toString() ? `?${qs.toString()}` : '';
    return http.get<MedicalVisit[]>(`/visits${suffix}`);
  },
  updateVisit: (
    id: number,
    payload: {
      visitDate?: string;
      chiefComplaint?: string;
      symptoms?: string | null;
      bloodPressure?: string | null;
      heartRate?: number | string | null;
      temperature?: string | null;
      weight?: string | null;
      diagnosis?: string | null;
      treatmentPlan?: string | null;
      notes?: string | null;
    },
  ) => http.put<MedicalVisit>(`/visits/${id}`, payload),
  listDoctors: () => http.get<User[]>('/patients/doctors'),
};