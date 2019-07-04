import express from "express";
import { HealthCheckController } from "../controllers/healthCheckController";

export function register() {
    const route = express.Router();
    const healthCheckController = new HealthCheckController();
    route.get("/", healthCheckController.get);
    return route;
}
