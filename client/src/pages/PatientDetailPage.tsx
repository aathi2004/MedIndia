import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { useState, type ReactNode } from 'react';
import {
  ArrowLeft,
  Pencil,
  CalendarPlus,
  FilePlus2,
  Pill,
  Phone,
  Stethoscope,
  AlertTriangle,
  FileClock,
} from 'lucide-react';
import { patientService } from '../services/patients';
import { dashboardService } from '../services/dashboard';
import { appointmentService } from '../services/appointments';
import { aiService } from '../services/ai';
import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardBody } from '../components/ui/Card';
import { Modal } from '../components/ui/Modal';
import { Badge } from '../components/ui/Badge';
import { LoadingState } from '../components/ui/LoadingState';
import { ErrorState, EmptyState } from '../components/ui/StateViews';
import { PatientForm } from '../components/patients/PatientForm';
import { VisitForm } from '../components/patients/VisitForm';
import { PrescriptionForm } from '../components/patients/PrescriptionForm';
import { AppointmentForm } from '../components/appointments/AppointmentForm';
import { GENDER_LABELS, BLOOD_GROUP_LABELS, APPOINTMENT_STATUS_LABELS, APPOINTMENT_TYPE_LABELS } from '../types';
import { formatDate, formatAppointmentTime, initialOf } from '../lib/utils';
import type { Patient } from '../types';

type Tab = 'overview' | 'history' | 'visits' | 'prescriptions' | 'appointments';

function ageFrom(dob: string): number {
  const birth = new Date(dob);
  const now = new Date();
  let age = now.getFullYear() - birth.getFullYear();
  const m = now.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) age--;
  return age;
}

function InfoRow({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-4 py-2">
      <dt className="shrink-0 text-xs font-medium text-slate-500">{label}</dt>
      <dd className="text-right text-sm font-medium text-slate-800">{value || '—'}</dd>
    </div>
  );
}

