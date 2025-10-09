import { Router } from "express";
import authController from "../controllers/auth.controller";

const router: Router = Router();

router.post("/auth/register", authController.register.bind(authController));
router.post("/auth/login", authController.login.bind(authController));

export default router;
