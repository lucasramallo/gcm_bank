import { Request, Response } from "express";
import validationService from "../services/validation.service";

export class AccountController {
  async checkBalance(req: Request, res: Response): Promise<void> {
    const { accountId } = req.params;
    console.log(`[CONTROLLER] Check balance request for account: ${accountId}`);
    try {
      const balance = await validationService.validateBalance(
        Number(accountId),
        0
      ); // Just check existence
      res
        .status(200)
        .json({
          accountId: Number(accountId),
          balance: balance
            ? await validationService.validateBalance(Number(accountId), 0)
            : 0,
        });
    } catch (error: any) {
      console.log(`[CONTROLLER] Error in check balance: ${error.message}`);
      res.status(500).json({ error: "Failed to check balance" });
    }
  }
}

export default new AccountController();
