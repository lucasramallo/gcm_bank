import { Router } from "express";
import paymentController from "../controllers/payment.controller";
import accountController from "../controllers/account.controller";

const router: Router = Router();

router.post("/bills", paymentController.pay.bind(paymentController));
router.get("/bills/:id", paymentController.getStatus.bind(paymentController));
router.get(
  "/accounts/:accountId/balance",
  accountController.checkBalance.bind(accountController)
);

export default router;
