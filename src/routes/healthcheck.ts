import { HealthCheckController } from "@controllers/healthCheckController";
import express from "express";

const router = express.Router();
const healthCheckController = new HealthCheckController();

router.get("/", healthCheckController.get);

export default router;
