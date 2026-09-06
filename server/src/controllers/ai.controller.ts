import { Request, Response } from 'express';
import { asyncHandler } from '../utils/asyncHandler.js';
import { createClinicalSummarizer } from '../services/clinicalSummarizer.service.js';

const summarizer = createClinicalSummarizer();

/** POST /api/ai/summarize-note */
export const summarizeClinicalNote = asyncHandler(async (req: Request, res: Response) => {
  const { note } = req.body as { note: string };

  // Guard against pathological inputs.
  const safeNote = note.trim().slice(0, 8000);
  if (safeNote.length < 10) {
    return res.status(400).json({ success: false, message: 'The clinical note is too short to summarise' });
  }

  const summary = await summarizer.summarize(safeNote);
  res.json({ success: true, data: summary });
});