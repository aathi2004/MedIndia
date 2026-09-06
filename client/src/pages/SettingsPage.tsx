import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { UserPlus, Trash2, ShieldCheck } from 'lucide-react';
import { userService } from '../services/auth';
import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/ui/Button';
import { Card, CardBody } from '../components/ui/Card';
import { Modal } from '../components/ui/Modal';
import { Badge } from '../components/ui/Badge';
import { LoadingState } from '../components/ui/LoadingState';
import { ErrorState, EmptyState } from '../components/ui/StateViews';
import { UserForm } from '../components/settings/UserForm';
import { ROLE_LABELS, type UserRole } from '../types';
import type { UserFormValues } from '../forms/schemas';

const ROLE_TONES: Record<UserRole, 'teal' | 'blue' | 'gray'> = {
  ADMIN: 'teal',
  DOCTOR: 'blue',
  RECEPTIONIST: 'gray',
};

export function SettingsPage() {
  const { user } = useAuth();
  const qc = useQueryClient();
  const [modalOpen, setModalOpen] = useState(false);
  const [busy, setBusy] = useState(false);

  const usersQuery = useQuery({ queryKey: ['users'], queryFn: userService.list });
  const createMutation = useMutation({ mutationFn: userService.create });
  const deleteMutation = useMutation({ mutationFn: userService.remove });

  if (user?.role !== 'ADMIN') {
    return (
      <Card>
        <CardBody className="flex flex-col items-center gap-2 py-12 text-center">
          <ShieldCheck className="h-8 w-8 text-slate-300" />
          <p className="font-semibold text-slate-700">Administrator access required</p>
          <p className="text-sm text-slate-500">User management is restricted to admin accounts.</p>
        </CardBody>
      </Card>
    );
  }

  const handleCreate = async (values: UserFormValues) => {
    setBusy(true);
    try {
      await createMutation.mutateAsync(values);
      qc.invalidateQueries({ queryKey: ['users'] });
      setModalOpen(false);
    } finally {
      setBusy(false);
    }
  };

  const handleDelete = async (id: number, name: string) => {
    if (!window.confirm(`Delete user "${name}"? This cannot be undone.`)) return;
    await deleteMutation.mutateAsync(id);
    qc.invalidateQueries({ queryKey: ['users'] });
  };

  const users = usersQuery.data ?? [];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Settings</h1>
          <p className="text-sm text-slate-500">Manage system users and roles</p>
        </div>
        <Button onClick={() => setModalOpen(true)}>
          <UserPlus className="h-4 w-4" />
          Add user
        </Button>
      </div>

      {usersQuery.isLoading ? (
        <LoadingState rows={5} message="Loading users…" />
      ) : usersQuery.isError ? (
        <ErrorState title="Unable to load users" retry={usersQuery.refetch} />
      ) : users.length === 0 ? (
        <EmptyState title="No users yet" />
      ) : (
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-left text-xs font-medium uppercase tracking-wide text-slate-500">
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Role</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {users.map((u) => (
                  <tr key={u.id} className="transition-colors hover:bg-slate-50">
                    <td className="px-4 py-3">
                      <p className="font-medium text-slate-800">{u.name}</p>
                      {u.id === user?.id && <span className="text-xs text-slate-400">(you)</span>}
                    </td>
                    <td className="px-4 py-3 text-slate-500">{u.email}</td>
                    <td className="px-4 py-3">
                      <Badge tone={ROLE_TONES[u.role]}>{ROLE_LABELS[u.role]}</Badge>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex justify-end">
                        {u.id !== user?.id && (
                          <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-50" onClick={() => handleDelete(u.id, u.name)} title="Delete user">
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

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Add a new user" size="md">
        <UserForm onSubmit={handleCreate} onCancel={() => setModalOpen(false)} busy={busy} />
      </Modal>
    </div>
  );
}