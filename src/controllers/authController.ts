import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import passport from "passport";

export class AuthController {

    public authenticate(req: Request, res: Response): void {
        passport.authenticate("local", { session: false }, (err, user, info) => {
            if (err) {
                return res.status(401).json({
                    message: "Something is not right",
                    user
                });
            }

            req.login(user, { session: false }, (error) => {
                if (error) {
                    res.send(error);
                }

                const token = jwt.sign({
                    user: user.username
                }, "your_jwt_secret");
                return res.json({user, token});
            });
        })(req, res);
    }

}
