export interface User {
  id: string;
  name: string;
  email: string;
  cpf: string;
  accountNumber: string;
  balance: number;
  createdAt: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  cpf: string;
}

export interface Transfer {
  id: string;
  fromAccountId: string;
  toAccountId: string;
  amount: number;
  description?: string;
  status: "pending" | "completed" | "failed";
  createdAt: string;
}

export interface TransferRequest {
  toAccountNumber: string;
  amount: number;
  description?: string;
}

export interface Payment {
  id: string;
  accountId: string;
  type: "bill" | "pix" | "barcode";
  amount: number;
  recipient: string;
  status: "pending" | "completed" | "failed";
  createdAt: string;
}

export interface PaymentRequest {
  type: "bill" | "pix" | "barcode";
  amount: number;
  recipient: string;
  code?: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
  read: boolean;
  createdAt: string;
}
