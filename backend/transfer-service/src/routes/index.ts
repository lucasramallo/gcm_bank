import { Router } from "express";
import transferController from "../controllers/transfer.controller";
import accountController from "../controllers/account.controller";

const router: Router = Router();

router.post("/transfers", transferController.create.bind(transferController));
router.get(
  "/transfers/:id",
  transferController.getStatus.bind(transferController)
);
router.get(
  "/accounts/:accountId/balance",
  accountController.checkBalance.bind(accountController)
);

export default router;