export function PatientDetailPage() {
  const { id } = useParams();
  const patientId = Number(id);
  const navigate = useNavigate();
  const qc = useQueryClient();
  const { user } = useAuth();

  const [tab, setTab] = useState<Tab>('overview');
  const [editModal, setEditModal] = useState(false);
  const [visitModal, setVisitModal] = useState(false);
  const [prescriptionModal, setPrescriptionModal] = useState(false);
  const [appointmentModal, setAppointmentModal] = useState(false);
  const [busy, setBusy] = useState(false);

  const isDoctorLike = user?.role === 'DOCTOR' || user?.role === 'ADMIN';
  const canEdit = user?.role === 'ADMIN' || user?.role === 'DOCTOR' || user?.role === 'RECEPTIONIST';

  const patientQuery = useQuery({
    queryKey: ['patient', patientId],
    queryFn: () => patientService.get(patientId),
    enabled: !Number.isNaN(patientId),
  });

  const visitsQuery = useQuery({
    queryKey: ['patient-visits', patientId],
    queryFn: () => patientService.listVisits(patientId),
    enabled: isDoctorLike && !Number.isNaN(patientId),
  });

  const prescriptionsQuery = useQuery({
    queryKey: ['patient-prescriptions', patientId],
    queryFn: () => patientService.listPrescriptions(patientId),
    enabled: isDoctorLike && !Number.isNaN(patientId),
  });

  const appointmentsQuery = useQuery({
    queryKey: ['patient-appointments', patientId],
    queryFn: () => appointmentService.list(),
    enabled: !Number.isNaN(patientId),
    select: (list) => list.filter((a) => a.patient.id === patientId),
  });

  const doctorsQuery = useQuery({ queryKey: ['doctors'], queryFn: dashboardService.listDoctors });

  const updateMutation = useMutation({ mutationFn: ({ id, input }: { id: number; input: Parameters<typeof patientService.update>[1] }) => patientService.update(id, input) });
  const createVisitMutation = useMutation({ mutationFn: ({ id, input }: { id: number; input: Parameters<typeof patientService.createVisit>[1] }) => patientService.createVisit(id, input) });
  const createPrescriptionMutation = useMutation({ mutationFn: ({ id, input }: { id: number; input: Parameters<typeof patientService.createPrescription>[1] }) => patientService.createPrescription(id, input) });
  const createAppointmentMutation = useMutation({ mutationFn: appointmentService.create });

  if (Number.isNaN(patientId)) return <Navigate to="/patients" replace />;

  if (patientQuery.isLoading) return <LoadingState rows={6} message="Loading patient…" />;
  if (patientQuery.isError) {
    return <ErrorState title="Unable to load patient" hint="The patient may have been deleted." retry={patientQuery.refetch} />;
  }
  const patient = patientQuery.data as Patient;

  const handleSavePatient = async (values: Parameters<typeof patientService.update>[1]) => {
    setBusy(true);
    try {
      await updateMutation.mutateAsync({ id: patient.id, input: values });
      qc.invalidateQueries({ queryKey: ['patient', patient.id] });
      qc.invalidateQueries({ queryKey: ['patients'] });
      qc.invalidateQueries({ queryKey: ['dashboard-stats'] });
      setEditModal(false);
    } finally {
      setBusy(false);
    }
  };

  const handleSaveVisit = async (values: { visitDate: string; chiefComplaint: string; symptoms?: string | null; bloodPressure?: string | null; heartRate?: string | null; temperature?: string | null; weight?: string | null; diagnosis?: string | null; treatmentPlan?: string | null; notes?: string | null; doctorId: number }) => {
    setBusy(true);
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { doctorId, ...input } = values;
      await createVisitMutation.mutateAsync({ id: patient.id, input });
      qc.invalidateQueries({ queryKey: ['patient'] });
      qc.invalidateQueries({ queryKey: ['patient-visits'] });
      qc.invalidateQueries({ queryKey: ['dashboard-stats'] });
      setVisitModal(false);
      setTab('visits');
    } finally {
      setBusy(false);
    }
  };

  const handleSavePrescription = async (values: { visitId: string; notes?: string | null; items: Array<{ medicineName: string; dosage: string; frequency: string; duration: string; instructions?: string | null }> }) => {
    setBusy(true);
    try {
      await createPrescriptionMutation.mutateAsync({ id: patient.id, input: { visitId: Number(values.visitId), notes: values.notes, items: values.items } });
      qc.invalidateQueries({ queryKey: ['patient-prescriptions'] });
      qc.invalidateQueries({ queryKey: ['patient-visits'] });
      setPrescriptionModal(false);
      setTab('prescriptions');
    } finally {
      setBusy(false);
    }
  };

  const handleSaveAppointment = async (values: Parameters<typeof appointmentService.create>[0]) => {
    setBusy(true);
    try {
      await createAppointmentMutation.mutateAsync(values);
      qc.invalidateQueries({ queryKey: ['patient-appointments'] });
      qc.invalidateQueries({ queryKey: ['appointments'] });
      qc.invalidateQueries({ queryKey: ['dashboard-stats'] });
      setAppointmentModal(false);
      setTab('appointments');
    } finally {
      setBusy(false);
    }
  };

  const visits = visitsQuery.data ?? [];
  const prescriptions = prescriptionsQuery.data ?? [];
  const appointments = appointmentsQuery.data ?? [];

  const tabs: Array<{ key: Tab; label: string }> = [
    { key: 'overview', label: 'Overview' },
    { key: 'history', label: 'Medical history' },
    { key: 'visits', label: 'Visits' },
    { key: 'prescriptions', label: 'Prescriptions' },
    { key: 'appointments', label: 'Appointments' },
  ];

  return (
    <div className="space-y-4">
      <div>
        <button onClick={() => navigate('/patients')} className="mb-2 inline-flex items-center gap-1 text-xs font-medium text-teal-600 hover:text-teal-700">
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to patients
        </button>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-700">
              {initialOf(patient.firstName)}
              {initialOf(patient.lastName)}
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">
                {patient.firstName} {patient.lastName}
              </h1>
              <p className="text-sm text-slate-500">
                {patient.patientId} · {ageFrom(patient.dateOfBirth)} yrs · {GENDER_LABELS[patient.gender]}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {canEdit && (
              <Button variant="outline" onClick={() => setEditModal(true)}>
                <Pencil className="h-4 w-4" />
                Edit
              </Button>
            )}
            <Button variant="outline" onClick={() => setAppointmentModal(true)}>
              <CalendarPlus className="h-4 w-4" />
              Book appointment
            </Button>
            {isDoctorLike && (
              <Button onClick={() => setVisitModal(true)}>
                <FilePlus2 className="h-4 w-4" />
                Add visit
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-1 border-b border-slate-200">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`-mb-px border-b-2 px-4 py-2 text-sm font-medium transition-colors ${
              tab === t.key ? 'border-teal-600 text-teal-700' : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'overview' && (
        <div className="grid gap-4 lg:grid-cols-2">
          <Card>
            <CardHeader title="Personal details" />
            <CardBody>
              <dl className="divide-y divide-slate-100">
                <InfoRow label="Full name" value={`${patient.firstName} ${patient.lastName}`} />
                <InfoRow label="Date of birth" value={formatDate(patient.dateOfBirth)} />
                <InfoRow label="Gender" value={GENDER_LABELS[patient.gender]} />
                <InfoRow label="Phone" value={patient.phone} />
                <InfoRow label="Email" value={patient.email} />
                <InfoRow label="Address" value={patient.address} />
              </dl>
            </CardBody>
          </Card>

          <Card>
            <CardHeader title="Clinical profile" />
            <CardBody>
              <dl className="divide-y divide-slate-100">
                <InfoRow label="Blood group" value={patient.bloodGroup ? <Badge tone="red">{BLOOD_GROUP_LABELS[patient.bloodGroup]}</Badge> : null} />
                <InfoRow label="Allergies" value={patient.allergies ? <span className="text-red-600">{patient.allergies}</span> : null} />
                <InfoRow label="Existing conditions" value={patient.existingConditions} />
                <InfoRow label="Emergency contact" value={patient.emergencyContactName ? `${patient.emergencyContactName} · ${patient.emergencyContactPhone ?? ''}` : null} />
              </dl>
            </CardBody>
          </Card>
        </div>
      )}

      {tab === 'history' && (
        <Card>
          <CardHeader title="Medical history" subtitle="Pre-existing conditions, allergies and emergency information" />
          <CardBody className="space-y-4 text-sm">
            <div className="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
              <div>
                <p className="font-semibold text-amber-800">Allergies</p>
                <p className="text-amber-700">{patient.allergies || 'No known allergies'}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <FileClock className="mt-0.5 h-5 w-5 shrink-0 text-slate-500" />
              <div>
                <p className="font-semibold text-slate-700">Existing conditions</p>
                <p className="text-slate-600">{patient.existingConditions || 'None recorded'}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-slate-500" />
              <div>
                <p className="font-semibold text-slate-700">Emergency contact</p>
                <p className="text-slate-600">
                  {patient.emergencyContactName ? `${patient.emergencyContactName} — ${patient.emergencyContactPhone ?? 'No phone'}` : 'No emergency contact recorded'}
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      )}

      {tab === 'visits' && (
        <div className="space-y-3">
          {isDoctorLike && (
            <div className="flex justify-end">
              <Button onClick={() => setVisitModal(true)}>
                <FilePlus2 className="h-4 w-4" />
                Add visit
              </Button>
            </div>
          )}
          {!isDoctorLike ? (
            <EmptyState title="Visits are restricted" hint="Only doctors and admins can view clinical records." />
          ) : visits.length === 0 ? (
            <EmptyState title="No visits yet" hint="Record the first consultation for this patient." />
          ) : (
            visits.map((v) => (
              <Card key={v.id}>
                <CardBody className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-slate-800">{formatDate(v.visitDate)}</p>
                    <p className="flex items-center gap-1 text-xs text-slate-400">
                      <Stethoscope className="h-3.5 w-3.5" />
                      {v.doctor.name}
                    </p>
                  </div>
                  <p className="text-sm text-slate-600">
                    <span className="font-medium text-slate-700">Complaint:</span> {v.chiefComplaint}
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm sm:grid-cols-4">
                    <div className="rounded-md bg-slate-50 p-2">
                      <p className="text-[10px] font-medium uppercase text-slate-400">BP</p>
                      <p className="font-mono text-xs text-slate-700">{v.bloodPressure || '—'}</p>
                    </div>
                    <div className="rounded-md bg-slate-50 p-2">
                      <p className="text-[10px] font-medium uppercase text-slate-400">HR</p>
                      <p className="font-mono text-xs text-slate-700">{v.heartRate ? `${v.heartRate} bpm` : '—'}</p>
                    </div>
                    <div className="rounded-md bg-slate-50 p-2">
                      <p className="text-[10px] font-medium uppercase text-slate-400">Temp</p>
                      <p className="font-mono text-xs text-slate-700">{v.temperature ? `${v.temperature}°C` : '—'}</p>
                    </div>
                    <div className="rounded-md bg-slate-50 p-2">
                      <p className="text-[10px] font-medium uppercase text-slate-400">Weight</p>
                      <p className="font-mono text-xs text-slate-700">{v.weight ? `${v.weight} kg` : '—'}</p>
                    </div>
                  </div>
                  {v.diagnosis && (
                    <p className="text-sm text-slate-600">
                      <span className="font-medium text-slate-700">Diagnosis:</span> {v.diagnosis}
                    </p>
                  )}
                  {v.symptoms && (
                    <p className="text-sm text-slate-600">
                      <span className="font-medium text-slate-700">Symptoms:</span> {v.symptoms}
                    </p>
                  )}
                  {v.treatmentPlan && (
                    <p className="text-sm text-slate-600">
                      <span className="font-medium text-slate-700">Treatment plan:</span> {v.treatmentPlan}
                    </p>
                  )}
                  {v.notes && <p className="text-sm text-slate-500 italic">{v.notes}</p>}
                </CardBody>
              </Card>
            ))
          )}
        </div>
      )}

      {tab === 'prescriptions' && (
        <div className="space-y-3">
          {isDoctorLike && (
            <div className="flex justify-end">
              <Button onClick={() => setPrescriptionModal(true)} disabled={visits.length === 0} title={visits.length === 0 ? 'Add a visit first' : undefined}>
                <Pill className="h-4 w-4" />
                New prescription
              </Button>
            </div>
          )}
          {!isDoctorLike ? (
            <EmptyState title="Prescriptions are restricted" hint="Only doctors and admins can view prescriptions." />
          ) : prescriptions.length === 0 ? (
            <EmptyState title="No prescriptions yet" hint="Prescriptions are linked to recorded visits." />
          ) : (
            prescriptions.map((px) => (
              <Card key={px.id}>
                <CardHeader
                  title={`${formatDate(px.prescribedDate)} — ${px.visit.diagnosis ?? 'Visit #' + px.visitId}`}
                  subtitle={`Prescribed by ${px.doctor.name}`}
                />
                <CardBody className="space-y-3">
                  <ul className="space-y-2">
                    {px.items.map((item) => (
                      <li key={item.id} className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <p className="text-sm font-medium text-slate-800">{item.medicineName}</p>
                          <p className="text-xs text-slate-500">
                            {item.dosage} · {item.frequency} · for {item.duration}
                          </p>
                        </div>
                        {item.instructions && <p className="mt-1 text-xs text-slate-500">Instruction: {item.instructions}</p>}
                      </li>
                    ))}
                  </ul>
                  {px.notes && <p className="text-sm text-slate-500 italic">{px.notes}</p>}
                </CardBody>
              </Card>
            ))
          )}
        </div>
      )}

      {tab === 'appointments' && (
        <div className="space-y-3">
          <div className="flex justify-end">
            <Button onClick={() => setAppointmentModal(true)}>
              <CalendarPlus className="h-4 w-4" />
              Book appointment
            </Button>
          </div>
          {appointments.length === 0 ? (
            <EmptyState title="No appointments" hint="Schedule the next appointment for this patient." />
          ) : (
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 text-left text-xs font-medium uppercase tracking-wide text-slate-500">
                      <th className="px-4 py-3">Date / Time</th>
                      <th className="px-4 py-3">Doctor</th>
                      <th className="px-4 py-3">Type</th>
                      <th className="px-4 py-3">Reason</th>
                      <th className="px-4 py-3 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {appointments.map((a) => (
                      <tr key={a.id} className="hover:bg-slate-50">
                        <td className="px-4 py-3">
                          <p className="text-slate-700">{formatDate(a.appointmentDate)}</p>
                          <p className="text-xs text-slate-400">{formatAppointmentTime(a.time)}</p>
                        </td>
                        <td className="px-4 py-3">{a.doctor.name}</td>
                        <td className="px-4 py-3">{APPOINTMENT_TYPE_LABELS[a.type]}</td>
                        <td className="px-4 py-3 text-slate-500">{a.reason || '—'}</td>
                        <td className="px-4 py-3 text-right">
                          <Badge tone={a.status === 'COMPLETED' ? 'green' : a.status === 'CANCELLED' ? 'red' : a.status === 'CONFIRMED' ? 'blue' : 'yellow'}>
                            {APPOINTMENT_STATUS_LABELS[a.status]}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          )}
        </div>
      )}

      <Modal open={editModal} onClose={() => setEditModal(false)} title={`Edit ${patient.firstName} ${patient.lastName}`} size="lg">
        <PatientForm patient={patient} onSubmit={handleSavePatient} onCancel={() => setEditModal(false)} busy={busy} />
      </Modal>

      <Modal open={visitModal} onClose={() => setVisitModal(false)} title="Record a medical visit" size="lg">
        <VisitForm onSubmit={handleSaveVisit} onCancel={() => setVisitModal(false)} busy={busy} summarize={aiService.summarizeNote} />
      </Modal>

      <Modal open={prescriptionModal} onClose={() => setPrescriptionModal(false)} title="New prescription" size="lg">
        <PrescriptionForm visits={visits} onSubmit={handleSavePrescription} onCancel={() => setPrescriptionModal(false)} busy={busy} />
      </Modal>

      <Modal open={appointmentModal} onClose={() => setAppointmentModal(false)} title="Book an appointment" size="md">
        <AppointmentForm
          patients={[patient]}
          doctors={doctorsQuery.data ?? []}
          defaultPatientId={patient.id}
          onSubmit={handleSaveAppointment}
          onCancel={() => setAppointmentModal(false)}
          busy={busy}
        />
      </Modal>
    </div>
  );
}