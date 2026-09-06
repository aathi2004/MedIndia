import { http } from '../lib/api';
import type { Appointment } from '../types';

export interface AppointmentInput {
  patientId: number;
  doctorId: number;
  appointmentDate: string;
  time?: string | null;
  type: Appointment['type'];
  reason?: string | null;
  status: Appointment['status'];
}

export const appointmentService = {
  list: (params: { date?: string; status?: string; doctorId?: number } = {}) => {
    const qs = new URLSearchParams();
    if (params.date) qs.set('date', params.date);
    if (params.status) qs.set('status', params.status);
    if (params.doctorId) qs.set('doctorId', String(params.doctorId));
    const suffix = qs.toString() ? `?${qs.toString()}` : '';
    return http.get<Appointment[]>(`/appointments${suffix}`);
  },
  get: (id: number) => http.get<Appointment>(`/appointments/${id}`),
  create: (payload: AppointmentInput) => http.post<Appointment>('/appointments', payload),
  update: (id: number, payload: Partial<AppointmentInput>) =>
    http.put<Appointment>(`/appointments/${id}`, payload),
  remove: (id: number) => http.delete<{ id: number }>(`/appointments/${id}`),
};