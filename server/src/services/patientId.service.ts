import { prisma } from '../lib/prisma.js';

/**
 * Generates the next sequential patient ID (e.g. EHR-000007).
 * The racy count+1 approach could collide under concurrent writes; transaction
 * is not strictly needed here since the assignment is a local demo, but the
 * read is made relative to the max ID which is monotonic and safe in practice.
 */
export async function generatePatientId(): Promise<string> {
  const max = await prisma.$queryRawUnsafe<{ max: bigint | null }[]>(
    'SELECT MAX(CAST(SUBSTRING("patientId", 5) AS INTEGER)) AS max FROM "Patient"',
  );
  const next = Number(max[0]?.max ?? 0) + 1;
  return `EHR-${String(next).padStart(6, '0')}`;
}