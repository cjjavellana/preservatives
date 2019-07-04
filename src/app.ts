import "module-alias/register";

// tslint:disable-next-line: ordered-imports
import * as authRoute from "@routes/auth";
import * as healthCheckRoute from "@routes/healthcheck";

import dotenv from "dotenv";
import express from "express";

if (process.env.CONFIG_LOCATION) {
    dotenv.config({
        path: process.env.CONFIG_LOCATION
    });
}

const app = express();
app.use("/", healthCheckRoute.register());
app.use("/api/v1", authRoute.register());

export default app;
