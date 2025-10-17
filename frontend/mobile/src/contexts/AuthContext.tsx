"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import authService from "@/services/auth.service"

interface User {
  id: string
  email: string
  name: string
}

interface AuthContextData {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (data: any) => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadStoredUser()
  }, [])

  async function loadStoredUser() {
    try {
      const storedUser = await authService.getStoredUser()
      if (storedUser) {
        setUser(storedUser)
      }
    } catch (error) {
      console.error("Error loading stored user:", error)
    } finally {
      setLoading(false)
    }
  }

  async function signIn(email: string, password: string) {
    const response = await authService.login({ email, password })
    setUser(response.user)
  }

  async function signUp(data: any) {
    const response = await authService.register(data)
    setUser(response.user)
  }

  async function signOut() {
    await authService.logout()
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
