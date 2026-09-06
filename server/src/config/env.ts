import dotenv from 'dotenv';

dotenv.config();

function required(name: string, fallback?: string): string {
  const value = process.env[name] ?? fallback;
  if (value === undefined) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const env = {
  port: Number(process.env.PORT ?? 5000),
  databaseUrl: required('DATABASE_URL'),
  jwtSecret: required('JWT_SECRET', 'dev-secret-change-me-in-production'),
  jwtExpiresIn: '8h',
  clientUrl: process.env.CLIENT_URL ?? 'http://localhost:5173',
  aiApiKey: process.env.AI_API_KEY ?? '',
  aiApiBaseUrl: process.env.AI_API_BASE_URL ?? '',
};