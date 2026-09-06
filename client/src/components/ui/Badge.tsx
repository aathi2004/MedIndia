import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

type Tone = 'green' | 'red' | 'yellow' | 'blue' | 'gray' | 'teal';

const tones: Record<Tone, string> = {
  green: 'bg-emerald-100 text-emerald-800',
  red: 'bg-red-100 text-red-800',
  yellow: 'bg-amber-100 text-amber-800',
  blue: 'bg-sky-100 text-sky-800',
  gray: 'bg-slate-100 text-slate-600',
  teal: 'bg-teal-100 text-teal-800',
};

export function Badge({ children, tone = 'gray', className }: { children: ReactNode; tone?: Tone; className?: string }) {
  return (
    <span className={cn('inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium capitalize', tones[tone], className)}>
      {children}
    </span>
  );
}