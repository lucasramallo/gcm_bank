import { Bill, BillModel } from "../models/bill.model";

// Simulated in-memory "database"
let bills: Bill[] = [];

export class BillRepository {
  async save(bill: Bill): Promise<Bill> {
    console.log(`[REPO] Saving bill: ${bill.id}`);
    bills.push(bill);
    return bill;
  }

  async findById(id: string): Promise<Bill | null> {
    console.log(`[REPO] Searching bill by id: ${id}`);
    return bills.find((b) => b.id === id) || null;
  }
}

export default new BillRepository();
