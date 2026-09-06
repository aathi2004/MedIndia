import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus, Trash2 } from 'lucide-react';
import { prescriptionFormSchema, type PrescriptionFormValues } from '../../forms/schemas';
import { FormField } from '../ui/FormField';
import { Input, Select, Textarea } from '../ui/Field';
import { Button } from '../ui/Button';
import type { MedicalVisit } from '../../types';
import { formatDate } from '../../lib/utils';

interface PrescriptionFormProps {
  visits: MedicalVisit[];
  onSubmit: (values: PrescriptionFormValues) => Promise<void>;
  onCancel: () => void;
  busy?: boolean;
}

export function PrescriptionForm({ visits, onSubmit, onCancel, busy }: PrescriptionFormProps) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PrescriptionFormValues>({
    resolver: zodResolver(prescriptionFormSchema),
    defaultValues: {
      visitId: '',
      notes: null,
      items: [{ medicineName: '', dosage: '', frequency: '', duration: '', instructions: null }],
    },
  });

  const { fields, append, remove } = useFieldArray({ control, name: 'items' });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <FormField label="Visit" error={errors.visitId?.message} required>
        <Select {...register('visitId')}>
          <option value="">Select a visit</option>
          {visits.map((v) => (
            <option key={v.id} value={v.id}>
              {formatDate(v.visitDate)} — {v.chiefComplaint.slice(0, 40)}
            </option>
          ))}
        </Select>
      </FormField>

      <div className="space-y-3">
        {fields.map((field, index) => (
          <div key={field.id} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-xs font-semibold text-slate-500">Medicine #{index + 1}</p>
              {fields.length > 1 && (
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="rounded p-1 text-red-500 hover:bg-red-50"
                  aria-label="Remove medicine"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <FormField label="Medicine" error={errors.items?.[index]?.medicineName?.message} required>
                <Input placeholder="Paracetamol 500mg" {...register(`items.${index}.medicineName`)} />
              </FormField>
              <FormField label="Dosage" error={errors.items?.[index]?.dosage?.message} required>
                <Input placeholder="1 tablet" {...register(`items.${index}.dosage`)} />
              </FormField>
              <FormField label="Frequency" error={errors.items?.[index]?.frequency?.message} required>
                <Input placeholder="Twice daily" {...register(`items.${index}.frequency`)} />
              </FormField>
              <FormField label="Duration" error={errors.items?.[index]?.duration?.message} required>
                <Input placeholder="5 days" {...register(`items.${index}.duration`)} />
              </FormField>
              <div className="sm:col-span-2">
                <FormField label="Instructions">
                  <Input placeholder="After food" {...register(`items.${index}.instructions`)} />
                </FormField>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => append({ medicineName: '', dosage: '', frequency: '', duration: '', instructions: null })}
      >
        <Plus className="h-4 w-4" />
        Add medicine
      </Button>

      <FormField label="Notes">
        <Textarea rows={2} placeholder="Any additional instructions…" {...register('notes')} />
      </FormField>

      <div className="flex justify-end gap-2 pt-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" loading={busy}>
          Save prescription
        </Button>
      </div>
    </form>
  );
}