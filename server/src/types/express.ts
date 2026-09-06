import { Role } from '@prisma/client';

declare global {
  // Express type augmentation — namespace syntax is required for this pattern.
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      user?: {
        id: number;
        name: string;
        email: string;
        role: Role;
      };
    }
  }
}

export {};