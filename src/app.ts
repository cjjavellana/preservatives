import "module-alias/register";

// tslint:disable-next-line: ordered-imports
import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";

if (process.env.CONFIG_LOCATION) {
    dotenv.config({
        path: process.env.CONFIG_LOCATION
    });
}

import authRoute from "@routes/auth";
import healthCheckRoute from "@routes/healthcheck";
import * as authStrategy from "./auth/authstrategy";

const app = express();
authStrategy.register();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", healthCheckRoute);
app.use("/api/v1", authRoute);

export default app;
