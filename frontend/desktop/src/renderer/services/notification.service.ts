import { notificationApi } from "../config/api";
import type { Notification } from "../types";

export const notificationService = {
  async getNotifications(): Promise<Notification[]> {
    const response = await notificationApi.get("/notifications");
    return response.data;
  },

  async markAsRead(id: string): Promise<void> {
    await notificationApi.patch(`/notifications/${id}/read`);
  },

  async markAllAsRead(): Promise<void> {
    await notificationApi.patch("/notifications/read-all");
  },

  async deleteNotification(id: string): Promise<void> {
    await notificationApi.delete(`/notifications/${id}`);
  },
};
