import { createApp } from '../src/app.js';

// Vercel serverless entry point: export the Express app instead of listening
// on a port. Routing for /api/* is handled by vercel.json rewrites.
const app = createApp();

export default app;