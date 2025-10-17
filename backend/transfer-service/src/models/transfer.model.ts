import { UUID } from "crypto";

export interface Transfer {
  id: UUID;
  fromAccountId: number;
  toAccountId: number;
  amount: number;
  date: Date;
  status: "pending" | "completed" | "failed";
}

export class TransferModel implements Transfer {
  constructor(
    public id: UUID,
    public fromAccountId: number,
    public toAccountId: number,
    public amount: number,
    public date: Date,
    public status: "pending" | "completed" | "failed" = "pending"
  ) {}
}
