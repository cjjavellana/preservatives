import { Authenticator, UserDetails } from "../../models/auth";

export class LdapAuthenticator implements Authenticator {

    public authenticate(username: string, password: string): UserDetails {
        throw new Error("Method not implemented.");
    }

}
