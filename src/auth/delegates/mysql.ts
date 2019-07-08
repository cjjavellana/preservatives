import { Authenticator, UserDetails } from "@models/auth";
import * as Bluebird from "bluebird";
import { Pool } from "promise-mysql";

export class MysqlAuthenticator implements Authenticator {

    private pool: Bluebird<Pool>;

    constructor(pool: Bluebird<Pool>) {
        this.pool = pool;
    }

    public async authenticate(username: string, password: string): Promise<UserDetails> {
        return new Promise(async (resolve, reject) => {
            const db = await this.pool;
            const conn = await db.getConnection();
            const query = conn.query("select username, password from users where username = ?", [ username ]);

            query.then((result: any[]) => {
                if (result.length === 0) {
                    return reject(new Error("Invalid username / password"));
                }

                return resolve(new UserDetails(username, "", []));
            }).catch((error) => {
                return reject(error);
            }).finally(() => {
                db.releaseConnection(conn);
            });
        });
    }

}
