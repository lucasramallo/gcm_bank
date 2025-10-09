export interface Bill {
  id: string;
  accountId: number;
  amount: number;
  dueDate: Date;
  status: "pending" | "paid" | "overdue";
}

export class BillModel implements Bill {
  constructor(
    public id: string,
    public accountId: number,
    public amount: number,
    public dueDate: Date,
    public status: "pending" | "paid" | "overdue" = "pending"
  ) {}
}
