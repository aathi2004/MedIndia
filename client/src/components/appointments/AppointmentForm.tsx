import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { appointmentFormSchema, type AppointmentFormValues } from '../../forms/schemas';
import { FormField } from '../ui/FormField';
import { Input, Select, Textarea } from '../ui/Field';
import { Button } from '../ui/Button';
import type { Appointment, Patient } from '../../types';
import { APPOINTMENT_TYPE_LABELS, APPOINTMENT_STATUS_LABELS, type User } from '../../types';
import { toISODate, formatAppointmentTime } from '../../lib/utils';

interface AppointmentFormProps {
  patients: Patient[];
  doctors: User[];
  appointment?: Appointment;
  defaultPatientId?: number;
  onSubmit: (values: AppointmentFormValues) => Promise<void>;
  onCancel: () => void;
  busy?: boolean;
}

export function AppointmentForm({ patients, doctors, appointment, defaultPatientId, onSubmit, onCancel, busy }: AppointmentFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues: appointment
      ? {
          patientId: appointment.patient.id,
          doctorId: appointment.doctor.id,
          appointmentDate: toISODate(appointment.appointmentDate),
          time: appointment.time ?? '',
          type: appointment.type,
          reason: appointment.reason,
          status: appointment.status,
        }
      : {
          patientId: defaultPatientId ?? 0,
          doctorId: 0,
          appointmentDate: toISODate(new Date()),
          time: '10:00',
          type: 'CHECKUP',
          reason: null,
          status: 'SCHEDULED',
        },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <FormField label="Patient" error={errors.patientId?.message} required>
        <Select {...register('patientId')}>
          <option value="">Select patient</option>
          {patients.map((p) => (
            <option key={p.id} value={p.id}>
              {p.patientId} — {p.firstName} {p.lastName}
            </option>
          ))}
        </Select>
      </FormField>

      <FormField label="Doctor" error={errors.doctorId?.message} required>
        <Select {...register('doctorId')}>
          <option value="">Select doctor</option>
          {doctors.map((d) => (
            <option key={d.id} value={d.id}>
              {d.name}
            </option>
          ))}
        </Select>
      </FormField>

      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="Date" error={errors.appointmentDate?.message} required>
          <Input type="date" {...register('appointmentDate')} />
        </FormField>
        <FormField label="Time (HH:MM)" error={errors.time?.message}>
          <Input type="time" {...register('time')} />
        </FormField>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="Type" error={errors.type?.message}>
          <Select {...register('type')}>
            {Object.entries(APPOINTMENT_TYPE_LABELS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </Select>
        </FormField>
        <FormField label="Status" error={errors.status?.message}>
          <Select {...register('status')}>
            {Object.entries(APPOINTMENT_STATUS_LABELS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </Select>
        </FormField>
      </div>

      <FormField label="Reason">
        <Textarea rows={2} placeholder="Why is this appointment happening?" {...register('reason')} />
      </FormField>

      {appointment && (
        <p className="rounded-md bg-slate-50 px-3 py-2 text-xs text-slate-500">
          Currently: {formatAppointmentTime(appointment.time)} on {toISODate(appointment.appointmentDate)} —{' '}
          {APPOINTMENT_STATUS_LABELS[appointment.status]}
        </p>
      )}

      <div className="flex justify-end gap-2 pt-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" loading={busy}>
          {appointment ? 'Save changes' : 'Book appointment'}
        </Button>
      </div>
    </form>
  );
}