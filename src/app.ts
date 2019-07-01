import dotenv from "dotenv";
import express, { Router } from "express";
import * as healthCheck from "./routes/healthcheck";

if (process.env.CONFIG_LOCATION) {
    dotenv.config({
        path: process.env.CONFIG_LOCATION
    });
}

const app = express();
app.use("/", healthCheck.register());

export default app;
