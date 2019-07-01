export class UserDetails {

    private username: string;
    private displayName: string;
    private authorities: string[];

    constructor(username: string, displayName: string, authorities: string[]) {
        this.username = username;
        this.displayName = displayName;
        this.authorities = authorities;
    }
}

export interface Authenticator {

    /**
     * Authenticates the user against a backing authentication medium.
     *
     * Implementation class are required to throw an `Error` when authentication
     * is unsuccessful.
     *
     * @param username
     * @param password
     */
    authenticate(username: string, password: string): UserDetails;
}
