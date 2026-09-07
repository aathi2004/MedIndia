import { PrismaClient } from '../generated-client/index.js';

// A single shared PrismaClient instance for the whole server.
// It is safe to reuse and recommended by Prisma to avoid exhausting
// database connections in development.
export const prisma = new PrismaClient();