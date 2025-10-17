import axios from "axios"

const AUTH_SERVICE_URL = import.meta.env.VITE_AUTH_SERVICE_URL || "http://localhost:3001"
const TRANSFER_SERVICE_URL = import.meta.env.VITE_TRANSFER_SERVICE_URL || "http://localhost:3002"
const PAYMENT_SERVICE_URL = import.meta.env.VITE_PAYMENT_SERVICE_URL || "http://localhost:3003"
const NOTIFICATION_SERVICE_URL = import.meta.env.VITE_NOTIFICATION_SERVICE_URL || "http://localhost:3004"

export const authApi = axios.create({
  baseURL: AUTH_SERVICE_URL,
  timeout: 10000,
})

export const transferApi = axios.create({
  baseURL: TRANSFER_SERVICE_URL,
  timeout: 10000,
})

export const paymentApi = axios.create({
  baseURL: PAYMENT_SERVICE_URL,
  timeout: 10000,
})

export const notificationApi = axios.create({
  baseURL: NOTIFICATION_SERVICE_URL,
  timeout: 10000,
})

// Interceptor para adicionar token em todas as requisições
const apis = [authApi, transferApi, paymentApi, notificationApi]

apis.forEach((api) => {
  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token")
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    },
  )

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        localStorage.removeItem("token")
        window.location.href = "/login"
      }
      return Promise.reject(error)
    },
  )
})
