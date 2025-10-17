import { Router } from "express";
import notificationController from "../controllers/notification.controller";

const router: Router = Router();

router.post(
  "/notifications",
  notificationController.send.bind(notificationController)
);
router.get(
  "/notifications/:id",
  notificationController.getStatus.bind(notificationController)
);

export default router;
