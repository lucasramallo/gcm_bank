import { User, UserModel } from "../models/user.model";

// Simulated in-memory "database"
let users: User[] = [];

export class UserRepository {
  async findByUsername(username: string): Promise<User | null> {
    console.log(`[REPO] Searching for user: ${username}`);
    return users.find((u) => u.username === username) || null;
  }

  async save(user: User): Promise<User> {
    console.log(`[REPO] Saving user: ${user.username}`);
    users.push(user);
    return user;
  }
}

export default new UserRepository();
