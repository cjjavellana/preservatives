import chai from "chai";
import request from "supertest";
import app from "../../../src/app";

const expect = chai.expect;

describe("Authentication", () => {

    it("returns unauthenticated (401) when username/password is invalid", (done) => {
        request(app)
            .post("/api/v1/login")
            .set("Accept", "application/json")
            .send({
                username: "invalid",
                // tslint:disable-next-line: object-literal-sort-keys
                password: "invalid"
            })
            .expect(401)
            .expect("Content-Type", /json/)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                done();
            });
    });

    it("returns success (200) when username/password is valid", (done) => {
        request(app)
            .post("/api/v1/login")
            .set("Accept", "application/json")
            .send({
                username: "admin",
                // tslint:disable-next-line: object-literal-sort-keys
                password: "admin"
            })
            .expect(200)
            .expect("Content-Type", /json/)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                done();
            });
    });
});
