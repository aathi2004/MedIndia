import { http } from '../lib/api';
import { authStorage } from '../lib/authStorage';
import type { AuthUser, User, UserRole } from '../types';

export interface LoginResponse {
  user: AuthUser;
  token: string;
}

export async function login(email: string, password: string): Promise<LoginResponse> {
  const data = await http.post<LoginResponse>('/auth/login', { email, password });
  authStorage.setToken(data.token);
  authStorage.setUser(data.user);
  return data;
}

export function logout(): void {
  authStorage.clear();
}

export function getCurrentUser(): AuthUser | null {
  return authStorage.getUser();
}

export const userService = {
  list: () => http.get<User[]>('/users'),
  create: (payload: { name: string; email: string; password: string; role: UserRole }) =>
    http.post<User>('/users', payload),
  remove: (id: number) => http.delete<{ id: number }>(`/users/${id}`),
};