import { Notification, NotificationModel } from "../models/notification.model";
import notificationRepo from "../repositories/notification.repository";
import config from "../config/config";
import { v4 as uuidv4 } from "uuid";

export class NotificationService {
  private async sendToSmtpService(
    recipientEmail: string,
    message: string
  ): Promise<boolean> {
    console.log(
      `[SERVICE] Simulating call to SMTP service at ${config.smtpServiceUrl}`
    );
    // Simulate network delay or external service call
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Simulate success or failure (e.g., 80% chance of success)
    const success = Math.random() > 0.2;
    if (success) {
      console.log(
        `[SERVICE] Simulated SMTP service accepted email for ${recipientEmail}`
      );
    } else {
      console.log(
        `[SERVICE] Simulated SMTP service failed to send email for ${recipientEmail}`
      );
    }
    return success;
  }

  async sendEmailNotification(
    userId: number,
    recipientEmail: string,
    message: string
  ): Promise<Notification> {
    console.log(
      `[SERVICE] Preparing to send email notification to ${recipientEmail} for user ${userId}: ${message}`
    );

    const success = await this.sendToSmtpService(recipientEmail, message);
    const status = success ? "sent" : "failed";

    console.log(
      `[SERVICE] Simulating notify other services: Email ${status} confirmation for user ${userId}`
    );

    const notification = new NotificationModel(
      uuidv4(),
      userId,
      recipientEmail,
      message
    );
    return await notificationRepo.save({ ...notification, status });
  }

  async getNotificationStatus(id: string): Promise<Notification | null> {
    console.log(`[SERVICE] Checking notification status: ${id}`);
    return await notificationRepo.findById(id);
  }
}

export default new NotificationService();
