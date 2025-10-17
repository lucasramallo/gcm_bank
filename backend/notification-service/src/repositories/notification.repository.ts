import { Notification, NotificationModel } from "../models/notification.model";

// Simulated in-memory "database"
let notifications: Notification[] = [];

export class NotificationRepository {
  async save(notification: Notification): Promise<Notification> {
    console.log(`[REPO] Saving notification: ${notification.id}`);
    notifications.push(notification);
    return notification;
  }

  async findById(id: string): Promise<Notification | null> {
    console.log(`[REPO] Searching notification by id: ${id}`);
    return notifications.find((n) => n.id === id) || null;
  }
}

export default new NotificationRepository();
