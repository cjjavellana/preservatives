import { Authenticator, UserDetails } from "@models/auth";

export class LdapAuthenticator implements Authenticator {

    public authenticate(username: string, password: string): Promise<UserDetails> {
        return new Promise((resolve, reject) => {
            reject("Not implemented yet");
        });
    }

}
