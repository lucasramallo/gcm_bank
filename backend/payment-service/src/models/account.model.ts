export interface Account {
  id: number;
  balance: number;
}

export class AccountModel implements Account {
  constructor(public id: number, public balance: number) {}
}
