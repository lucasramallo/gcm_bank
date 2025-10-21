import { authApi } from "../config/api";
import type { User, LoginCredentials, RegisterData } from "../types";

export const authService = {
  async login(
    credentials: LoginCredentials
  ): Promise<{ user: User; token: string }> {
    const response = await authApi.post("/auth/login", credentials);
    return response.data;
  },

  async register(data: RegisterData): Promise<{ user: User; token: string }> {
    const response = await authApi.post("/auth/register", data);
    return response.data;
  },

  async logout(): Promise<void> {
    await authApi.post("/auth/logout");
  },

  async getCurrentUser(): Promise<User> {
    const response = await authApi.get("/auth/me");
    return response.data;
  },

  async refreshToken(): Promise<{ token: string }> {
    const response = await authApi.post("/auth/refresh");
    return response.data;
  },
};
