"use client";

import type React from "react";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { authService } from "../services/auth.service";
import type { User, LoginCredentials, RegisterData } from "../types";
import { AxiosError } from "axios";

interface AuthContextData {
  user: User | null;
  loading: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const generateFakeToken = () => {
  return 'fake_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStoredUser();
  }, []);

  const loadStoredUser = async () => {
    try {
      const storedUser = localStorage.getItem("user");
      const token = localStorage.getItem("token");

      if (storedUser && token) {
        setUser(JSON.parse(storedUser));
        setLoading(false);
        return;
      }

      if (token) {
        const currentUser = await authService.getCurrentUser();
        setUser(currentUser);
        localStorage.setItem("user", JSON.stringify(currentUser));
      }
    } catch (error) {
      console.error("Failed to load user:", error);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials: LoginCredentials) => {
    try {
      const { user, token } = await authService.login(credentials);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
    } catch (error: unknown) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      throw error as AxiosError;
    }
  };

  const register = async (data: RegisterData) => {
    try {
      const { user, token } = await authService.register(data);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
    } catch (error) {
      console.error("Register error:", error);
      const fakeUser: User = {
        id: 'temp_' + Date.now().toString(36),
        name: data.name,
        email: data.email,
        cpf: data.cpf,
        accountNumber: 'temp_' + Math.random().toString(36).substr(2, 8),
        balance: 0,
        createdAt: new Date().toISOString(),
      };
      const fakeToken = generateFakeToken();
      
      localStorage.setItem("token", fakeToken);
      localStorage.setItem("user", JSON.stringify(fakeUser));
      setUser(fakeUser);
      throw new Error("[ERRO]: Registrado localmente devido a erro na comunicação com o servidor.");
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      // localStorage.removeItem("token");
      // localStorage.removeItem("user");
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};