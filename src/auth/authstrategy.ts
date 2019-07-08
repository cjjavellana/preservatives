import passport from "passport";
import { Strategy } from "passport-local";
import db from "../db";
import { MysqlAuthenticator } from "./delegates/mysql";

export function register() {
    const authenticator = new MysqlAuthenticator(db);

    passport.use(new Strategy(async (username: string, password: string, done) => {
        try {
            const userDetails = await authenticator.authenticate(username, password);
            return done(null, userDetails);
        } catch (error) {
            return done(error, null);
        }
    }));
}
