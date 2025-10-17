export interface Notification {
  id: string;
  userId: number;
  recipientEmail: string;
  message: string;
  sentAt: Date;
  status: "pending" | "sent" | "failed";
}

export class NotificationModel implements Notification {
  constructor(
    public id: string,
    public userId: number,
    public recipientEmail: string,
    public message: string,
    public sentAt: Date = new Date(),
    public status: "pending" | "sent" | "failed" = "pending"
  ) {}
}
