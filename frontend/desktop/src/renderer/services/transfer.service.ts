import { transferApi } from "../config/api"
import type { Transfer, TransferRequest } from "../types"

export const transferService = {
  async createTransfer(data: TransferRequest): Promise<Transfer> {
    const response = await transferApi.post("/transfers", data)
    return response.data
  },

  async getTransfers(): Promise<Transfer[]> {
    const response = await transferApi.get("/transfers")
    return response.data
  },

  async getTransferById(id: string): Promise<Transfer> {
    const response = await transferApi.get(`/transfers/${id}`)
    return response.data
  },

  async cancelTransfer(id: string): Promise<void> {
    await transferApi.delete(`/transfers/${id}`)
  },
}
