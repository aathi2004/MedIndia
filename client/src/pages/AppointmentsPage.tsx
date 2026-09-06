import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { CalendarPlus, Pencil, Trash2, CheckCircle2, XCircle, CalendarDays } from 'lucide-react';
import { appointmentService } from '../services/appointments';
import { patientService } from '../services/patients';
import { dashboardService } from '../services/dashboard';
import { useAuth } from '../hooks/useAuth';
import { Modal } from '../components/ui/Modal';
import { Button } from '../components/ui/Button';
import { Card, CardBody } from '../components/ui/Card';
import { LoadingState } from '../components/ui/LoadingState';
import { ErrorState, EmptyState } from '../components/ui/StateViews';
import { Badge } from '../components/ui/Badge';
import { AppointmentForm } from '../components/appointments/AppointmentForm';
import type { Appointment } from '../types';
import { APPOINTMENT_STATUS_LABELS, APPOINTMENT_TYPE_LABELS } from '../types';
import { formatDate, formatAppointmentTime, toISODate } from '../lib/utils';

const STATUS_TONES: Record<Appointment['status'], 'yellow' | 'blue' | 'green' | 'red'> = {
  SCHEDULED: 'yellow',
  CONFIRMED: 'blue',
  COMPLETED: 'green',
  CANCELLED: 'red',
};

