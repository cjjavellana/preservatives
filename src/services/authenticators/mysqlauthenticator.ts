import { Pool } from "mysql";
import { Authenticator, UserDetails } from "../../models/auth";

class MysqlAuthenticator implements Authenticator {

    private connection: Pool;

    constructor(connection: Pool) {
        this.connection = connection;
    }

    public authenticate(username: string, password: string): UserDetails {
        throw new Error("Method not implemented.");
    }

}
