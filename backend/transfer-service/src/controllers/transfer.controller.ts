import { Request, Response } from "express";
import transferService from "../services/transfer.service";

interface TransferRequest {
  fromAccountId: number;
  toAccountId: number;
  amount: number;
}

export class TransferController {
  async create(
    req: Request<{}, {}, TransferRequest>,
    res: Response
  ): Promise<void> {
    const { fromAccountId, toAccountId, amount } = req.body;
    console.log(
      `[CONTROLLER] Transfer request: ${fromAccountId} -> ${toAccountId}, $${amount}`
    );
    try {
      const transfer = await transferService.createTransfer(
        fromAccountId,
        toAccountId,
        amount
      );
      res.status(201).json(transfer);
    } catch (error: any) {
      console.log(`[CONTROLLER] Error in transfer: ${error.message}`);
      res.status(400).json({ error: error.message });
    }
  }

  async getStatus(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    console.log(`[CONTROLLER] Get transfer status request for id: ${id}`);
    try {
      const transfer = await transferService.getTransferStatus(id);
      if (transfer) {
        res.status(200).json(transfer);
      } else {
        res.status(404).json({ error: "Transfer not found" });
      }
    } catch (error: any) {
      console.log(`[CONTROLLER] Error in get status: ${error.message}`);
      res.status(500).json({ error: "Failed to get status" });
    }
  }
}

export default new TransferController();
