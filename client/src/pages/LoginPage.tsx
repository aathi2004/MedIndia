import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Stethoscope, LogIn } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { loginSchema, type LoginFormValues } from '../forms/schemas';
import { FormField } from '../components/ui/FormField';
import { Input } from '../components/ui/Field';
import { Button } from '../components/ui/Button';
import { ApiError } from '../lib/api';

const DEMO_ACCOUNTS = [
  { role: 'Admin', email: 'admin@ehr.local', password: 'Admin@123' },
  { role: 'Doctor', email: 'doctor@ehr.local', password: 'Doctor@123' },
  { role: 'Receptionist', email: 'receptionist@ehr.local', password: 'Reception@123' },
];

export function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = async (values: LoginFormValues) => {
    setServerError(null);
    try {
      await login(values.email, values.password);
      navigate('/', { replace: true });
    } catch (err) {
      setServerError(err instanceof ApiError ? err.message : 'Unable to sign in. Please try again.');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-teal-700 via-teal-800 to-slate-900 p-4">
      <div className="w-full max-w-md">
        <div className="rounded-2xl bg-white p-8 shadow-xl">
          <div className="mb-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-teal-600 text-white">
              <Stethoscope className="h-7 w-7" />
            </div>
            <h1 className="mt-4 text-2xl font-bold text-slate-900">MediCare EHR</h1>
            <p className="mt-1 text-sm text-slate-500">Electronic Health Record System</p>
          </div>

          {serverError && (
            <div className="mb-4 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
              {serverError}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
            <FormField label="Email" error={errors.email?.message} required>
              <Input type="email" placeholder="you@clinic.local" autoComplete="email" {...register('email')} />
            </FormField>
            <FormField label="Password" error={errors.password?.message} required>
              <Input type="password" placeholder="••••••••" autoComplete="current-password" {...register('password')} />
            </FormField>
            <Button type="submit" className="w-full" size="lg" loading={isSubmitting}>
              <LogIn className="h-4 w-4" />
              Sign in
            </Button>
          </form>
        </div>

        <div className="mt-4 rounded-xl border border-white/20 bg-white/10 p-4">
          <p className="text-center text-xs font-semibold uppercase tracking-wide text-teal-100">
            Demo accounts
          </p>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {DEMO_ACCOUNTS.map((acc) => (
              <button
                key={acc.role}
                onClick={() => {
                  setValue('email', acc.email);
                  setValue('password', acc.password);
                  setServerError(null);
                }}
                className="rounded-lg bg-white/10 px-2 py-2 text-xs text-white transition-colors hover:bg-white/20"
              >
                <p className="font-semibold">{acc.role}</p>
                <p className="mt-1 truncate opacity-80">{acc.password}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}