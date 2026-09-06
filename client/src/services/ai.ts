import { http } from '../lib/api';
import type { ClinicalSummary } from '../types';

export const aiService = {
  summarizeNote: (note: string) => http.post<ClinicalSummary>('/ai/summarize-note', { note }),
};