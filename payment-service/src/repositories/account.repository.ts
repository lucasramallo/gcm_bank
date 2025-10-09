import { Account, AccountModel } from "../models/account.model";

// Simulated in-memory "database"
let accounts: Account[] = [
  new AccountModel(1, 10000),
  new AccountModel(2, 8000),
];

export class AccountRepository {
  async getBalance(accountId: number): Promise<number> {
    console.log(`[REPO] Checking balance for account: ${accountId}`);
    const account = accounts.find((a) => a.id === accountId);
    return account ? account.balance : 0;
  }

  async updateBalance(accountId: number, amount: number): Promise<void> {
    console.log(
      `[REPO] Updating balance for account: ${accountId} by $${amount}`
    );
    const account = accounts.find((a) => a.id === accountId);
    if (account) account.balance -= amount;
  }
}

export default new AccountRepository();
