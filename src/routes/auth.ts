import { AuthController } from "@controllers/authController";
import express from "express";

export function register() {
    const route = express.Router();
    const authController = new AuthController();
    route.post("/login", authController.authenticate);
    return route;
}
