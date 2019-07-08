import { AuthController } from "@controllers/authController";
import express from "express";

const router = express.Router();
const authController = new AuthController();
router.post("/login", authController.authenticate);

export default router;
