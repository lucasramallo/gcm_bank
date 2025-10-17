import { UUID } from "crypto";
import { Transfer, TransferModel } from "../models/transfer.model";

// Simulated in-memory "database"
let transfers: Transfer[] = [];

export class TransferRepository {
  async save(transfer: Transfer): Promise<Transfer> {
    console.log(`[REPO] Saving transfer: ${transfer.id}`);
    transfers.push(transfer);
    return transfer;
  }

  async findById(id: UUID): Promise<Transfer | null> {
    console.log(`[REPO] Searching transfer by id: ${id}`);
    return transfers.find((t) => t.id === id) || null;
  }
}

export default new TransferRepository();
