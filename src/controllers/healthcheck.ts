import { Request, Response } from "express";

export class HealthCheckController {
    public get(req: Request, res: Response): void {
        res.send("I'm alive and ready to serve");
    }
}
