import { authStorage } from './authStorage';

export class ApiError extends Error {
  statusCode: number;
  errors?: Record<string, string[]>;

  constructor(statusCode: number, message: string, errors?: Record<string, string[]>) {
    super(message);
    this.name = 'ApiError';
    this.statusCode = statusCode;
    this.errors = errors;
  }
}

type ApiOptions = Omit<RequestInit, 'body'> & { body?: unknown };

/**
 * Centralised fetch wrapper. Attaches the JWT, parses structured errors and
 * gives callers a single place to handle 401s.
 */
async function request<T>(path: string, options: ApiOptions = {}): Promise<T> {
  const { body, headers, ...rest } = options;
  const token = authStorage.getToken();

  const response = await fetch(`/api${path}`, {
    ...rest,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  const payload = (await response.json().catch(() => null)) as
    | { success?: boolean; message?: string; errors?: Record<string, string[]>; data?: T }
    | null;

  if (!response.ok) {
    throw new ApiError(response.status, payload?.message ?? 'Something went wrong', payload?.errors);
  }

  return (payload?.data ?? payload) as T;
}

export const http = {
  get: <T>(path: string) => request<T>(path),
  post: <T>(path: string, body?: unknown) => request<T>(path, { method: 'POST', body }),
  put: <T>(path: string, body?: unknown) => request<T>(path, { method: 'PUT', body }),
  delete: <T>(path: string) => request<T>(path, { method: 'DELETE' }),
};