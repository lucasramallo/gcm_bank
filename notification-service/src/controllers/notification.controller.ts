import { Request, Response } from "express";
import notificationService from "../services/notification.service";

interface NotificationRequest {
  userId: number;
  recipientEmail: string;
  message: string;
}

export class NotificationController {
  async send(
    req: Request<{}, {}, NotificationRequest>,
    res: Response
  ): Promise<void> {
    const { userId, recipientEmail, message } = req.body;
    console.log(
      `[CONTROLLER] Send email notification request for user ${userId}, email: ${recipientEmail}`
    );
    try {
      const notification = await notificationService.sendEmailNotification(
        userId,
        recipientEmail,
        message
      );
      res.status(201).json(notification);
    } catch (error: any) {
      console.log(`[CONTROLLER] Error in send notification: ${error.message}`);
      res.status(500).json({ error: "Failed to send notification" });
    }
  }

  async getStatus(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    console.log(`[CONTROLLER] Get notification status request for id: ${id}`);
    try {
      const notification = await notificationService.getNotificationStatus(id);
      if (notification) {
        res.status(200).json(notification);
      } else {
        res.status(404).json({ error: "Notification not found" });
      }
    } catch (error: any) {
      console.log(`[CONTROLLER] Error in get status: ${error.message}`);
      res.status(500).json({ error: "Failed to get status" });
    }
  }
}

export default new NotificationController();
