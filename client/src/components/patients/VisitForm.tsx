import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Sparkles, Loader2 } from 'lucide-react';
import { visitFormSchema, type VisitFormValues } from '../../forms/schemas';
import { FormField } from '../ui/FormField';
import { Input, Textarea } from '../ui/Field';
import { Button } from '../ui/Button';
import type { ClinicalSummary } from '../../types';
import { toISODate } from '../../lib/utils';

// The AI feature: doctor types a free-form clinical note, clicks
// "Generate summary" and gets a structured Symptoms/Diagnosis/Treatment/
// Follow-up outline that can be copied into the fields. Always labelled as
// requiring clinician review.
interface ClinicalNoteSummarizerProps {
  onApply: (summary: ClinicalSummary) => void;
  summarize: (note: string) => Promise<ClinicalSummary>;
}

export function ClinicalNoteSummarizer({ onApply, summarize }: ClinicalNoteSummarizerProps) {
  const [note, setNote] = useState('');
  const [summary, setSummary] = useState<ClinicalSummary | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (note.trim().length < 10) {
      setError('Write at least a short note first.');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const result = await summarize(note.trim());
      setSummary(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Summary generation failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-lg border border-indigo-200 bg-indigo-50/50 p-4">
      <div className="flex items-center gap-2">
        <Sparkles className="h-4 w-4 text-indigo-600" />
        <p className="text-sm font-semibold text-indigo-800">Clinical note summariser</p>
        <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-[10px] font-medium text-indigo-600">AI</span>
      </div>
      <p className="mt-1 text-xs text-indigo-600/80">
        Paste a long clinical note and generate a structured draft. AI output must be reviewed by a clinician before use.
      </p>

      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        rows={3}
        placeholder="Symptoms: … Diagnosis: … Treatment: … Follow-up: …"
        className="mt-3 w-full rounded-md border border-indigo-200 bg-white px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
      />

      {error && <p className="mt-2 text-xs text-red-600">{error}</p>}

      <div className="mt-2 flex items-center gap-2">
        <Button type="button" variant="secondary" size="sm" onClick={handleGenerate} disabled={loading}>
          {loading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Sparkles className="h-3.5 w-3.5" />}
          Generate summary
        </Button>
        {summary && (
          <Button type="button" size="sm" onClick={() => onApply(summary)}>
            Use in form
          </Button>
        )}
      </div>

      {summary && (
        <div className="mt-3 space-y-2 rounded-md border border-indigo-200 bg-white p-3 text-xs">
          {(['symptoms', 'diagnosis', 'treatment', 'followUp'] as const).map((key) => (
            <div key={key}>
              <p className="font-semibold capitalize text-indigo-700">{key}:</p>
              <p className="text-slate-600">{summary[key] || '—'}</p>
            </div>
          ))}
          <p className="pt-1 text-[10px] italic text-amber-600">{summary.disclaimer}</p>
        </div>
      )}
    </div>
  );
}

interface VisitFormProps {
  defaultDate?: string;
  initialValues?: VisitFormValues;
  onSubmit: (values: VisitFormValues & { doctorId: number }) => Promise<void>;
  onCancel: () => void;
  busy?: boolean;
  summarize?: (note: string) => Promise<ClinicalSummary>;
}

export function VisitForm({ defaultDate, initialValues, onSubmit, onCancel, busy, summarize }: VisitFormProps) {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<VisitFormValues>({
    resolver: zodResolver(visitFormSchema),
    defaultValues: initialValues ?? {
      visitDate: defaultDate ?? toISODate(new Date()),
      chiefComplaint: '',
      symptoms: null,
      bloodPressure: null,
      heartRate: null,
      temperature: null,
      weight: null,
      diagnosis: null,
      treatmentPlan: null,
      notes: null,
    },
  });

  const applySummary = (summary: ClinicalSummary) => {
    if (summary.symptoms) setValue('symptoms', summary.symptoms);
    if (summary.diagnosis) setValue('diagnosis', summary.diagnosis);
    if (summary.treatment) setValue('treatmentPlan', summary.treatment);
    if (summary.followUp) setValue('notes', summary.followUp);
  };

  return (
    <form onSubmit={handleSubmit((values) => onSubmit({ ...values, doctorId: 0 }))} className="space-y-4" noValidate>
      {summarize && <ClinicalNoteSummarizer onApply={applySummary} summarize={summarize} />}

      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="Visit date" error={errors.visitDate?.message} required>
          <Input type="date" {...register('visitDate')} />
        </FormField>
        <FormField label="Blood pressure">
          <Input placeholder="120/80" {...register('bloodPressure')} />
        </FormField>
      </div>

      <FormField label="Chief complaint" error={errors.chiefComplaint?.message} required>
        <Textarea rows={2} placeholder="What brought the patient in today?" {...register('chiefComplaint')} />
      </FormField>

      <FormField label="Symptoms">
        <Textarea rows={2} placeholder="Symptoms in the patient's own words…" {...register('symptoms')} />
      </FormField>

      <div className="grid gap-4 sm:grid-cols-3">
        <FormField label="Heart rate (bpm)" error={errors.heartRate?.message}>
          <Input type="number" min={20} max={250} placeholder="72" {...register('heartRate')} />
        </FormField>
        <FormField label="Temperature (°C)" error={errors.temperature?.message}>
          <Input type="number" step="0.1" placeholder="37.0" {...register('temperature')} />
        </FormField>
        <FormField label="Weight (kg)" error={errors.weight?.message}>
          <Input type="number" step="0.1" placeholder="65" {...register('weight')} />
        </FormField>
      </div>

      <FormField label="Diagnosis" error={errors.diagnosis?.message}>
        <Input placeholder="e.g. Viral fever" {...register('diagnosis')} />
      </FormField>

      <FormField label="Treatment plan">
        <Textarea rows={2} placeholder="Advice, plan, referrals…" {...register('treatmentPlan')} />
      </FormField>

      <FormField label="Doctor notes">
        <Textarea rows={2} placeholder="Additional notes / follow-up instructions" {...register('notes')} />
      </FormField>

      <div className="flex justify-end gap-2 pt-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" loading={busy}>
          {initialValues ? 'Save changes' : 'Save visit'}
        </Button>
      </div>
    </form>
  );
}