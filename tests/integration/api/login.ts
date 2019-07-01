import chai from "chai";
import request from "supertest";
import app from "../../../src/app";

const expect = chai.expect;

describe("Authentication", () => {

    it("can authenticate against the database", (done) => {
        request(app)
            .post("/api/v1/login")
            .send({
                username: "admin",
                // tslint:disable-next-line: object-literal-sort-keys
                password: "admin"
            })
            .expect("Content-Type", /json/)
            .expect(200)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                done();
            });
    });
});
