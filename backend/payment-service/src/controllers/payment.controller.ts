import { Request, Response } from "express";
import paymentService from "../services/payment.service";

interface PaymentRequest {
  accountId: number;
  amount: number;
  dueDate: string; // ISO string
}

export class PaymentController {
  async pay(
    req: Request<{}, {}, PaymentRequest>,
    res: Response
  ): Promise<void> {
    const { accountId, amount, dueDate } = req.body;
    console.log(
      `[CONTROLLER] Pay bill request for account: ${accountId}, amount: $${amount}`
    );
    try {
      const bill = await paymentService.payBill(
        accountId,
        amount,
        new Date(dueDate)
      );
      res.status(201).json(bill);
    } catch (error: any) {
      console.log(`[CONTROLLER] Error in payment: ${error.message}`);
      res.status(400).json({ error: error.message });
    }
  }

  async getStatus(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    console.log(`[CONTROLLER] Get bill status request for id: ${id}`);
    try {
      const bill = await paymentService.getBillStatus(id);
      if (bill) {
        res.status(200).json(bill);
      } else {
        res.status(404).json({ error: "Bill not found" });
      }
    } catch (error: any) {
      console.log(`[CONTROLLER] Error in get status: ${error.message}`);
      res.status(500).json({ error: "Failed to get status" });
    }
  }
}

export default new PaymentController();
