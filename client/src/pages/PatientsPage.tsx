import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Pencil, Trash2, UserPlus, Eye } from 'lucide-react';
import { useState } from 'react';
import { patientService } from '../services/patients';
import { useDebounce } from '../hooks/useDebounce';
import { useAuth } from '../hooks/useAuth';
import { Modal } from '../components/ui/Modal';
import { Button, Spinner } from '../components/ui/Button';
import { Card, CardBody } from '../components/ui/Card';
import { LoadingState } from '../components/ui/LoadingState';
import { ErrorState, EmptyState } from '../components/ui/StateViews';
import { Pagination } from '../components/ui/Pagination';
import { Badge } from '../components/ui/Badge';
import { PatientForm } from '../components/patients/PatientForm';
import { GENDER_LABELS, BLOOD_GROUP_LABELS, type Patient, type Gender } from '../types';
import { formatDate } from '../lib/utils';
import type { PatientFormValues } from '../forms/schemas';

const PAGE_SIZE = 10;

function ageFrom(dob: string): number {
  const birth = new Date(dob);
  const now = new Date();
  let age = now.getFullYear() - birth.getFullYear();
  const m = now.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) age--;
  return age;
}

export function PatientsPage() {
  const { user } = useAuth();
  const qc = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('q') ?? '');
  const [genderFilter, setGenderFilter] = useState(searchParams.get('gender') ?? '');
  const [page, setPage] = useState(Number(searchParams.get('page')) || 1);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Patient | undefined>(undefined);
  const [formBusy, setFormBusy] = useState(false);

  const debouncedSearch = useDebounce(search, 300);
  const canEdit = user?.role === 'ADMIN' || user?.role === 'DOCTOR' || user?.role === 'RECEPTIONIST';
  const canDelete = user?.role === 'ADMIN';

  const { data, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: ['patients', debouncedSearch, genderFilter, page],
    queryFn: () => patientService.list({ search: debouncedSearch, gender: genderFilter, page, pageSize: PAGE_SIZE }),
  });

  const updateUrl = (next: { q?: string; gender?: string; page?: number }) => {
    const params = new URLSearchParams();
    if (next.q) params.set('q', next.q);
    if (next.gender) params.set('gender', next.gender);
    if (next.page && next.page > 1) params.set('page', String(next.page));
    setSearchParams(params, { replace: true });
  };

  const createMutation = useMutation({ mutationFn: patientService.create });
  const updateMutation = useMutation({ mutationFn: ({ id, input }: { id: number; input: PatientFormValues }) => patientService.update(id, input) });
  const deleteMutation = useMutation({ mutationFn: patientService.remove });

  const openCreate = () => {
    setEditing(undefined);
    setModalOpen(true);
  };
  const openEdit = (p: Patient) => {
    setEditing(p);
    setModalOpen(true);
  };

  const handleSubmit = async (values: PatientFormValues) => {
    setFormBusy(true);
    try {
      if (editing) {
        await updateMutation.mutateAsync({ id: editing.id, input: values });
      } else {
        await createMutation.mutateAsync(values);
      }
      qc.invalidateQueries({ queryKey: ['patients'] });
      qc.invalidateQueries({ queryKey: ['dashboard-stats'] });
      setModalOpen(false);
    } finally {
      setFormBusy(false);
    }
  };

  const handleDelete = async (p: Patient) => {
    if (!window.confirm(`Delete ${p.firstName} ${p.lastName}? This cannot be undone.`)) return;
    await deleteMutation.mutateAsync(p.id);
    qc.invalidateQueries({ queryKey: ['patients'] });
    qc.invalidateQueries({ queryKey: ['dashboard-stats'] });
  };

  const patients = data?.patients ?? [];
  const pagination = data?.pagination;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Patients</h1>
          <p className="text-sm text-slate-500">{pagination ? `${pagination.total} registered patients` : 'Manage patient records'}</p>
        </div>
        {canEdit && (
          <Button onClick={openCreate}>
            <UserPlus className="h-4 w-4" />
            Register patient
          </Button>
        )}
      </div>

      <Card>
        <CardBody className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
                updateUrl({ q: e.target.value, gender: genderFilter, page: 1 });
              }}
              placeholder="Search by name, patient ID or phone…"
              className="w-full rounded-md border border-slate-300 py-2 pl-9 pr-3 text-sm focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/30"
            />
          </div>
          <select
            value={genderFilter}
            onChange={(e) => {
              setGenderFilter(e.target.value);
              setPage(1);
              updateUrl({ q: search, gender: e.target.value, page: 1 });
            }}
            className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:border-teal-500 focus:outline-none"
          >
            <option value="">All genders</option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
            <option value="OTHER">Other</option>
          </select>
        </CardBody>
      </Card>

      {isLoading ? (
        <LoadingState rows={6} message="Loading patients…" />
      ) : isError ? (
        <ErrorState title="Unable to load patients" hint="Please try again in a moment." retry={refetch} />
      ) : patients.length === 0 ? (
        <EmptyState
          title={search || genderFilter ? 'No patients match your filters' : 'No patients yet'}
          hint={search || genderFilter ? 'Try a different search.' : 'Register the first patient to get started.'}
          action={
            canEdit ? (
              <Button onClick={openCreate}>
                <UserPlus className="h-4 w-4" />
                Register patient
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
                  <th className="px-4 py-3">Patient ID</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Age / Gender</th>
                  <th className="px-4 py-3">Phone</th>
                  <th className="hidden px-4 py-3 md:table-cell">Blood group</th>
                  <th className="hidden px-4 py-3 lg:table-cell">Last visit</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {patients.map((p) => (
                  <tr key={p.id} className="transition-colors hover:bg-slate-50">
                    <td className="px-4 py-3 font-mono text-xs text-slate-500">{p.patientId}</td>
                    <td className="px-4 py-3">
                      <Link to={`/patients/${p.id}`} className="font-medium text-teal-700 hover:text-teal-800">
                        {p.firstName} {p.lastName}
                      </Link>
                    </td>
                    <td className="px-4 py-3">
                      {ageFrom(p.dateOfBirth)} / {GENDER_LABELS[p.gender as Gender]}
                    </td>
                    <td className="px-4 py-3">{p.phone}</td>
                    <td className="hidden px-4 py-3 md:table-cell">
                      {p.bloodGroup ? <Badge tone="teal">{BLOOD_GROUP_LABELS[p.bloodGroup]}</Badge> : '—'}
                    </td>
                    <td className="hidden px-4 py-3 text-slate-500 lg:table-cell">{formatDate(p.lastVisitAt)}</td>
                    <td className="px-4 py-3">
                      <div className="flex justify-end gap-1">
                        <Button variant="ghost" size="sm" onClick={() => window.location.assign(`/patients/${p.id}`)} title="View">
                          <Eye className="h-4 w-4" />
                        </Button>
                        {canEdit && (
                          <Button variant="ghost" size="sm" onClick={() => openEdit(p)} title="Edit">
                            <Pencil className="h-4 w-4" />
                          </Button>
                        )}
                        {canDelete && (
                          <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-50" onClick={() => handleDelete(p)} title="Delete">
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
          {isFetching && (
            <div className="flex items-center gap-2 border-t border-slate-100 px-5 py-2 text-xs text-slate-400">
              <Spinner className="h-3 w-3" /> Updating…
            </div>
          )}
          {pagination && (
            <Pagination
              page={pagination.page}
              totalPages={pagination.totalPages}
              total={pagination.total}
              pageSize={pagination.pageSize}
              onPageChange={(p) => {
                setPage(p);
                updateUrl({ q: search, gender: genderFilter, page: p });
              }}
            />
          )}
        </Card>
      )}

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editing ? `Edit ${editing.firstName} ${editing.lastName}` : 'Register a new patient'} size="lg">
        <PatientForm patient={editing} onSubmit={handleSubmit} onCancel={() => setModalOpen(false)} busy={formBusy} />
      </Modal>
    </div>
  );
}