import db from "../../../src/db";

before(async () => {
    await createDatabaseIfRequired();
    await useDatabase();
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
