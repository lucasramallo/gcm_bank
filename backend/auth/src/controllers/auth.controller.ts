import { Request, Response } from "express";
import authService from "../services/auth.service";

export class AuthController {
  async register(req: Request, res: Response): Promise<void> {
    const { username, password } = req.body;
    console.log(`[CONTROLLER] Register request for: ${username}`);
    try {
      const user = await authService.register(username, password);
      res.status(201).json({ message: "User registered", user });
    } catch (error: any) {
      console.log(`[CONTROLLER] Error in register: ${error.message}`);
      res.status(500).json({ error: "Registration failed" });
    }
  }

  async login(req: Request, res: Response): Promise<void> {
    const { username, password } = req.body;
    console.log(`[CONTROLLER] Login request for: ${username}`);
    try {
      const result = await authService.login(username, password);
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    } catch (error: any) {
      console.log(`[CONTROLLER] Error in login: ${error.message}`);
      res.status(500).json({ error: "Login failed" });
    }
  }
}

export default new AuthController();
