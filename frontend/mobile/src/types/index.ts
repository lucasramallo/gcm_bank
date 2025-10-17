export interface User {
  id: string
  email: string
  name: string
  cpf: string
  accountNumber: string
}

export interface Account {
  id: string
  userId: string
  accountNumber: string
  balance: number
  createdAt: string
}

export interface ApiError {
  message: string
  code?: string
  details?: any
}
