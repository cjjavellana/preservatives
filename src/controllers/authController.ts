import { Request, Response } from "express";

export class AuthController {

    public authenticate(req: Request, res: Response): void {
        res.send("I'm alive and ready to serve");
    }

}
