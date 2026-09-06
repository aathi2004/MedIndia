import { createApp } from './app.js';
import { env } from './config/env.js';
import { prisma } from './lib/prisma.js';

const app = createApp();

async function bootstrap() {
  try {
    // Verify the DB connection before accepting traffic.
    await prisma.$queryRaw`SELECT 1`;
    app.listen(env.port, () => {
      console.log(`EHR API server listening on http://localhost:${env.port}`);
    });
  } catch (err) {
    console.error('Failed to connect to the database:', err);
    process.exit(1);
  }
}

bootstrap();