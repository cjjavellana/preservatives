import { HealthCheckController } from "@controllers/healthCheckController";
import express from "express";

export function register() {
    const route = express.Router();
    const healthCheckController = new HealthCheckController();
    route.get("/", healthCheckController.get);
    return route;
}
