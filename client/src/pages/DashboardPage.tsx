import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import {
  Users,
  CalendarDays,
  ClipboardList,
  Stethoscope,
  UserPlus,
  CalendarPlus,
  FilePlus2,
  Activity,
} from 'lucide-react';
import { dashboardService } from '../services/dashboard';
import { useAuth } from '../hooks/useAuth';
import { Card, CardHeader, CardBody } from '../components/ui/Card';
import { LoadingState } from '../components/ui/LoadingState';
import { ErrorState, EmptyState } from '../components/ui/StateViews';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { formatDate, formatAppointmentTime } from '../lib/utils';
import { APPOINTMENT_STATUS_LABELS, ROLE_LABELS } from '../types';
import { useNavigate } from 'react-router-dom';

function StatCard({
  label,
  value,
  icon: Icon,
  tone = 'teal',
}: {
  label: string;
  value: number;
  icon: typeof Users;
  tone?: 'teal' | 'blue' | 'emerald' | 'amber' | 'indigo';
}) {
  const tones = {
    teal: 'bg-teal-50 text-teal-600',
    blue: 'bg-sky-50 text-sky-600',
    emerald: 'bg-emerald-50 text-emerald-600',
    amber: 'bg-amber-50 text-amber-600',
    indigo: 'bg-indigo-50 text-indigo-600',
  };
  return (
    <Card className="flex items-center gap-4 p-5">
      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${tones[tone]}`}>
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <p className="text-2xl font-bold text-slate-900">{value}</p>
        <p className="text-xs font-medium text-slate-500">{label}</p>
      </div>
    </Card>
  );
}

export function DashboardPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const isDoctorLike = user?.role === 'DOCTOR' || user?.role === 'ADMIN';

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['dashboard-stats'],
    queryFn: dashboardService.stats,
  });

  if (isLoading) return <LoadingState rows={6} message="Loading dashboard…" />;
  if (isError || !data) {
    return <ErrorState title="Unable to load dashboard" hint="Please try again in a moment." retry={refetch} />;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-sm text-slate-500">
            Signed in as <span className="font-medium text-slate-700">{user?.name}</span> ({user ? ROLE_LABELS[user.role] : ''})
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button onClick={() => navigate('/patients?action=new')}>
            <UserPlus className="h-4 w-4" />
            Register patient
          </Button>
          {isDoctorLike ? (
            <Button variant="outline" onClick={() => navigate('/patients?focus=visits')}>
              <FilePlus2 className="h-4 w-4" />
              Add medical visit
            </Button>
          ) : null}
          <Button variant="outline" onClick={() => navigate('/appointments?action=new')}>
            <CalendarPlus className="h-4 w-4" />
            Book appointment
          </Button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        <StatCard label="Total patients" value={data.counts.patients} icon={Users} />
        <StatCard label="Today’s appointments" value={data.counts.todayAppointments} icon={CalendarDays} tone="blue" />
        <StatCard label="Upcoming appointments" value={data.counts.upcomingAppointments} icon={CalendarPlus} tone="indigo" />
        <StatCard label="Recorded visits" value={data.counts.totalVisits} icon={ClipboardList} tone="amber" />
        <StatCard label="Doctors" value={data.counts.doctors} icon={Stethoscope} tone="emerald" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader title="Upcoming appointments" subtitle="What’s next on the schedule" />
          <CardBody className="p-0">
            {data.upcomingAppointmentsList.length === 0 ? (
              <div className="p-6">
                <EmptyState title="No upcoming appointments" hint="Book one from the appointments page." />
              </div>
            ) : (
              <ul className="divide-y divide-slate-100">
                {data.upcomingAppointmentsList.map((a) => (
                  <li key={a.id} className="flex items-center justify-between gap-4 px-5 py-3">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-slate-800">
                        {a.patient.firstName} {a.patient.lastName}
                      </p>
                      <p className="text-xs text-slate-500">
                        {formatDate(a.appointmentDate)} · {formatAppointmentTime(a.time)} · {a.doctor.name}
                      </p>
                    </div>
                    <Badge tone={a.status === 'SCHEDULED' ? 'yellow' : a.status === 'CONFIRMED' ? 'blue' : 'gray'}>
                      {APPOINTMENT_STATUS_LABELS[a.status]}
                    </Badge>
                  </li>
                ))}
              </ul>
            )}
          </CardBody>
        </Card>

        <Card>
          <CardHeader
            title="Recent patient visits"
            subtitle="Latest clinical activity"
            action={
              <Link to="/medical-records" className="text-xs font-semibold text-teal-600 hover:text-teal-700">
                View all →
              </Link>
            }
          />
          <CardBody className="p-0">
            {data.recentVisits.length === 0 ? (
              <div className="p-6">
                <EmptyState title="No visits recorded yet" hint="Record the first visit from a patient profile." />
              </div>
            ) : (
              <ul className="divide-y divide-slate-100">
                {data.recentVisits.map((v) => (
                  <li key={v.id} className="flex items-center justify-between gap-4 px-5 py-3">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                        <Activity className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-slate-800">
                          {v.patient?.firstName} {v.patient?.lastName}
                        </p>
                        <p className="truncate text-xs text-slate-500">
                          {v.diagnosis ?? 'No diagnosis noted'} · {v.doctor.name}
                        </p>
                      </div>
                    </div>
                    <span className="shrink-0 text-xs text-slate-400">{formatDate(v.visitDate)}</span>
                  </li>
                ))}
              </ul>
            )}
          </CardBody>
        </Card>
      </div>

      {data.recentPatients.length > 0 && (
        <Card>
          <CardHeader
            title="Recently registered patients"
            action={
              <Link to="/patients" className="text-xs font-semibold text-teal-600 hover:text-teal-700">
                All patients →
              </Link>
            }
          />
          <CardBody className="p-0">
            <div className="grid grid-cols-1 gap-2 p-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.recentPatients.map((p) => (
                <Link
                  key={p.id}
                  to={`/patients/${p.id}`}
                  className="flex items-center gap-3 rounded-lg border border-slate-200 px-3 py-2.5 transition-colors hover:bg-slate-50"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-semibold text-teal-700">
                    {`${p.firstName.charAt(0)}${p.lastName.charAt(0)}`}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-slate-800">
                      {p.firstName} {p.lastName}
                    </p>
                    <p className="text-xs text-slate-400">{p.patientId}</p>
                  </div>
                </Link>
              ))}
            </div>
          </CardBody>
        </Card>
      )}
    </div>
  );
}