export function AppointmentsPage() {
  const { user } = useAuth();
  const qc = useQueryClient();
  const [filterDate, setFilterDate] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [filterDoctor, setFilterDoctor] = useState('');

  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Appointment | undefined>(undefined);
  const [busy, setBusy] = useState(false);

  const canManage = user?.role === 'ADMIN' || user?.role === 'DOCTOR' || user?.role === 'RECEPTIONIST';
  const canDelete = user?.role === 'ADMIN';

  const appointmentsQuery = useQuery({
    queryKey: ['appointments', filterDate, filterStatus, filterDoctor],
    queryFn: () => appointmentService.list({ date: filterDate, status: filterStatus, doctorId: Number(filterDoctor) || undefined }),
  });

  const patientsQuery = useQuery({ queryKey: ['patients-options'], queryFn: () => patientService.list({ page: 1, pageSize: 100 }) });
  const doctorsQuery = useQuery({ queryKey: ['doctors'], queryFn: dashboardService.listDoctors });

  const createMutation = useMutation({ mutationFn: appointmentService.create });
  const updateMutation = useMutation({ mutationFn: ({ id, input }: { id: number; input: Parameters<typeof appointmentService.update>[1] }) => appointmentService.update(id, input) });
  const deleteMutation = useMutation({ mutationFn: appointmentService.remove });

  const emptyFilters = !filterDate && !filterStatus && !filterDoctor;

  const handleSave = async (values: Parameters<typeof appointmentService.create>[0]) => {
    setBusy(true);
    try {
      if (editing) {
        await updateMutation.mutateAsync({ id: editing.id, input: values });
      } else {
        await createMutation.mutateAsync(values);
      }
      qc.invalidateQueries({ queryKey: ['appointments'] });
      qc.invalidateQueries({ queryKey: ['dashboard-stats'] });
      setModalOpen(false);
    } finally {
      setBusy(false);
    }
  };

  const handleDelete = async (a: Appointment) => {
    if (!window.confirm('Delete this appointment?')) return;
    await deleteMutation.mutateAsync(a.id);
    qc.invalidateQueries({ queryKey: ['appointments'] });
    qc.invalidateQueries({ queryKey: ['dashboard-stats'] });
  };

  const markAs = async (a: Appointment, status: Appointment['status']) => {
    await updateMutation.mutateAsync({
      id: a.id,
      input: {
        status,
        patientId: a.patient.id,
        doctorId: a.doctor.id,
        appointmentDate: toISODate(a.appointmentDate),
        type: a.type,
      },
    });
    qc.invalidateQueries({ queryKey: ['appointments'] });
    qc.invalidateQueries({ queryKey: ['dashboard-stats'] });
  };

  if (appointmentsQuery.isLoading) return <LoadingState rows={5} message="Loading appointments…" />;
  if (appointmentsQuery.isError) {
    return <ErrorState title="Unable to load appointments" retry={appointmentsQuery.refetch} />;
  }

  const appointments = appointmentsQuery.data ?? [];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Appointments</h1>
          <p className="text-sm text-slate-500">Schedule and manage patient appointments</p>
        </div>
        {canManage && (
          <Button
            onClick={() => {
              setEditing(undefined);
              setModalOpen(true);
            }}
          >
            <CalendarPlus className="h-4 w-4" />
            Book appointment
          </Button>
        )}
      </div>

      <Card>
        <CardBody className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="date"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="w-full rounded-md border border-slate-300 py-2 pl-9 pr-3 text-sm focus:border-teal-500 focus:outline-none"
            />
          </div>
          <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-teal-500 focus:outline-none">
            <option value="">All statuses</option>
            {Object.entries(APPOINTMENT_STATUS_LABELS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          <select value={filterDoctor} onChange={(e) => setFilterDoctor(e.target.value)} className="rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-teal-500 focus:outline-none">
            <option value="">All doctors</option>
            {(doctorsQuery.data ?? []).map((d) => (
              <option key={d.id} value={d.id}>
                {d.name}
              </option>
            ))}
          </select>
        </CardBody>
      </Card>

      {appointments.length === 0 ? (
        <EmptyState
          title={emptyFilters ? 'No appointments yet' : 'No appointments match your filters'}
          hint={emptyFilters ? 'Book the first appointment to get started.' : 'Try adjusting the filters.'}
          action={
            canManage ? (
              <Button
                onClick={() => {
                  setEditing(undefined);
                  setModalOpen(true);
                }}
              >
                <CalendarPlus className="h-4 w-4" />
                Book appointment
              </Button>
            ) : undefined
          }
        />
      ) : (
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-left text-xs font-medium uppercase tracking-wide text-slate-500">
                  <th className="px-4 py-3">Patient</th>
                  <th className="px-4 py-3">Doctor</th>
                  <th className="px-4 py-3">Date / Time</th>
                  <th className="hidden px-4 py-3 md:table-cell">Type</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {appointments.map((a) => (
                  <tr key={a.id} className="transition-colors hover:bg-slate-50">
                    <td className="px-4 py-3">
                      <p className="font-medium text-slate-800">
                        {a.patient.firstName} {a.patient.lastName}
                      </p>
                      <p className="text-xs text-slate-400">{a.patient.phone}</p>
                    </td>
                    <td className="px-4 py-3">{a.doctor.name}</td>
                    <td className="px-4 py-3">
                      <p className="text-slate-700">{formatDate(a.appointmentDate)}</p>
                      <p className="text-xs text-slate-400">{formatAppointmentTime(a.time)}</p>
                    </td>
                    <td className="hidden px-4 py-3 md:table-cell">{APPOINTMENT_TYPE_LABELS[a.type]}</td>
                    <td className="px-4 py-3">
                      <Badge tone={STATUS_TONES[a.status]}>{APPOINTMENT_STATUS_LABELS[a.status]}</Badge>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex justify-end gap-1">
                        {canManage && ['SCHEDULED', 'CONFIRMED'].includes(a.status) && (
                          <>
                            <Button variant="ghost" size="sm" className="text-emerald-600 hover:bg-emerald-50" title="Mark completed" onClick={() => markAs(a, 'COMPLETED')}>
                              <CheckCircle2 className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-50" title="Cancel appointment" onClick={() => markAs(a, 'CANCELLED')}>
                              <XCircle className="h-4 w-4" />
                            </Button>
                          </>
                        )}
                        {canManage && (
                          <Button
                            variant="ghost"
                            size="sm"
                            title="Edit"
                            onClick={() => {
                              setEditing(a);
                              setModalOpen(true);
                            }}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                        )}
                        {canDelete && (
                          <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-50" title="Delete" onClick={() => handleDelete(a)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editing ? 'Edit appointment' : 'Book an appointment'}
        size="md"
      >
        <AppointmentForm
          appointment={editing}
          patients={patientsQuery.data?.patients ?? []}
          doctors={doctorsQuery.data ?? []}
          onSubmit={handleSave}
          onCancel={() => setModalOpen(false)}
          busy={busy}
        />
      </Modal>
    </div>
  );
}