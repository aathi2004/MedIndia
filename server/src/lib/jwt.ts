import jwt, { SignOptions } from 'jsonwebtoken';
import { env } from '../config/env.js';
import { User } from '../generated-client/index.js';

export interface TokenPayload {
  sub: number;
  email: string;
  role: string;
}

export function signToken(user: Pick<User, 'id' | 'email' | 'role'>): string {
  const payload: TokenPayload = {
    sub: user.id,
    email: user.email,
    role: user.role,
  };
  const options: SignOptions = { expiresIn: env.jwtExpiresIn as SignOptions['expiresIn'] };
  return jwt.sign(payload, env.jwtSecret, options);
}

export function verifyToken(token: string): TokenPayload {
  return jwt.verify(token, env.jwtSecret) as unknown as TokenPayload;
}