import fs from "fs";
import db from "../../../src/db";

before(async () => {
    await createDatabaseIfRequired();
    await useDatabase();
    await createSchema();
});

after(async () => {
    const conn = await db;
    await conn.end();
});

async function createDatabaseIfRequired() {
    const conn = await db;
    await conn.query("CREATE DATABASE IF NOT EXISTS ServiceMonitor");
}

async function useDatabase() {
    const conn = await db;
    await conn.query("Use ServiceMonitor");
}

async function createSchema() {
    const conn = await db;
    const schema = fs.readFileSync("./db/schema.sql");
    await conn.query(schema.toString());
}
