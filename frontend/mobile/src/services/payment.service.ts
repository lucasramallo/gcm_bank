import { paymentApi } from "@/config/api"

export interface PaymentData {
  billId: string
  amount: number
}

export interface Bill {
  id: string
  barcode: string
  amount: number
  dueDate: string
  description: string
  status: "pending" | "paid" | "overdue"
}

export interface Payment {
  id: string
  billId: string
  accountId: string
  amount: number
  status: "pending" | "completed" | "failed"
  createdAt: string
}

class PaymentService {
  async createPayment(data: PaymentData): Promise<Payment> {
    const response = await paymentApi.post("/payments", data)
    return response.data
  }

  async getPaymentHistory(): Promise<Payment[]> {
    const response = await paymentApi.get("/payments/history")
    return response.data
  }

  async getBillByBarcode(barcode: string): Promise<Bill> {
    const response = await paymentApi.get(`/bills/barcode/${barcode}`)
    return response.data
  }

  async getPendingBills(): Promise<Bill[]> {
    const response = await paymentApi.get("/bills/pending")
    return response.data
  }
}

export default new PaymentService()
