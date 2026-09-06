import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userFormSchema, type UserFormValues } from '../../forms/schemas';
import { FormField } from '../ui/FormField';
import { Input, Select } from '../ui/Field';
import { Button } from '../ui/Button';

interface UserFormProps {
  onSubmit: (values: UserFormValues) => Promise<void>;
  onCancel: () => void;
  busy?: boolean;
}

export function UserForm({ onSubmit, onCancel, busy }: UserFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormValues>({
    resolver: zodResolver(userFormSchema),
    defaultValues: { name: '', email: '', password: '', role: 'DOCTOR' },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <FormField label="Full name" error={errors.name?.message} required>
        <Input placeholder="Dr. Jane Doe" {...register('name')} />
      </FormField>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="Email" error={errors.email?.message} required>
          <Input type="email" placeholder="user@ehr.local" {...register('email')} />
        </FormField>
        <FormField label="Password" error={errors.password?.message} required>
          <Input
            type="password"
            placeholder="Min. 8 chars, A-Z, a-z, 0-9"
            {...register('password')}
          />
        </FormField>
      </div>
      <FormField label="Role" error={errors.role?.message}>
        <Select {...register('role')}>
          <option value="DOCTOR">Doctor</option>
          <option value="RECEPTIONIST">Receptionist</option>
          <option value="ADMIN">Administrator</option>
        </Select>
      </FormField>

      <div className="flex justify-end gap-2 pt-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" loading={busy}>
          Create user
        </Button>
      </div>
    </form>
  );
}