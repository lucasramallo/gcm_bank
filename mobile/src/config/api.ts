import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"

// Configure base URLs for each service
export const API_CONFIG = {
  AUTH_SERVICE: process.env.EXPO_PUBLIC_AUTH_SERVICE_URL || "http://localhost:3001",
  TRANSFER_SERVICE: process.env.EXPO_PUBLIC_TRANSFER_SERVICE_URL || "http://localhost:3002",
  PAYMENT_SERVICE: process.env.EXPO_PUBLIC_PAYMENT_SERVICE_URL || "http://localhost:3003",
  NOTIFICATION_SERVICE: process.env.EXPO_PUBLIC_NOTIFICATION_SERVICE_URL || "http://localhost:3004",
}

// Create axios instances for each service
export const authApi = axios.create({
  baseURL: API_CONFIG.AUTH_SERVICE,
  timeout: 10000,
})

export const transferApi = axios.create({
  baseURL: API_CONFIG.TRANSFER_SERVICE,
  timeout: 10000,
})

export const paymentApi = axios.create({
  baseURL: API_CONFIG.PAYMENT_SERVICE,
  timeout: 10000,
})

export const notificationApi = axios.create({
  baseURL: API_CONFIG.NOTIFICATION_SERVICE,
  timeout: 10000,
})

// Add auth token interceptor
const addAuthInterceptor = (api: typeof axios) => {
  api.interceptors.request.use(
    async (config) => {
      const token = await AsyncStorage.getItem("auth_token")
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    (error) => Promise.reject(error),
  )
}

// Apply interceptors to all APIs
addAuthInterceptor(authApi)
addAuthInterceptor(transferApi)
addAuthInterceptor(paymentApi)
addAuthInterceptor(notificationApi)
