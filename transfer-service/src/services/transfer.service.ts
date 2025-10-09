import { Transfer, TransferModel } from "../models/transfer.model";
import transferRepo from "../repositories/transfer.repository";
import validationService from "./validation.service";
import config from "../config/config";
import { randomUUID, UUID } from "crypto";

export class TransferService {
  async createTransfer(
    fromAccountId: number,
    toAccountId: number,
    amount: number
  ): Promise<Transfer> {
    console.log(
      `[SERVICE] Creating transfer: ${fromAccountId} -> ${toAccountId}, $${amount}`
    );
    if (amount > config.maxTransferLimit) {
      throw new Error(
        `Transfer amount exceeds limit of $${config.maxTransferLimit}`
      );
    }
    if (await validationService.validateBalance(fromAccountId, amount)) {
      const transfer = new TransferModel(
        randomUUID(),
        fromAccountId,
        toAccountId,
        amount,
        new Date()
      );
      await transferRepo.save(transfer);
      console.log(
        `[SERVICE] Simulating notify other services: Sending transfer confirmation`
      );
      return { ...transfer, status: "completed" };
    }
    throw new Error("Insufficient balance");
  }

  async getTransferStatus(id: string): Promise<Transfer | null> {
    console.log(`[SERVICE] Checking transfer status: ${id}`);
    return await transferRepo.findById(id as UUID);
  }
}

export default new TransferService();
