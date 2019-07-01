import express from "express";
import { HealthCheckController } from "../controllers/healthcheck";

export function register(): express.Router {
    const routes = express.Router();
    const healthCheckController = new HealthCheckController();
    routes.get("/", healthCheckController.get);
    return routes;
}
