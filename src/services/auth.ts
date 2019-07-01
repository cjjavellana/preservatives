import { Authenticator, UserDetails } from "../models/auth";

export class AuthService {

    private authenticators: Authenticator[];

    constructor(authenticators: Authenticator[]) {
        this.authenticators = authenticators;
    }

    public authenticate(username: string, password: string): UserDetails {

        for (const authenticator of this.authenticators) {
            try {
                return authenticator.authenticate(username, password);
            } catch (e) {
                console.log(e);
            }
        }

        throw Error("Exhausted authentication options");
    }
}
