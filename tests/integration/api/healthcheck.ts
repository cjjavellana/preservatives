import chai from "chai";
import { Response } from "superagent";
import request from "supertest";
import app from "../../../src/app";

const expect = chai.expect;

describe("Health Check Tests", () => {

    it("should return ready to serve message", (done: Mocha.Done) => {
        request(app)
            .get("/")
            .end((err, res: Response) => {
                expect(res.text).to.equal("I'm alive and ready to serve");
                expect(res.status).to.equal(200);
                done();
            });
    });

});
