import mysql from "promise-mysql";

const maxConnections = (process.env.DB_MAX_CONNECTIONS) ? parseInt(process.env.DB_MAX_CONNECTIONS, 10) : 10;
const port = (process.env.DB_PORT) ? parseInt(process.env.DB_PORT, 10) : 3306;
const connection = mysql.createPool({
        // tslint:disable: object-literal-sort-keys
        connectionLimit: maxConnections,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        port,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        multipleStatements: true
        // tslint:enable: object-literal-sort-keys
    });

export default connection;
