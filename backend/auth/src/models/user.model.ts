import { UUID } from "crypto";

export interface User {
  id: UUID;
  username: string;
  passwordHash: string;
}

export class UserModel implements User {
  constructor(
    public id: UUID,
    public username: string,
    public passwordHash: string
  ) {}
}
