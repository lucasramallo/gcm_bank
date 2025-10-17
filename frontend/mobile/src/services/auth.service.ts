import { authApi } from "@/config/api"
import AsyncStorage from "@react-native-async-storage/async-storage"

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData {
  email: string
  password: string
  name: string
  cpf: string
}

export interface AuthResponse {
  token: string
  user: {
    id: string
    email: string
    name: string
  }
}

class AuthService {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await authApi.post("/auth/login", credentials)
    await AsyncStorage.setItem("auth_token", response.data.token)
    await AsyncStorage.setItem("user", JSON.stringify(response.data.user))
    return response.data
  }

  async register(data: RegisterData): Promise<AuthResponse> {
    const response = await authApi.post("/auth/register", data)
    await AsyncStorage.setItem("auth_token", response.data.token)
    await AsyncStorage.setItem("user", JSON.stringify(response.data.user))
    return response.data
  }

  async logout(): Promise<void> {
    await AsyncStorage.removeItem("auth_token")
    await AsyncStorage.removeItem("user")
  }

  async getStoredToken(): Promise<string | null> {
    return await AsyncStorage.getItem("auth_token")
  }

  async getStoredUser(): Promise<any | null> {
    const user = await AsyncStorage.getItem("user")
    return user ? JSON.parse(user) : null
  }
}

export default new AuthService()
