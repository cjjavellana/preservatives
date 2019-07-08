import fs from "fs";
import { PoolConnection } from "promise-mysql";
import db from "../../../src/db";

let connection: PoolConnection;

before(async () => {
    const pool = await db;
    connection = await pool.getConnection();
    await createDatabaseIfRequired();
    await useDatabase();
    await createSchema();
});

after((done) => {
    db.then((pool) => {
        pool.releaseConnection(connection);
        done();
    });
});

async function createDatabaseIfRequired() {
    connection.query("CREATE DATABASE IF NOT EXISTS ServiceMonitor");
}

async function useDatabase() {
    connection.query("Use ServiceMonitor");
}

async function createSchema() {
    const schema = fs.readFileSync("./db/schema.sql");
    connection.query(schema.toString());
}
