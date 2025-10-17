import { transferApi } from "@/config/api"

export interface TransferData {
  recipientAccountNumber: string
  amount: number
  description?: string
}

export interface Transfer {
  id: string
  senderAccountId: string
  recipientAccountId: string
  amount: number
  description?: string
  status: "pending" | "completed" | "failed"
  createdAt: string
}

class TransferService {
  async createTransfer(data: TransferData): Promise<Transfer> {
    const response = await transferApi.post("/transfers", data)
    return response.data
  }

  async getTransferHistory(): Promise<Transfer[]> {
    const response = await transferApi.get("/transfers/history")
    return response.data
  }

  async getTransferById(id: string): Promise<Transfer> {
    const response = await transferApi.get(`/transfers/${id}`)
    return response.data
  }

  async validateAccount(accountNumber: string): Promise<boolean> {
    const response = await transferApi.post("/accounts/validate", { accountNumber })
    return response.data.valid
  }
}

export default new TransferService()
