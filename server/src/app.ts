import express, { Express } from 'express';
import cors from 'cors';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import apiRoutes from './routes/index.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';
import { env } from './config/env.js';

function resolveClientDist(): string | null {
  const here = path.dirname(fileURLToPath(import.meta.url));
  const candidates = [
    path.resolve(process.cwd(), 'client/dist'),
    path.resolve(here, '../../client/dist'),
  ];
  for (const dir of candidates) {
    if (fs.existsSync(path.join(dir, 'index.html'))) return dir;
  }
  return null;
}

export function createApp(): Express {
  const app = express();

  app.use(
    cors({
      origin: env.clientUrl,
      credentials: true,
    }),
  );
  app.use(express.json({ limit: '1mb' }));

  app.use('/api', apiRoutes);

  const clientDist = resolveClientDist();
  if (clientDist) {
    app.use(express.static(clientDist));
    app.use((req, res, next) => {
      if (req.method !== 'GET') return next();
      const file = path.join(clientDist, 'index.html');
      if (fs.existsSync(file)) return res.sendFile(file);
      next();
    });
  }

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}