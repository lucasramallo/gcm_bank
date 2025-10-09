import accountRepo from "../repositories/account.repository";

export class ValidationService {
  async validateBalance(accountId: number, amount: number): Promise<boolean> {
    console.log(
      `[SERVICE] Validating balance for account: ${accountId}, amount: $${amount}`
    );
    const balance = await accountRepo.getBalance(accountId);
    return balance >= amount;
  }
}

export default new ValidationService();
