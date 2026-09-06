import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { patientFormSchema, type PatientFormValues } from '../../forms/schemas';
import { FormField } from '../ui/FormField';
import { Input, Select, Textarea } from '../ui/Field';
import { Button } from '../ui/Button';
import type { Patient } from '../../types';
import { GENDER_LABELS, BLOOD_GROUP_LABELS } from '../../types';
import { toISODate } from '../../lib/utils';

const BLOOD_OPTIONS = Object.entries(BLOOD_GROUP_LABELS);

function toFormValues(patient?: Patient): PatientFormValues {
  if (!patient) {
    return {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      gender: 'MALE',
      phone: '',
      email: null,
      address: null,
      bloodGroup: null,
      allergies: null,
      existingConditions: null,
      emergencyContactName: null,
      emergencyContactPhone: null,
    };
  }
  return {
    firstName: patient.firstName,
    lastName: patient.lastName,
    dateOfBirth: toISODate(patient.dateOfBirth),
    gender: patient.gender,
    phone: patient.phone,
    email: patient.email,
    address: patient.address,
    bloodGroup: patient.bloodGroup,
    allergies: patient.allergies,
    existingConditions: patient.existingConditions,
    emergencyContactName: patient.emergencyContactName,
    emergencyContactPhone: patient.emergencyContactPhone,
  };
}

interface PatientFormProps {
  patient?: Patient;
  onSubmit: (values: PatientFormValues) => Promise<void>;
  onCancel: () => void;
  busy?: boolean;
}

export function PatientForm({ patient, onSubmit, onCancel, busy }: PatientFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PatientFormValues>({
    resolver: zodResolver(patientFormSchema),
    defaultValues: toFormValues(patient),
  });

  useEffect(() => {
    reset(toFormValues(patient));
  }, [patient, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="First name" error={errors.firstName?.message} required>
          <Input placeholder="Aathithya" {...register('firstName')} />
        </FormField>
        <FormField label="Last name" error={errors.lastName?.message} required>
          <Input placeholder="R" {...register('lastName')} />
        </FormField>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <FormField label="Date of birth" error={errors.dateOfBirth?.message} required>
          <Input type="date" {...register('dateOfBirth')} />
        </FormField>
        <FormField label="Gender" error={errors.gender?.message} required>
          <Select {...register('gender')}>
            {Object.entries(GENDER_LABELS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </Select>
        </FormField>
        <FormField label="Blood group">
          <Select {...register('bloodGroup')}>
            <option value="">Select</option>
            {BLOOD_OPTIONS.map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </Select>
        </FormField>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="Phone" error={errors.phone?.message} required>
          <Input placeholder="9876543210" {...register('phone')} />
        </FormField>
        <FormField label="Email" error={errors.email?.message}>
          <Input type="email" placeholder="patient@example.com" {...register('email')} />
        </FormField>
      </div>

      <FormField label="Address">
        <Textarea rows={2} placeholder="Street, city, state" {...register('address')} />
      </FormField>

      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="Allergies">
          <Input placeholder="e.g. Penicillin" {...register('allergies')} />
        </FormField>
        <FormField label="Existing conditions">
          <Input placeholder="e.g. Hypertension" {...register('existingConditions')} />
        </FormField>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="Emergency contact name">
          <Input placeholder="Next of kin" {...register('emergencyContactName')} />
        </FormField>
        <FormField label="Emergency contact phone" error={errors.emergencyContactPhone?.message}>
          <Input placeholder="98xxxxxxxx" {...register('emergencyContactPhone')} />
        </FormField>
      </div>

      <div className="flex justify-end gap-2 pt-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" loading={busy}>
          {patient ? 'Save changes' : 'Register patient'}
        </Button>
      </div>
    </form>
  );
}