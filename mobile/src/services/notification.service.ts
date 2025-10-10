import { notificationApi } from "@/config/api"

export interface Notification {
  id: string
  userId: string
  title: string
  message: string
  type: "transfer" | "payment" | "security" | "general"
  read: boolean
  createdAt: string
}

class NotificationService {
  async getNotifications(): Promise<Notification[]> {
    const response = await notificationApi.get("/notifications")
    return response.data
  }

  async markAsRead(notificationId: string): Promise<void> {
    await notificationApi.patch(`/notifications/${notificationId}/read`)
  }

  async markAllAsRead(): Promise<void> {
    await notificationApi.patch("/notifications/read-all")
  }

  async deleteNotification(notificationId: string): Promise<void> {
    await notificationApi.delete(`/notifications/${notificationId}`)
  }
}

export default new NotificationService()
