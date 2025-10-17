import { paymentApi } from "../config/api"
import type { Payment, PaymentRequest } from "../types"

export const paymentService = {
  async createPayment(data: PaymentRequest): Promise<Payment> {
    const response = await paymentApi.post("/payments", data)
    return response.data
  },

  async getPayments(): Promise<Payment[]> {
    const response = await paymentApi.get("/payments")
    return response.data
  },

  async getPaymentById(id: string): Promise<Payment> {
    const response = await paymentApi.get(`/payments/${id}`)
    return response.data
  },

  async validateBarcode(barcode: string): Promise<{ valid: boolean; amount?: number }> {
    const response = await paymentApi.post("/payments/validate-barcode", { barcode })
    return response.data
  },
}
