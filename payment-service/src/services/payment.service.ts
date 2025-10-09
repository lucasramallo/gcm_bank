import { Bill, BillModel } from "../models/bill.model";
import billRepo from "../repositories/bill.repository";
import validationService from "./validation.service";
import config from "../config/config";
import { v4 as uuidv4 } from "uuid";

export class PaymentService {
  async payBill(
    accountId: number,
    amount: number,
    dueDate: Date
  ): Promise<Bill> {
    console.log(
      `[SERVICE] Paying bill for account: ${accountId}, amount: $${amount}`
    );
    if (amount > config.maxPaymentLimit) {
      throw new Error(
        `Payment amount exceeds limit of $${config.maxPaymentLimit}`
      );
    }
    if (await validationService.validateBalance(accountId, amount)) {
      const bill = new BillModel(uuidv4(), accountId, amount, dueDate, "paid");
      await billRepo.save(bill);
      console.log(
        `[SERVICE] Simulating notify other services: Sending payment confirmation`
      );
      return { ...bill, status: "paid" };
    }
    throw new Error("Insufficient balance");
  }

  async getBillStatus(id: string): Promise<Bill | null> {
    console.log(`[SERVICE] Checking bill status: ${id}`);
    return await billRepo.findById(id);
  }
}

export default new PaymentService();
