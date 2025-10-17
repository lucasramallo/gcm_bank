import crypto, { randomUUID } from "crypto";
import { User, UserModel } from "../models/user.model";
import userRepo from "../repositories/user.repository";
import cryptoService from "./crypto.service";

export class AuthService {
  async register(username: string, password: string): Promise<User> {
    console.log(`[SERVICE] Registering user: ${username}`);
    const passwordHash = cryptoService.hashPassword(password);
    const user = new UserModel(randomUUID(), username, passwordHash); // Simulate ID
    return await userRepo.save(user);
  }

  async login(
    username: string,
    password: string
  ): Promise<{ token: string } | null> {
    console.log(`[SERVICE] Logging in user: ${username}`);
    const user = await userRepo.findByUsername(username);
    if (!user) {
      console.log(`[SERVICE] User not found: ${username}`);
      return null;
    }
    const inputHash = cryptoService.hashPassword(password);
    if (user.passwordHash === inputHash) {
      console.log(`[SERVICE] Login successful for: ${username}`);
      console.log(
        `[SERVICE] Simulating notify other services: Sending welcome notification`
      );
      return { token: "fake-jwt-token" };
    }
    console.log(`[SERVICE] Invalid password for: ${username}`);
    return null;
  }
}

export default new AuthService();
