import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Stethoscope, Pencil } from 'lucide-react';
import { dashboardService } from '../services/dashboard';
import { useAuth } from '../hooks/useAuth';
import { Card } from '../components/ui/Card';
import { Modal } from '../components/ui/Modal';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { LoadingState } from '../components/ui/LoadingState';
import { ErrorState, EmptyState } from '../components/ui/StateViews';
import { VisitForm } from '../components/patients/VisitForm';
import { formatDate, toISODate } from '../lib/utils';
import type { MedicalVisit } from '../types';

export function MedicalRecordsPage() {
  const { user } = useAuth();
  const qc = useQueryClient();
  const isDoctorLike = user?.role === 'DOCTOR' || user?.role === 'ADMIN';

  const [search, setSearch] = useState('');
  const [doctorFilter, setDoctorFilter] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const [editing, setEditing] = useState<MedicalVisit | null>(null);
  const [busy, setBusy] = useState(false);

  const doctorsQuery = useQuery({ queryKey: ['doctors'], queryFn: dashboardService.listDoctors });

  const visitsQuery = useQuery({
    queryKey: ['visits', search, doctorFilter, dateFrom, dateTo],
    queryFn: () =>
      dashboardService.listVisits({
        search: search || undefined,
        doctorId: doctorFilter ? Number(doctorFilter) : undefined,
        from: dateFrom || undefined,
        to: dateTo || undefined,
      }),
    enabled: isDoctorLike,
  });

  const updateMutation = useMutation({ mutationFn: ({ id, input }: { id: number; input: Parameters<typeof dashboardService.updateVisit>[1] }) => dashboardService.updateVisit(id, input) });

  const handleSave = async (values: { visitDate: string; chiefComplaint: string; symptoms?: string | null; bloodPressure?: string | null; heartRate?: string | null; temperature?: string | null; weight?: string | null; diagnosis?: string | null; treatmentPlan?: string | null; notes?: string | null; doctorId: number }) => {
    if (!editing) return;
    setBusy(true);
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { doctorId, ...input } = values;
      await updateMutation.mutateAsync({ id: editing.id, input });
      qc.invalidateQueries({ queryKey: ['visits'] });
      qc.invalidateQueries({ queryKey: ['patient-visits'] });
      qc.invalidateQueries({ queryKey: ['dashboard-stats'] });
      setEditing(null);
    } finally {
      setBusy(false);
    }
  };

  if (!isDoctorLike) {
    return <ErrorState title="Restricted" hint="Only doctors and admins can access medical records." />;
  }

  if (visitsQuery.isLoading) return <LoadingState rows={6} message="Loading medical records…" />;
  if (visitsQuery.isError) {
    return <ErrorState title="Unable to load medical records" retry={visitsQuery.refetch} />;
  }

  const visits = visitsQuery.data ?? [];
  const hasFilters = Boolean(search || doctorFilter || dateFrom || dateTo);

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-bold text-slate-900">Medical records</h1>
        <p className="text-sm text-slate-500">All documented patient visits and diagnoses</p>
      </div>

      <Card>
        <div className="flex flex-col gap-3 p-4 sm:flex-row sm:flex-wrap">
          <div className="relative min-w-0 flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by patient name or diagnosis…"
              className="w-full rounded-md border border-slate-300 py-2 pl-9 pr-3 text-sm focus:border-teal-500 focus:outline-none"
            />
          </div>
          <select value={doctorFilter} onChange={(e) => setDoctorFilter(e.target.value)} className="rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-teal-500 focus:outline-none">
            <option value="">All doctors</option>
            {(doctorsQuery.data ?? []).map((d) => (
              <option key={d.id} value={d.id}>
                {d.name}
              </option>
            ))}
          </select>
          <input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} className="rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-teal-500 focus:outline-none" />
          <input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} className="rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-teal-500 focus:outline-none" />
        </div>
      </Card>

      {visits.length === 0 ? (
        <EmptyState title={hasFilters ? 'No records match your filters' : 'No medical records yet'} hint={hasFilters ? 'Try adjusting the search or filters.' : 'Visits will appear here once recorded.'} />
      ) : (
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-left text-xs font-medium uppercase tracking-wide text-slate-500">
                  <th className="px-4 py-3">Patient</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Doctor</th>
                  <th className="hidden px-4 py-3 md:table-cell">Complaint</th>
                  <th className="px-4 py-3">Diagnosis</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {visits.map((v) => (
                  <tr key={v.id} className="transition-colors hover:bg-slate-50">
                    <td className="px-4 py-3">
                      {v.patient ? (
                        <Link to={`/patients/${v.patient.id}`} className="font-medium text-teal-700 hover:text-teal-800">
                          {v.patient.firstName} {v.patient.lastName}
                        </Link>
                      ) : (
                        <span className="font-medium text-slate-700">{v.doctor.name}</span>
                      )}
                      {v.patient && <p className="text-xs text-slate-400">{v.patient.patientId}</p>}
                    </td>
                    <td className="px-4 py-3 text-slate-600">{formatDate(v.visitDate)}</td>
                    <td className="px-4 py-3">
                      <span className="flex items-center gap-1 text-slate-600">
                        <Stethoscope className="h-3.5 w-3.5 text-slate-400" />
                        {v.doctor.name}
                      </span>
                    </td>
                    <td className="hidden max-w-[220px] px-4 py-3 text-slate-500 md:table-cell">
                      <p className="truncate">{v.chiefComplaint}</p>
                    </td>
                    <td className="px-4 py-3">
                      {v.diagnosis ? <Badge tone="teal">{v.diagnosis}</Badge> : <span className="text-xs text-slate-400">No diagnosis</span>}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex justify-end">
                        <Button
                          variant="ghost"
                          size="sm"
                          title="Edit record"
                          onClick={() =>
                            setEditing({
                              ...v,
                            })
                          }
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
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
        open={editing !== null}
        onClose={() => setEditing(null)}
        title="Edit medical record"
        size="lg"
      >
        {editing && (
          <VisitForm
            initialValues={{
              visitDate: toISODate(editing.visitDate),
              chiefComplaint: editing.chiefComplaint,
              symptoms: editing.symptoms,
              bloodPressure: editing.bloodPressure,
              heartRate: editing.heartRate != null ? String(editing.heartRate) : null,
              temperature: editing.temperature,
              weight: editing.weight,
              diagnosis: editing.diagnosis,
              treatmentPlan: editing.treatmentPlan,
              notes: editing.notes,
            }}
            onSubmit={handleSave}
            onCancel={() => setEditing(null)}
            busy={busy}
          />
        )}
      </Modal>
    </div>
  );
}